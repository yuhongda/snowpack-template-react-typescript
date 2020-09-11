import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import Routes from '@/router';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend/dist/esm/index.js';

interface IAppProps extends IProps {
  history?: any;
}

function App({ store, history }: IAppProps) {
  return (
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Router history={history}>
          <Routes />
        </Router>
      </DndProvider>
    </Provider>
  );
}

export default App;
