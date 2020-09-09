import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import styled from 'styled-components';
import { Button } from 'antd';
import './example.css';
import logo from './logo.svg';

const StyledLink = styled.a`
  color: #01439c;
`;

const Example: React.FC<IProps> = (props) => {
  const {
    store: { example },
  } = props;

  const localStore = useLocalStore(
    (source) => ({
      get getText() {
        return source.store.example.text;
      },
    }),
    props
  );

  return useObserver(() => (
    <div className="example">
      <div className="example-inner">
        <img src={logo} className="example-logo" alt="logo" />
        <StyledLink className="example-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Hello Snowpack!!
          {localStore.getText}
        </StyledLink>
        <Button>Test</Button>
      </div>
    </div>
  ));
};

export default inject('store')(observer(Example));
