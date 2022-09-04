import React from 'react';
import 'antd/dist/antd.css';
import Head from 'next/head';
import propTypes from 'prop-types';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};

//js에서 props사용시 타입체크를 하여 안정성을 높입니다.

export default NodeBird;
