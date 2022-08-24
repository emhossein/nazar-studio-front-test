import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeContainer from "../containers/ThemeContainer";
import { RecoilRoot } from "recoil";
import Navbar from "../containers/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeContainer>
        <Navbar/>
        <Component {...pageProps} />
      </ThemeContainer>
    </RecoilRoot>
  );
}

export default MyApp;
