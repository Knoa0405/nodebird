import React, { useCallback } from 'react';

import { Button, Card } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import { useDispatch, useSelector } from 'react-redux';
import { logOutRequestAction } from '../reducers/user';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logOutRequestAction());
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
        avatar={<Avatar>{[me.nickname[0]]}</Avatar>}
        title="NOAH"
      />
      <Button onClick={onLogOut} loading={isLoggingOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;