import React from 'react';

export default function user(props) {
  console.log(props);
  return (
    <div className="container px-4 py-5">
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-6 m-3">
          <div className="card p-4">
            <h4>{props.user.name}</h4>
            <div className="card-body">
              <span className="text-muted">
                Username: {props.user.username}
              </span>
              <ul class="list-group list-group-flush pt-2">
                <li class="list-group-item">Email: {props.user.email}</li>
                <li class="list-group-item">Site web: {props.user.website}</li>
                <li class="list-group-item">Téléphone:  {props.user.phone}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context.params.user;

  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await data.json();

  const paths = users.map((item) => ({
    params: { user: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}
