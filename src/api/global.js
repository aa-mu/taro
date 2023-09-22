import request from '@/network/request';

// const attractInvestmentApi = {
//   baidu: 'https://api-bjcag.lao-ceshi.com',
// };

export function getPubData(data) {
  return request({
    url: 'getPubData',
    method: 'get',
    data: data,
  });
}
