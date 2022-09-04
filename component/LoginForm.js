import { Button, Form, Input } from 'antd';
import Link from 'next/link';

const LoginForm = () => {
  return (
    <>
      <Form style={{ padding: '10px' }}>
        <div>
          <label htmlFor="user-id">아이디</label>
          <br />
          <Input name="user-id" />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" />
        </div>
        <div style={{ marginTop: '10px' }}>
          <Button type="primary" htmlType="submit" loading={false}>
            로그인
          </Button>
          <Link href="/signup">
            <a>
              <Button>회원가입</Button>
            </a>
          </Link>
        </div>
      </Form>
    </>
  );
};

export default LoginForm;
