import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import onClickOutside from "react-onclickoutside";

import style from "./style.scss";

function Modal({ children, toggle }) {
  Modal.handleClickOutside = toggle;

  const modalRoot = document.getElementById("modal-root");
  const div = document.createElement("div");

  div.className = style["modal-window"];

  useEffect(() => {
    modalRoot.appendChild(div);
    return () => modalRoot.removeChild(div);
  }, []);

  return ReactDOM.createPortal(children, div);
}

const clickOutsideConfig = {
  handleClickOutside: () => Modal.handleClickOutside
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  toggle: PropTypes.func.isRequired
};

export default onClickOutside(Modal, clickOutsideConfig);
