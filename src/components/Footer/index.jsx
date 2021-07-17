import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Jaden Curley
      <small className={Styles.byline}>🚀 Built by Astro</small>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap"
        rel="stylesheet"
        crossorigin
      />
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js?token=8394d8c0148c4c1b9817053c13520829"
        crossorigin
      ></script>
    </footer>
  );
}
export default Footer;
