import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductsContextProvider } from "../components/ProductsContext";
import { DarkModeProvider } from '../components/DarkModeContext';
import ChatraWidget from '../components/ChatraWidget';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <ProductsContextProvider>
        <ChatraWidget />
        <Head>
          <title>StepStyle</title>
          <link rel="icon" href="/Step Style.png" />
          {/* Outros elementos que você queira adicionar no <head> */}
        </Head>
        <Component {...pageProps} />
      </ProductsContextProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
