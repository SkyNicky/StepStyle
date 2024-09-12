import Layout from "../components/Layout";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [order, setOrder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Alerta para formulário enviado
    alert('Formulário Enviado!');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto p-5">
        <h1 className="text-2xl font-bold mb-4">Nos contate</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold">Nome</label>
            <input 
              id="name" 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="bg-gray-100 dark:bg-gray-700 font-bold w-full rounded-lg px-4 py-2 mt-1" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold">Email</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="bg-gray-100 dark:bg-gray-700 w-full rounded-lg px-4 py-2 mt-1" 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="order" className="block font-bold">Mais detalhes:</label>
            <textarea 
              id="order" 
              value={order} 
              onChange={(e) => setOrder(e.target.value)} 
              className="bg-gray-100 dark:bg-gray-700 w-full rounded-lg px-4 py-2 mt-1" 
            />
          </div>
          <button type="submit" className="bg-emerald-500 dark:bg-emerald-600 px-5 py-2 rounded-xl font-bold text-white">
            Enviar
          </button>
        </form>
      </div>
    </Layout>
  );
}
