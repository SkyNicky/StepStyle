import { useState } from "react";
import Product from "../components/Product";
import { initMongoose } from "../lib/mongoose";
import { findAllProducts } from "./api/products";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Link from "next/link"; // Importando o Link do Next.js
import Image from "next/image"

export default function Home({ products }) {
  const [phrase, setPhrase] = useState('');

  const filteredProducts = phrase
    ? products.filter(p => p.name.toLowerCase().includes(phrase.toLowerCase()))
    : products;

  const categoriesNames = [...new Set(filteredProducts.map(p => p.category))];

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    touchThreshold: 15,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
        }
      }
    ],
  };

  return (
    <Layout>
      <div className="flex items-center mb-4">
        <input 
          value={phrase} 
          onChange={e => setPhrase(e.target.value)} 
          type="text" 
          placeholder="Pesquise os produtos..." 
          className="bg-gray-200 w-full py-2 px-4 rounded-xl"
        />
      </div>

      <div className="relative mb-8 flex items-center justify-center">
        <Image 
          src="/Step Style.png" 
          alt="Banner" 
          className="w-1rem max-w-1rem h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {filteredProducts.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{categoryName}</h2>
                <Slider {...settings}>
                  {filteredProducts.filter(p => p.category === categoryName).map(productInfo => (
                    <div key={productInfo._id} className="px-5">
                      <Product {...productInfo} />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Esta div agora está fora do loop de categorias */}
      <div className="mt-10 p-4 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
  <div className="flex justify-around flex-wrap text-center">
    <Link href="/privacy-policy">
      <a className="hover:text-emerald-500">Política de Privacidade</a>
    </Link>
    <Link href="/regulations">
      <a className="hover:text-emerald-500">Regulamentos</a>
    </Link>
    <Link href="/faq">
      <a className="hover:text-emerald-500">Dúvidas Frequentes</a>
    </Link>
    <Link href="/terms-conditions">
      <a className="hover:text-emerald-500">Termos e Condições</a>
    </Link>
  </div>
  <div className="mt-6 text-sm text-center">
    Os preços, promoções, condições de pagamento, frete e produtos são válidos exclusivamente para compras realizadas via internet.
    Fotos meramente ilustrativas. Copyright © 2003-2024 - step-style.com Todos os direitos reservados. 
    Este site é meramente educacional, criado para fins educativos e demonstração de práticas de programação. 
    SBF COMERCIO DE PRODUTOS ESPORTIVOS S.A. CNPJ: 00.000.000/0000-00.
    Endereço: Cidade de Cataguases - MG, CEP 00000 - 000.
  </div>
</div>

    </Layout>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
