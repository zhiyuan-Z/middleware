// import { StoreProvider } from "@/store";
import { wrapper } from "@/store";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    // <StoreProvider>
    <Component {...pageProps} />
    // </StoreProvider>
  );
}

export default wrapper.withRedux(App);
