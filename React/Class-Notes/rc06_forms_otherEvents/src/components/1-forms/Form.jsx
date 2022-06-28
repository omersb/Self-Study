import { useState } from "react";
const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const handleSubmit = () => {
    alert(`username${username}
  email:${email}
  password:${password}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger">{username}</span>
          </label>
          <input
            onChange={handleUsername}
            value={username}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
