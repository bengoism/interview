import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ padding: "20px" }}>
      <Component {...pageProps} />
    </div>
  );
}
