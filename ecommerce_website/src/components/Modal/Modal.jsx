/* eslint-disable react/prop-types */
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}
      {ReactDom.createPortal(
        <OverLay>{props.children}</OverLay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
