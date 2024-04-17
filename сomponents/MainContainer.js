import Head from 'next/head';
import { A } from './A';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={'nextjs' + keywords}></meta>
        <title>Главная</title>
      </Head>
      <div className="navbar">
        <A text={'Главная'} href={'/'} />
        <A text={'Пользователи'} href={'/users'} />
      </div>
      <div>{children}</div>

      <style jsx>
        {`
          .navbar {
            display: flex;
            background: grey;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;
