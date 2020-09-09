import axios from '@/utils/axios';

export async function getDt(params) {
  return axios({
    url: 'api/model/getDt',
    method: 'post',
    params,
    errorTitle: '获取数据',
  });
}