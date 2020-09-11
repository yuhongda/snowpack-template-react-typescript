import React, { useState, useEffect, useRef } from 'react';
import { observer, inject } from 'mobx-react';
import { useLocalStore, useObserver } from 'mobx-react-lite';
import styled from 'styled-components';
import { Button } from 'antd';
import './example.css';
import styles from './test.module.scss';
import stylesLess from './testLess.module.less';
import logo from '../logo.svg';
import ReactEcharts from 'echarts-for-react';
import { useDrag, useDrop } from 'react-dnd';

const StyledLink = styled.a`
  color: #01439c;
`;

const ChartContainer = styled.div`
  width: 600px;
  height: 400px;
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

  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'test' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(ref);

  return useObserver(() => (
    <div className="example">
      <div className="example-inner">
        <img src={logo} className="example-logo" alt="logo" />
        <StyledLink className="example-link" href="https://www.snowpack.dev" target="_blank" rel="noopener noreferrer">
          Hello Snowpack!!!
        </StyledLink>
        <div className={stylesLess.blue}>{localStore.getText}</div>
        <div className={styles.red}>{example.text}</div>
        <p>
          <Button type="primary">antd test</Button>
        </p>
        <p>
          <Button type="primary" ref={ref}>
            drag me
          </Button>
        </p>
        <ChartContainer>
          <ReactEcharts
            option={{
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              },
              yAxis: {
                type: 'value',
              },
              series: [
                {
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line',
                },
              ],
              textStyle: {
                color: '#fff',
              },
            }}
            notMerge={true}
            opts={{ renderer: 'svg' }}
            style={{ height: '100%', width: '100%' }}
          />
        </ChartContainer>
      </div>
    </div>
  ));
};

export default inject('store')(observer(Example));
