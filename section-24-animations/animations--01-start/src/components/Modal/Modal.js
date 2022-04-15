import React from "react";
import Transition from "react-transition-group/Transition";

import "./Modal.css";

const modal = (props) => {
  const cssClasses = ["Modal", props.show === 'entering' ? "ModalOpen" : 
  props.show === 'exiting' ? "ModalClosed" : null];
  return (
    <Transition
    in={this.state.modalIsOpen}
    timeout={300}
    mountOnEnter
    unmountOnExit
  >
    <div className={cssClasses.join(" ")}>
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
    </Transition>

  );
};

export default modal;
