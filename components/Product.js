// components/Product.js
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { ProductsContext } from "./ProductsContext";

export default function Product({_id, name, price, description, picture}) {
  const router = useRouter();
  const { setSelectedProducts } = useContext(ProductsContext);

  function addProduct() {
    setSelectedProducts(prev => [...prev, _id]);
  }

  function handleProductClick() {
    router.push(`/products/${_id}`);
  }

  return (
    <div onClick={handleProductClick} className="w-52 bg-white p-4 rounded-xl shadow-md flex flex-col cursor-pointer">
      <div className="bg-blue-100 p-5 rounded-xl flex-grow">
        <img src={picture} alt={name} className="w-full h-32 object-cover"/>
      </div>
      <div className="mt-2 flex-grow">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm mt-1 leading-4 text-gray-500">{description}</p>
      </div>
      <div className="flex mt-1 items-center">
        <div className="text-2xl font-bold grow">R${price}</div>
        <button onClick={addProduct} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
      </div>
    </div>
  );
}
