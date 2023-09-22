import Taro from '@tarojs/taro';
import getBaseUrl from './baseUrl';
import interceptors from './interceptors';

//添加拦截器
interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

const request = function axios(params) {
  let {url, data, method, headers} = params;
  const BASE_URL = getBaseUrl();
  // let contentType = "application/x-www-form-urlencoded";
  let contentType = 'application/json;charset=UTF-8';
  contentType = headers?.contentType || contentType;

  const option = {
    url: BASE_URL + url, //地址
    data: data, //传参
    method: method, //请求方式
    timeout: 15000, // 超时时间
    header: {
      //请求头
      'content-type': contentType,
      Authorization: Taro.getStorageSync('Authorization'),
    },
  };
  return Taro.request(option);
};

export default request;
