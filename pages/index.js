import React from 'react';
import AppLayout from '../component/AppLayout';
import Seo from '../component/Seo';

const Home = () => {
  return (
    <>
      <Seo title="Home"></Seo>
      <AppLayout>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
};

export default Home;
