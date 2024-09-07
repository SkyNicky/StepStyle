// pages/products/[id].js
import { useRouter } from 'next/router';
import { initMongoose } from "../../lib/mongoose";
import { findProductById } from "../api/products";
import Layout from "../../components/Layout";

export default function ProductPage({ product }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img src={product.picture} alt={product.name} className="w-full h-64 object-cover rounded-md" />
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="mt-4 text-gray-600">{product.description}</p>
          <div className="mt-4 text-2xl font-bold">R${product.price}</div>
          <button className="mt-6 bg-emerald-400 text-white py-2 px-4 rounded-lg">Comprar</button>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  await initMongoose();
  const product = await findProductById(id);
  
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
