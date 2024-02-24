'use client';

import { useRef } from "react";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {

  const imageInput = useRef();

  function handlePickClick(){
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label> {/* id === image のフォームの入力 */}
      <div className={classes.control}>
        <input className={classes.input} type="file" id={name} accept=".jpg,.png,.jpeg" name={name} ref={imageInput}/>
        <button className={classes.button} type="button" onClick={handlePickClick}>Pick An Image</button>
      </div>
    </div>
  );
}
