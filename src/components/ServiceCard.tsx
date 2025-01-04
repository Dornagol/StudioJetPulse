import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

export default function ServiceCard({ image, title, description }: ServiceCardProps) {
  return (
    <div className="group hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4 opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <h3 className="text-lg font-light tracking-wide mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}