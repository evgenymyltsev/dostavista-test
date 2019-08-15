import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import style from "./style.scss";

function Button({ mod, title, onClick }) {
  return (
    <button onClick={onClick} className={cn(style.btn, style[`btn-${mod}`])}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  mod: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
