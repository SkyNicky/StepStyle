import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [success, setSuccess] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.location.href.includes('success')) {
      setSelectedProducts([]);
      setSuccess(true);
    }
    // Check local storage for dark mode setting
    if (localStorage.getItem('darkMode') === 'true') {
      setDarkMode(true);
      document.body.classList.add('dark');
    }
  }, [setSelectedProducts]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    
    <div>
      <div className="p-5">
        {success && (
          <div className="mb-5 bg-green-400 text-white text-lg p-5 rounded-xl">
            Thanks for your order!
          </div>
        )}
        {children}
      </div>
      <Footer toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
