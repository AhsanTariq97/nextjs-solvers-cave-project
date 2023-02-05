import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import '@/styles/globals.css'



// Import FontAwesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
