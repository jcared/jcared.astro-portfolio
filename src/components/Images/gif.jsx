import { h } from "preact";
import Styles from "./styles.module.scss";

function GifEmbed(props) {
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        sizes={props.sizes}
        alt={props.alt}
        class={Styles.}
        width={props.width}
        height={props.height}
      />
    </div>
  );
}

export default GifEmbed;