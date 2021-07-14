import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Jaden Curley
      <small className={Styles.byline}>🚀 Built by Astro</small>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={"{ 'token': 'e5f22e8dab6640c4bc43359e6e17c575' }"}
      ></script>
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js?token=8394d8c0148c4c1b9817053c13520829"
      ></script>
    </footer>
  );
}
export default Footer;
