import React, { Component } from 'react';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
// import { Button } from 'antd';
import intl from 'react-intl-universal';

const Containter = styled.div`
  /* height: 596px; */
`;
@inject('store')
@observer
class ErrorPage extends Component {
  errorCode = 0;

  @action action = () => {
    const {
      store: { router },
    } = this.props;

    //401 to login
    if (this.errorCode == 401) {
      const returnUrl = `${window.location.protocol}//${window.location.host}`;
      window.location.href = __LoginHost + returnUrl;
    } else {
      //others to home
      router.push('/');
    }
  };

  render() {
    const {
      store: { router },
    } = this.props;

    const error = [
      {
        status: 401,
        message: intl.get('error401'),
        actionName: intl.get('toLogin'),
      },

      {
        status: 403,
        message: intl.get('error403'),
        actionName: intl.get('returnHome'),
      },

      {
        status: 404,
        message: intl.get('error404'),
        actionName: intl.get('returnHome'),
      },

      {
        status: 500,
        message: intl.get('error500'),
        actionName: intl.get('returnHome'),
      },
    ];

    this.errorCode = Number(router.query.code) || 500;
    //如果不在枚举范围内统一使用500异常
    const currentError = error.find(v => v.status === this.errorCode) || error[3];
    return (
      <Containter>
        <h1>{currentError.status}</h1>
        <h2>{currentError.message}</h2>
        {/* <Button type="primary" onClick={this.action}>
          {currentError.actionName}
        </Button> */}
      </Containter>
    );
  }
}

export default ErrorPage;
