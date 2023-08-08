import { persistor, wrapper } from "@/store";
import "@/styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }) {
  return (
    <PersistGate
      loading={<div>reconciling with local state</div>}
      persistor={persistor}
    >
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(App);
