import "@/styles/globals.css";
import Layout from "@/src/Components/layout/index";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
