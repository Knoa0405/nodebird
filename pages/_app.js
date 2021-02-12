import React from 'react';

import propTypes from 'prop-types';

import Head from 'next/head';
import 'antd/dist/antd.css';

import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const MyApp = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>MyApp</title>
      </Head>
      <Component />
    </>
  );
};

MyApp.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(MyApp));