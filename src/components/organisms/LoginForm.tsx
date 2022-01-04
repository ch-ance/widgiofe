/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import httpPost from "../../data/httpPost";
import LabeledInput from "../atoms/LabeledInput";

const LoginForm = () => {
  const [formState, setFormState] = useState({
    alias: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      alias: formState.alias,
      password: formState.password,
    };
    try {
      const data = await httpPost("auth/login", body);
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
      } else {
        throw new Error("Server did not return an access_token");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setFormState({ alias: "", password: "" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabeledInput
        name="alias"
        value={formState.alias}
        onChange={handleChange}
      />
      <LabeledInput
        name="password"
        value={formState.password}
        onChange={handleChange}
      />

      <button type="submit" title="Submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
