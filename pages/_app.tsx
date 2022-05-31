import type { AppProps } from "next/app";
import { StoreProvider } from "../context/store";
import GlobalStyles from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default MyApp;
