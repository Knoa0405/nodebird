import React from 'react';

import Head from 'next/head';
import AppLayout from '../components/Applayout';

const SignUp = () => {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <AppLayout>
        <div>회원 가입 페이지</div>
      </AppLayout>
    </>
  )
}

export default SignUp;