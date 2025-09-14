import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
}
