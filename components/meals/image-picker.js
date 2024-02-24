"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = (url) => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label> {/* id === image のフォームの入力 */}
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked.</p>}
          {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept=".jpg,.png,.jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick An Image
        </button>
      </div>
    </div>
  );
}
