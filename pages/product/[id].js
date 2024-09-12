import { useRouter } from "next/router";
import { initMongoose } from "../../lib/mongoose";
import Product from "../../models/Product";
import Layout from "../../components/Layout";

export default function ProductPage({ product }) {
  const router = useRouter();

  if (!product) return <p>Product not found</p>;

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <img src={product.picture} alt={product.name} className="w-64 h-64 object-contain" />
        <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
        <p className="text-gray-600 text-center mt-2">{product.description}</p>
        <div className="text-2xl font-bold mt-4">${product.price}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  await initMongoose();
  const product = await Product.findById(id).lean();

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
