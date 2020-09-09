import axios from '@/utils/axios';

export async function getCurrentUserInfo() {
  return axios({
    url: 'api/common/user',
    method: 'post',
    errorTitle: '获取用户信息',
  });
}

export async function userCheck(params) {
  return axios({
    url: 'api/common/userCheck',
    method: 'get',
    params,
    errorTitle: '用户校验',
  });
}

export async function logOut() {
  return axios({
    url: 'common/logout',
    method: 'get',
    errorTitle: '退出登录',
  });
}

export async function loadSysMenus() {
  return axios({
    url: 'common/menus',
    method: 'get',
    errorTitle: '获取系统菜单',
  });
}

export async function loadLangMessage() {
  return axios({
    url: 'common/lang',
    method: 'get',
    errorTitle: '加载国际化信息',
  });
}

export async function getChannels(params) {
  return axios({
    url: 'api/reportPage/getChannels',
    method: 'post',
    params,
    errorTitle: '获取数据',
  });
}
