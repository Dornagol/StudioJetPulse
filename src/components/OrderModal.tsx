import React, { useState } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ isOpen, onClose }: OrderModalProps) => {
  const [image, setImage] = useState<File | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [surface, setSurface] = useState('');
  const [surfaceSize, setSurfaceSize] = useState('');

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-black mb-4">Passer Votre Commande</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              className="mt-1 pl-2.5 pr-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-gray-300 file:text-gray-700
                hover:file:bg-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Quantité</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type de Surface</label>
            <input
              type="text"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ex: Mur, Sol, Plafond..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Taille de la Surface (m²)</label>
            <input
              type="text"
              value={surfaceSize}
              onChange={(e) => setSurfaceSize(e.target.value)}
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ex: 20m²"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Détails du Projet</label>
            <textarea
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              placeholder="Décrivez votre projet..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white-500 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Envoyer la Commande
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;