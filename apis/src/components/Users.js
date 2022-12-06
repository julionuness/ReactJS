import React, { useEffect, useState } from "react";
import axios from "axios";
import Address from "./Address";
import Company from "./Company";

/*
-> A REFERÊNCIA UTILIZADA FOI O https://dev.to/femi_dev/how-to-use-axios-with-react-5fom
-> OUTRO LINK INTERESSANTE CORRELATO: https://blog.logrocket.com/understanding-axios-get-requests/
-> PRA FAZER UM COMPONENTE ESPECÍFICO E SÓ USAR O ENDPOINT: https://www.devmedia.com.br/consumindo-uma-api-com-react-js-e-axios/42900
*/

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

function Blog(props) {
    const sidebar = (
    <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
    </ul>
    );

    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
      <div>
        {sidebar}      <hr />
        {content}    </div>
    );
}

function Users() {
  const [post, setPost] = useState([]);

/* TAMBÉM FUNCIONA COM A URL ABAIXO:
https://jsonplaceholder.typicode.com/users 
*/

  useEffect(() => {
    axios.get("https://run.mocky.io/v3/5c22cd0d-a33d-4401-b752-fa2d0455daf0").then((data) => {
      setPost(data?.data);
    });
  }, []);

  return (
    <div>
        <h1>CONSUMING JSON DATA</h1>
        <Blog posts={posts} />
        <br/>
        <br/>
        
        <Address dados={post}/>
        <Company dados={post}/>

    </div>
  );
}

export default Users;
