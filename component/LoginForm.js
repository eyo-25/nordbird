import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BtnWrapper = styled.div`
  margin-top: 10px;
`;

const LoginWrapper = styled(Form)``;

const LoginForm = ({ setIsLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);
  //컴포넌트에 props로 넘기는 함수는 usecallback을 사용해야 최적화
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLogin(true);
  }, [id, password]);

  return (
    <>
      <LoginWrapper onFinish={onSubmitForm} style={{ padding: '10px' }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" value={id} onChange={onChangeId} required />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <BtnWrapper>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </BtnWrapper>
      </LoginWrapper>
    </>
  );
};

LoginForm.propTypes = {
  setIsLogin: PropTypes.bool.isRequired,
};

export default LoginForm;
