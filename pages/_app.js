import '../styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ProductsContextProvider} from "../components/ProductsContext";
import { DarkModeProvider } from '../components/DarkModeContext';
import ChatraWidget from '../components/ChatraWidget';


function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
    <ProductsContextProvider>
    <ChatraWidget />
      <Component {...pageProps} />
    </ProductsContextProvider>
    </DarkModeProvider>
  );
}

export default MyApp
