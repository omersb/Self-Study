import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Users from "./components/Users";

const UseMemoCallBack = () => {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  console.log("text", text, "search", search);
  //   const inputRef = useRef();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data));
  }, []);
  //   console.log(users);

  const handleSearch = () => {
    setSearch(text);
    // setSearch(inputRef.current.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="search" onChange={(e) => setText(e.target.value)} />
      <button onClick={{ handleSearch }}>Search User</button>
      <Users users={users} />
    </div>
  );
};

export default UseMemoCallBack;
