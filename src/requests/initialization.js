//国际化语言
export async function loadLangMessage(store, langKey) {
  await store.common.getLangMessage();
}

//初始化用户信息及用户菜单
export async function fetchUserInfo(store) {
  await store.common.getCurrentUserInfo();
  // await store.common.getSysMenus();
}
