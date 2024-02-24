import classes from "./image-picker.module.css";

export default function ImagePicker({ label, name }) {
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label> {/* id === image のフォームの入力 */}
      <div className={classes.control}>
        <input type="file" id={name} accept=".jpg,.png,.jpeg" name={name} />
      </div>
    </div>
  );
}
