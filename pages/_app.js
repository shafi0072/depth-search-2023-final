import "@/styles/globals.css";
import Layout from "@/src/Components/layout/index";
import AppContext from "@/src/Components/storage/AppContext";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <AppContext>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </AppContext>
  );
}
