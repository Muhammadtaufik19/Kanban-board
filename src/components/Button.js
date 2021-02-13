import React, { useState } from "react";
import "../sass/Button.scss";
import Textarea from "react-textarea-autosize";
import close from "../assests/close.png";

const Button = ({ list }) => {
  console.log("ok" + list);
  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  const showForm = () => {
    const textButton = list ? "Add list" : "Add card";
    const placeholder = list ? "Enter list title" : "Enter card title";
    return (
      <div className="form-box">
        <Textarea className="text-area" autoFocus placeholder={placeholder} />
        <button className="add">{textButton}</button>
        <button className="close">
          <img src={close} alt="close" className="close" onClick={closeForm} />
        </button>
      </div>
    );
  };

  const showButton = () => {
    const textButton = list ? "Add another list" : "Add new card";
    const opacityButton = list ? 1 : 0.5;
    const colorButton = list ? "white" : "inherit";
    const backgroundButton = list ? "rgba(0,0,0,0.25)" : "inherit";
    return (
      <div
        className="add-button"
        onClick={openForm}
        style={{
          opacity: opacityButton,
          color: colorButton,
          background: backgroundButton,
        }}
      >
        + {textButton}
      </div>
    );
  };
  return open ? showForm() : showButton();
};

export default Button;
