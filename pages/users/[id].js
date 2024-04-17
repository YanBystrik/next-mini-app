import { useRouter } from 'next/router';
import s from '../../styles/User.module.scss';
import MainContainer from '../../сomponents/MainContainer';

const User = ({ user }) => {
  const { query } = useRouter();

  return (
    <MainContainer>
      <div className={s.user}>
        <h1>Пользователь c id {query.id}</h1>
        <div>Имя пользователя  {user.name}</div>
      </div>
    </MainContainer>
  );
};

export default User;

export async function getServerSideProps({ params }) {
  console.log(params);
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: { user },
  };
}
