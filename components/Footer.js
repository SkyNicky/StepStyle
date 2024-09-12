import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import { DarkModeContext } from "../components/DarkModeContext"; // Importa o contexto do Dark Mode

export default function Footer() {
  const router = useRouter();
  const path = router.pathname;
  const { selectedProducts } = useContext(ProductsContext);
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext); // Usa o contexto do Dark Mode

  return (
    <footer className={`sticky bottom-0 p-5 w-full flex flex-col border-t 
      ${darkMode ? 'bg-gray-800 border-gray-600 text-gray-300' : 'bg-white border-gray-200 text-gray-400'}`}>
      <div className="flex justify-center space-x-12">
        <Link href={'/'}>
          <a className={`${path === '/' ? 'text-emerald-500' : ''} flex justify-center items-center flex-col`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <span>Home</span>
          </a>
        </Link>
        <Link href={'/checkout'}>
          <a className={`${path === '/checkout' ? 'text-emerald-500' : ''} flex justify-center items-center flex-col`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <span>Carrinho {selectedProducts.length}</span>
          </a>
        </Link>
        <div onClick={toggleDarkMode} className="cursor-pointer flex justify-center items-center flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>          <span>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
        </div>
      </div>
      <div className="text-center mt-4">
        <Link href="/contact">
          <a className="text-emerald-500 dark:text-emerald-300">StepStyles SAC</a>
        </Link>
      </div>
    </footer>
  );
}
