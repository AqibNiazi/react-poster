import React from "react";
import styles from "./Model.module.css";
const Model = ({ children, onClose }) => {
  return (
    <>
      <div className={styles?.backdrop} onClick={onClose} />
      <dialog open className={styles?.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Model;
