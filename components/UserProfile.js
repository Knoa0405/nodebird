import React, { useCallback } from 'react';

import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import { useDispatch } from 'react-redux';
import { logOutAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logOutAction());
  },[]);
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br/></div>,
        <div key="followings">짹짹<br/></div>,
        <div key="followings">짹짹<br/></div>
      ]}
    >
      <Card.Meta
        avatar={<Avatar>NOA</Avatar>}
        title="NOAH"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;