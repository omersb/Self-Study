import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data));
  }, []);
  console.log(users);
  return <div>UseMemoCallBack</div>;
};

export default UseMemoCallBack;
