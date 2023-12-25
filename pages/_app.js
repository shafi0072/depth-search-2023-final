import "@/styles/globals.css";
import Layout from "@/src/Components/layout/index";
import AppContext from "@/src/Components/storage/AppContext";
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6589780d70c9f2407f8333fc/1higfptja';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>

    </Head>
  <AppContext>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </AppContext>
    </>
    
  );
}
