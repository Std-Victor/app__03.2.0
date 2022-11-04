import React, { useState } from "react";
import { FromInput } from "../FormInput/FormInput";
import style from "./form.module.css";

export const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      error:
        "Username shoul be 3-16 characters and shouldn't include any special character!",
      pattern: "^[a-zA-Z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      error: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      label: "Birthday",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      label: "Password",
      error:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character! ",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
      autoComplete: "off",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      error: "Passwords don't match!",
      pattern: values.password.replaceAll("$", "\\$").replaceAll("^", "\\^"),
      required: true,
      autoComplete: "off",
    },
  ];

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <div className={style.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        {inputs.map((input) => (
          <FromInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};
