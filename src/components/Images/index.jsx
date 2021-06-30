import { h } from "preact";
import Styles from "./styles.module.scss";

function Avatar(props) {
  return <img src={props.src} alt={props.alt} class={Styles.profile_image} />;
}

export default Avatar;
