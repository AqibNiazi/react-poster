import React from "react";
import styles from "./Model.module.css";
import { useNavigate } from "react-router-dom";
const Model = ({ children }) => {
  const navigate = useNavigate();
  const handleNavigtion = () => {
    navigate("..");
  };
  return (
    <>
      <div className={styles?.backdrop} onClick={handleNavigtion} />
      <dialog open className={styles?.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Model;
