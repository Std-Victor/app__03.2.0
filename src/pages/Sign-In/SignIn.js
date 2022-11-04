import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FromInput } from "../../components/FormInput/FormInput";
import { addUerAuth, addUserData } from "../../redux/user/user.slice";
import style from "./signIn.module.css";

export default function SignIn() {
  const [signUpValues, setSignUpValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const [signInValues, setSignInValues] = useState({
    email: "",
    password: "",
  });
  const location = useLocation();
  const user = location.pathname.split("/")[1] === "admin" ? "admin" : "client";
  const { msgError, isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isAuth) return navigate("/home");

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
      autoComplete: "off",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      error: "It should be a valid email address!",
      required: true,
      autoComplete: "off",
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
      pattern: signUpValues.password
        .replaceAll("$", "\\$")
        .replaceAll("^", "\\^"),
      required: true,
      autoComplete: "off",
    },
  ];

  const handleSignInChange = (e) =>
    setSignInValues({ ...signInValues, [e.target.name]: e.target.value });

  const handleSignUpChange = (e) =>
    setSignUpValues({ ...signUpValues, [e.target.name]: e.target.value });

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(
      addUerAuth({
        type: user,
        data: signInValues,
      })
    );
    return (navigate("/home"))
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(
      addUserData({
        type: user,
        data: signUpValues,
      })
    );
    return (setSignUpValues(
      Object.keys(signUpValues).reduce(
        (obj, item) => ({ ...obj, [item]: "" }),
        {}
      )
    ), navigate("/home"));
  };

  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1>
          Sign <span>in</span>
        </h1>
        <form onSubmit={handleSignIn}>
          {inputs
            .filter((input) => ["email", "password"].includes(input.name))
            .map((input) => (
              <FromInput
                key={input.id}
                {...input}
                value={signInValues[input.name]}
                onChange={handleSignInChange}
              />
            ))}
          <button>Sign In</button>
          <p>{msgError}</p>
        </form>
      </div>
      <div className={style.item}>
        <h1>
          Sign <span>up</span>
        </h1>
        <form onSubmit={handleSignUp}>
          {inputs.map((input) => (
            <FromInput
              key={input.id}
              {...input}
              value={signUpValues[input.name]}
              onChange={handleSignUpChange}
            />
          ))}
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}
