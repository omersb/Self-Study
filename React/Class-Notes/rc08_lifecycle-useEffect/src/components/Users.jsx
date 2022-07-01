import { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    //?componentDidMount
    getUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <h1>USER LIST</h1>
      {/* <button className="btn btn-success" onClick={getUsers}>
        Get users
      </button> */}
      <div className="row">
        {users.map((user) => {
          const { id, name } = user;
          return (
            <div className="col" key={id}>
              <img src={`https://i.pravatar.cc/300?img=${id}`} alt="" />
              <h6>{name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
