import Link from 'next/link';
import React from 'react';
import MainContainer from '../сomponents/MainContainer';

const Users = ({ users }) => {
  return (
    <MainContainer>
      <h1>Users list</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return {
    props: { users },
  };
}
