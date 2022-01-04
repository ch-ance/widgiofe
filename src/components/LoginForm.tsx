import { useState } from "react";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    alias: "",
    password: "",
  });

  const handleSubmit = (e: any) => {};
  return (
    <form onSubmit={handleSubmit}>
      <label id="alias-label" title="alias" aria-label="alias">
        Alias
      </label>
      <input aria-labelledby="alias-label" />
      <label id="password-label" title="password" aria-label="password">
        Password
      </label>
      <input aria-labelledby="password-label" />
      <button title="Submit">Login</button>
    </form>
  );
};

export default LoginForm;
