import MainContainer from '../сomponents/MainContainer';

const Index = () => {
  return (
    <MainContainer>
      <h1>Main page</h1>

      <style jsx>
        {`
          .navbar {
            display: flex;
            background: grey;
            padding: 15px;
          }
        `}
      </style>
    </MainContainer>
  );
};

export default Index;
