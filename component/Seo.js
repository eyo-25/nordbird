import Head from 'next/head';
import propTypes from 'prop-types';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | NodeBird</title>
    </Head>
  );
}

Seo.propTypes = {
  title: propTypes.string,
};
