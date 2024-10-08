import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductsContextProvider } from "../components/ProductsContext";
import { DarkModeProvider } from '../components/DarkModeContext';
import ChatraWidget from '../components/ChatraWidget';
import Head from 'next/head';

// Componente principal que envolve todas as páginas
function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider> {/* Provedor para o modo escuro */}
      <ProductsContextProvider> {/* Provedor para o contexto dos produtos */}
        <ChatraWidget /> {/* Widget de chat */}
        <Head>
          <title>StepStyle</title> {/* Título da página */}
          <link rel="icon" href="/Step Style.png" /> {/* Favicon */}
        </Head>
        <Component {...pageProps} /> {/* Componente da página específica */}
      </ProductsContextProvider>
    </DarkModeProvider>
  );
}

export default MyApp;
