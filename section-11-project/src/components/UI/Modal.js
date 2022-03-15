import React, { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

import Cart from "../Cart/Cart";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCancel} />;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCancel={props.onCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
      <Cart className={styles.modal} onCancel={props.onCancel}/>,
       document.getElementById("modal-root"))}
    </Fragment>
  );
};

export default Modal;
