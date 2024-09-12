import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import { useRouter } from "next/router";

export default function Product({_id, name, price, description, picture}) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const router = useRouter();

  function addProduct(e) {
    e.stopPropagation(); // Impede o redirecionamento ao clicar no botão
    setSelectedProducts(prev => [...prev, _id]);
  }

  function goToProductPage() {
    router.push(`/product/${_id}`);
  }

  // Função para truncar o texto
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <div className="w-52 cursor-pointer">
      {/* Apenas a imagem e o nome redirecionam para a página do produto */}
      <div className="bg-blue-100 p-5 rounded-xl" onClick={goToProductPage}>
        <img src={picture} alt={name} />
      </div>
      <div className="mt-2" onClick={goToProductPage}>
        <h3 className="font-bold text-lg">
          {truncateText(name, 16)} {/* Truncando o nome do produto */}
        </h3>
      </div>
      <div className="flex mt-1">
        <div className="text-2xl font-bold grow">R${price}</div>
        <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">
          +
        </button>
      </div>
    </div>
  );
}
