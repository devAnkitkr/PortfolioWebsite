import "../styles/globals.css";
import "../styles/swiper.css";
import "../styles/index.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
