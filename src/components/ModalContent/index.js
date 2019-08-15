import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Input from "../Input";
import style from "./style.scss";
import img from "../../images/pin.svg";

function showOk() {
  alert("Все ОК");
}

function ModalContent({ toggle }) {
  return (
    <div className={style["modal-container"]}>
      <h2 className={style["modal-header"]}>Изменить адрес</h2>
      <div className={style["modal-content"]}>
        <p>
          Товары подбираются из магазинов вблизи от указанного адреса. Если вы
          смените адрес &#8212; корзина будет очищена и перейдете к выбору
          магазина доступного по указанному адресу
        </p>
      </div>

      <Input
        className={style["modal-input"]}
        placeholder="Адрес, куда надо доставить"
      />

      <div className={style["modal-footer"]}>
        <Button mod="success" title="Найти другой магазин" onClick={showOk} />
        <Button mod="cancel" title="Отмена" onClick={toggle} />
      </div>
    </div>
  );
}

ModalContent.propTypes = {
  toggle: PropTypes.func.isRequired
};

export default ModalContent;
