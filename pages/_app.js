import "@/styles/globals.css";
import Layout from "@/src/Components/layout/index";
import AppContext from "@/src/Components/storage/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </AppContext>
  );
}
