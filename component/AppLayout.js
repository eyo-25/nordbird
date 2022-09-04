import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const SearchInput = styled(Input.Search)`
  vertical-align: center;
`;

// 컴퍼넌트나 태그에 스타일을 인라인형식으로 작성하면 vertual돔이 바뀐걸로 파악해서 리랜더링하기때문에
// styled-component로 빼서 Input.Search 컴퍼넌트를 스타일 해주어 최적화

// 아니면 const style = useMemo(()=>({ marginTop:10 }),[])해서 스타일 할당
// 이때 useMemo()는 값을 캐싱해서 변하지않음 <-> useCallBack()은 함수를 캐싱

const AppLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row>
        <Col xs={24} md={6}>
          {isLogin ? (
            <UserProfile setIsLogin={setIsLogin} />
          ) : (
            <LoginForm setIsLogin={setIsLogin} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://eyo-25.github.io/eyoflix"
            target="_blank"
            rel="nore noreferrer"
          >
            Made by eyo25
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
