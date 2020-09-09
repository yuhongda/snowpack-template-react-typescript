import axios from 'axios';
import router from '@/stores/router.store';
import * as localForage from 'localforage';
export const axiosInstance = axios.create({
  baseURL: `/`,
});

axiosInstance.defaults.timeout = 30000;
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axiosInstance.defaults.headers.common['refererClone'] = window.location.href;

// http request 拦截器
axios.interceptors.request.use(
  (req) => {
    Object.assign(req.headers.common, {
      XMLHttpRequest: 'X-Requested-With',
      refererClone: window.location.href,
    });
    return req;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (res.status !== 200) {
      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '-1') {
      return Promise.reject(res);
    } else if (!res.data.success && res.data.code === '401') {
      // if (window.location.host.includes('erp') || /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(window.location.host)) {
      window.location.href = `${__LoginHost}${encodeURIComponent(window.location.href)}`;
      // } else {
      //   window.location.href = `${__LoginHostPassport}${encodeURIComponent(window.location.href)}`;
      // }
    } else if (!res.data.success && res.data.code === '9') {
      router.push('/ErrorPage?code=403');
    }
    return res;
  },
  (error) => {
    if (error.code == 'ECONNABORTED' && error.message.includes('15000ms')) {
      return Promise.reject(error);
    }

    if (n`error.response.status == 408`) {
      return Promise.reject(error);
    }

    if (n`error.response.status > 400`) {
      router.push('/ErrorPage?code=' + error.response.status);
    } else {
      router.push('/ErrorPage?code=500');
    }
    return Promise.reject(error);
  }
);

export default function (config) {
  if (config.errorTitle) {
    if (!config.transformResponse) {
      config.transformResponse = [];
    }
    Array.isArray(config.transformResponse) &&
      config.transformResponse.push((data) => ({
        ...JSON.parse(data),
        errorTitle: config.errorTitle,
      }));
  }

  return axiosInstance(config).catch(function (res) {
    return res;
  });
}
