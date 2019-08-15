import React, { useState } from "react";
import Modal from "../Modal";
import Button from "../Button";
import ModalContent from "../ModalContent";

import style from "./style.scss";

function App() {
  const [isModalOpen, toggleModal] = useState(false);

  function toggle() {
    toggleModal(!isModalOpen);
  }

  return (
    <div className={style.app}>
      <Button mod="success" onClick={toggle} title="Нажми меня" />
      {isModalOpen ? (
        <Modal toggle={toggle}>
          <ModalContent toggle={toggle} />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
