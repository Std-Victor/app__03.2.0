import React, { useState } from "react";
import style from "./forminput.module.css";

export const FromInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { onChange, label, id, error, ...inputProps } = props;
  return (
    <div className={style.form_input}>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        />
        <label>{label}</label>
      <span>{error}</span>
    </div>
  );
};
