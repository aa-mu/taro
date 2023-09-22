import Taro from '@tarojs/taro';
import {pageToLogin} from './utils';
import {HTTP_STATUS} from './config';

const customInterceptor = chain => {
  const requestParams = chain.requestParams;
  Taro.showLoading({
    title: '加载中',
  });
  return chain
    .proceed(requestParams)
    .then(res => {
      Taro.hideLoading();
      // 只要请求成功，不管返回什么状态码，都走这个回调
      if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        //404
        return Promise.reject({desc: '请求资源不存在'});
      } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        //502
        return Promise.reject({desc: '服务端出现了问题'});
      } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        //403
        Taro.setStorageSync('Authorization', '');
        pageToLogin();
        // TODO 根据自身业务修改
        return Promise.reject({desc: '没有权限访问'});
      } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
        //401
        Taro.setStorageSync('Authorization', '');
        pageToLogin();
        return Promise.reject({desc: '需要鉴权'});
      } else if (res.statusCode === HTTP_STATUS.SERVER_ERROR) {
        //503
        return Promise.reject({desc: '服务器错误'});
      } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        // return res.data;

        if (res.data.code === 0) {
          return res.data;
        } else if (res.data.code == '10001') {
          //非法登录
          pageToLogin();
          return Promise.reject({desc: '登录超时'});
        } else {
          // return Promise.reject(res.data);
        }
      }
    })
    .catch(error => {
      Taro.hideLoading();
      console.error(error);
      return Promise.reject(error);
    });
};

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
// const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]
const interceptors = [customInterceptor];

export default interceptors;
