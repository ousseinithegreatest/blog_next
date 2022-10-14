import Link from 'next/link';
import React from 'react';

export default function users(props) {
  console.log(props);
  return (
    <div className="container px-4 py-5">
      <h1 className='text-center'>Liste des utilisateurs</h1>
      <div className="row justify-content-center mt-5">
        {
          props.users.map(user => (
            <div key={user.id} className='col-12 col-lg-6 m-3'>
              <div className='card'>
                <div className='card-body d-flex justify-content-between'>
                  <h4 className='card-title'>
                    {user.username}
                  </h4>
                  <Link href={`/users/${user.id}`}>
                    <a className='ml-auto card-link'>Contacter</a>
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();

  return {
    props: {
      users,
    },
  };
}
