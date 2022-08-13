import React, { Fragment } from "react";
import ReactDom from "react-dom";
import "./Modal.scss";
const ModalOverlay = (props) => {
  return (
    <>
      {
        <div className="modal-overlay">
          {!props.asOverlay ? (
            <>
              <div className="modal-content">
               
                {props.children}
               
              </div>
            </>
          ) : (props.children)}
        </div>
      }
    </>
  );
};
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay {...props}></ModalOverlay>,
        document.getElementById("modal-div")
      )}
    </Fragment>
  );
};

export default Modal;