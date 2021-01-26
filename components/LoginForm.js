import React, { useState, useCallback } from 'react';

import { Button, Form, Input } from 'antd';

import Link from 'next/link';

import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top : 10px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setId(e.target.value);
  }, []);




  return (
    <Form>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          type="email"
          value={email}
          onChange={onChangeId}
          placeholder="이메일"
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input
          name="user-password"
          type="password"
          onChange={onChangePassword}
          value={password}
          placeholder="이메일"
        />
      </div>
      <ButtonWrapper >
        <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </Form>
  )
}

export default LoginForm;