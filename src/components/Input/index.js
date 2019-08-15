import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import style from "./style.scss";

function Input({ placeholder, className }) {
  const [value, onChange] = useState("");
  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <input
      className={cn(style.input, className)}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  placeholder: "Введите текст",
  className: ""
};

export default Input;
