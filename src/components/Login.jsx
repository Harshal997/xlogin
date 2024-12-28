import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isInCorrect, setIsInCorrect] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setIsValid(true);
      setIsInCorrect(false);
    } else {
      setIsValid(false);
      setIsInCorrect(true);
    }
  };

  return (
    <>
      <h1>Login page</h1>
      {isInCorrect && <p>Invalid username or password</p>}
      {isValid ? (
        <p>Welcome, user!</p>
      ) : (
        <form action="submit" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="fname">Username:</label>
          <input
            type="text"
            id="fname"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
