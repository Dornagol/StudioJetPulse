import React from 'react';

interface HeaderProps {
  onOrderClick: () => void;
}

export default function Header({ onOrderClick }: HeaderProps) {
  return (
    <header className="container mx-auto px-4 py-8">
      <nav className="flex items-center justify-between">
      <div className="hover:scale-105 transition-transform duration-300">
        <span className="text-2xl tracking-wider">
        <span className="font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent border-b-2 border-gray-500">StudioJet</span>
        <span className="font-bold bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text text-transparent ml-1">Pulse</span>
        <span className="font-bold text-gray-500 animate-pulse ml-1">.</span>
        </span> 
      </div>
        <button
          onClick={onOrderClick}
          className="relative top-1.5 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-gray-500 group-hover:border-black group-hover:from-white group-hover:to-gray-500 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-black dark:focus:ring-black max-w-full sm:text-sm md:text-base">
          <span className="relative px-3 py-1.5 whitespace-nowrap transition-all ease-in duration-75 bg-black dark:bg-black rounded-md font-bold group-hover:bg-opacity-0">
            Commander Maintenant
          </span>
        </button>
      </nav>
    </header>
  );
}