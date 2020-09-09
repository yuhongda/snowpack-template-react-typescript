import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '@/router';

const StyledLink = styled.a`
  color: #01439c;
`;

interface IAppProps extends IProps {
  history?: any;
}

function App({ store, history }: IAppProps) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
