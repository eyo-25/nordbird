import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogOut = styled(Button)`
  margin-top: 10px;
`;

const UserProfile = ({ setIsLogin }) => {
  const onLogOut = useCallback(() => {
    setIsLogin(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="eyo25"></Card.Meta>
      <LogOut onClick={onLogOut}>로그아웃</LogOut>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLogin: PropTypes.bool.isRequired,
};

export default UserProfile;
