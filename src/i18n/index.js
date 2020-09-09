export const lang = {
  // url参数语言标识
  queryLang: 'lang',

  // 请求header的语言标识
  headerLang: 'X-SCF-Lang',
  // 在cookie中的语言标识
  cookieLang: 'X-SCF-Lang',

  //是否使用远程加载国际化语言
  isRemote: false,

  //支持语言列表
  supportLocales: [
    {
      name: 'English',
      value: 'en-us'
    },

    {
      name: '简体中文',
      value: 'zh-cn'
    }
  ]
};
