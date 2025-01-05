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
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://dornagol.app.n8n.cloud/webhook/794bbc9b-0a9d-4633-bc35-8d82bec7258b', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          onClose();
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-4 z-50 ${isOpen ? 'bg-fade-in' : 'bg-fade-out'}`}>
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="text-white text-4xl font-bold text-center animate-fade-in-out">
            Commande envoyée avec succès ! 👍
          </div>
        </div>
      )}

    <div className={`bg-white rounded-lg p-6 max-w-md w-full relative ${isSubmitted ? 'opacity-50' : ''}`}>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
      >
        ✖️
      </button>
    <h2 className="text-2xl font-bold text-black mb-4">Passer Votre Commande</h2>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              className="mt-1 pl-2.5 pr-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image</label>
            <input
              type="file"
              name="image"
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
              name="quantite"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Type de Surface</label>
            <input
              type="text"
              name="typeSurface"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ex: Mur, Sol, Plafond..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Taille de la Surface (m²)</label>
            <input
              type="text"
              name="tailleSurface"
              value={surfaceSize}
              onChange={(e) => setSurfaceSize(e.target.value)}
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Ex: 20m²"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Détails du Projet</label>
            <textarea
              name="details"
              className="mt-1 pl-2.5 pr-1 block w-full text-black rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              rows={4}
              placeholder="Décrivez votre projet..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
          >
            Envoyer la Commande
          </button>
        </form>
      </div>

      <style>
    {`
      @keyframes fade-in {
        from {
          background-color: rgba(0, 0, 0, 0);
        }
        to {
          background-color: rgba(0, 0, 0, 0.5);
        }
      }

      @keyframes fade-out {
        from {
          background-color: rgba(0, 0, 0, 0.5);
        }
        to {
          background-color: rgba(0, 0, 0, 0);
        }
      }

      .bg-fade-in {
        animation: fade-in 0.5s forwards;
      }

      .bg-fade-out {
        animation: fade-out 0.5s forwards;
      }

      @keyframes fade-in-out {
        0% { opacity: 0; transform: translateY(-20px); }
        50% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-20px); }
      }

      .animate-fade-in-out {
        animation: fade-in-out 3s ease-in-out forwards;
      }
    `}
  </style>
    </div>
  );
};

export default OrderModal;
