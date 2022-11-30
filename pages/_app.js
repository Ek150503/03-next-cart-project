import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Provider } from "../components/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
