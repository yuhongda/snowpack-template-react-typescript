import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import styled from 'styled-components';

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
    <div>
      <StyledLink className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Hello Snowpack!!
        {localStore.getText}
      </StyledLink>
    </div>
  ));
};

export default inject('store')(observer(Example));
