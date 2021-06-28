import { h } from "preact";
import Styles from "./styles.module.scss";

function Avatar({ src }, { alt }) {
  return <img src={src} alt={alt} class={Styles.profile_image} />;
}

export default Avatar;
