import React, { useContext } from 'react';
import { useObserver } from 'mobx-react-lite';
// import { AuthMenuMap, AuthFunctionMap, useAuth } from '../web/misc/userRoleMap'

export let storeContext = null;

export const setStore = newStore => {
  storeContext = newStore;
};

const inject = baseComponent => {
  const component = ownProps => {
    if (storeContext === null){
      throw new Error('Please, use setStore before your ReactDOM.render call');
    }
    const store = useContext(storeContext);
    // const { common } = store;
    // const { checkAuthMenu, checkAuthFunc, checkAuthUrl } = useAuth(ownProps, store);

    // if(ownProps.history){
    //   const { history, location: { pathname } } = ownProps;

    //   if(!common.userInfo){
    //     common.getUserInfo().then(() => {
    //       if(!checkAuthUrl()){
    //         // history.replace(`/NoPermission`)
    //       }
    //     });
    //   }else{
    //       if(!checkAuthUrl()){
    //         // history.replace(`/NoPermission`)
    //       }
    //   }
    // }
    

    return useObserver(() =>
      baseComponent({ ...ownProps, store }) //, checkAuthMenu, checkAuthFunc
    );
  };
  component.displayName = baseComponent.name;
  return component;
};


export function withHooks(Comp) {
  return inject(props => {
      return <Comp {...props} />;
  })
}

export default inject;
