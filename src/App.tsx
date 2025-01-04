import { useState } from 'react';
import Header from './components/Header';
import ServiceCard from './components/ServiceCard';
import OrderModal from './components/OrderModal';
import { services } from './data/services';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onOrderClick={() => setIsModalOpen(true)} />

      <main className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white to-gray-600 bg-clip-text text-transparent drop-shadow-sm hover:scale-105 transition-transform duration-300 select-none">
        Impression Laser Premium
        </h1>
          <p className="text-lg text-gray-400 mb-16 leading-relaxed">
          Gravure sur mesure pour des objets qui marquent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </main>
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;