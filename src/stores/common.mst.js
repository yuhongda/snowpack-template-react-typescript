import { types, flow } from 'mobx-state-tree';
import * as api from '@/requests/common';

//用户信息数据结构
export const UserInfo = types.model('UserInfo', {
  pin: types.maybe(types.string),
  name: types.maybe(types.string),
  authFunction: types.optional(types.array(types.string), []),
});

const CommonStore = types
  .model('CommonStore', {
    userInfo: types.maybe(UserInfo),
  })
  .volatile(self => ({
    localeMessage: null,
    layoutMenus: [],

    // 渠道字段label
    channelLabelMap: null,
  }))
  .views(self => ({}))
  .actions(self => ({
    //设置菜单信息
    setLayoutMenus(layoutMenus) {
      self.layoutMenus = layoutMenus;
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.channelLabelMap = [
        {
          code: '1000000',
          name: '全站',
        },
        {
          code: '1001000',
          name: '秒杀',
        },
        {
          code: '1001001',
          name: '秒杀-单品秒杀',
        },
        {
          code: '1001002',
          name: '秒杀-每日特价',
        },
      ];
    },
    //加载用户登录信息
    getCurrentUserInfo: flow(function*() {
      if (self.userInfo) {
        return self.userInfo;
      }
      const res = yield api.getCurrentUserInfo();
      self.userInfo = (res.data && res.data.data) || {};
      return res.data.data;
    }),

    //加载菜单信息
    getSysMenus: flow(function*() {
      const res = yield api.loadSysMenus();
      self.setLayoutMenus(res.data.data);
    }),

    //加载远程国际化信息
    getLangMessage: flow(function*() {
      const res = yield api.loadLangMessage();
      self.localeMessage = res.data.data;
    }),

    //退出登录
    logOut: flow(function*() {
      const res = yield api.logOut();
    }),

    getChannels: flow(function*() {
      const res = yield api.getChannels();
      self.channelLabelMap = (res.data && res.data.data) || [];
    }),
    
  }));

export default CommonStore;
