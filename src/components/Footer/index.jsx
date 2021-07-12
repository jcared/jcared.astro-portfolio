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
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap"
        rel="stylesheet"
      ></link>
    </footer>
  );
}
export default Footer;
