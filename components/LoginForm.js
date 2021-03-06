import React, { useCallback } from 'react';

import { Button, Form, Input } from 'antd';

import Link from 'next/link';

import styled from 'styled-components';

import useInput from '../hooks/useInput';

import { useDispatch, useSelector } from 'react-redux';

import { logInRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top : 10px;
`;

const FormWrapper = styled(Form)`
  padding : 10px;
`;

const LogInForm = () => {
  const dispatch = useDispatch();

  const { isLoggingIn } = useSelector((state) => state.user);

  const [email, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(() => {
    console.log(email, password);

    dispatch(logInRequestAction({ email, password }));
  }, [email, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
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
          placeholder="비밀번호"
        />
      </div>
      <ButtonWrapper >
        <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LogInForm;