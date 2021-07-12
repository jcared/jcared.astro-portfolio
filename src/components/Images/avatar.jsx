import { h } from "preact";
import Styles from "./avatar.styles.module.scss";

function Avatar(props) {
  return (
    <img
      src={props.src}
      srcset={props.srcset}
      sizes={props.sizes}
      alt={props.alt}
      class={Styles.profile_image}
      width={props.width}
      height={props.height}
    />
  );
}

export default Avatar;
