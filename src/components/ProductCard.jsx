import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`col-span-1 rounded-clay ${product.bgColor} p-lg flex flex-col justify-between clay-shadow relative overflow-hidden ${product.isTall ? 'row-span-2 h-[340px]' : 'h-[164px]'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="clay-card-inner absolute inset-0 pointer-events-none"></div>
      <div className="z-10 h-full flex flex-col">
        {product.isNew && (
          <span className="bg-white/30 backdrop-blur-md px-sm py-xs rounded-full text-[10px] font-bold self-start text-dark uppercase tracking-wider">
            New Arrival
          </span>
        )}
        <div className={`mt-xl flex-grow flex items-center justify-center ${product.isTall ? '' : 'mt-0'}`}>
          <img
            className={`w-full h-auto drop-shadow-2xl ${product.isTall ? '' : 'w-16 h-16 object-contain'}`}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="mt-auto">
          <h3 className={`font-headline-md text-headline-md text-text-dark leading-tight ${product.isTall ? '' : 'font-label-pill text-label-pill'}`}>
            {product.name}
          </h3>
          <p className={`font-body-md text-text-dark/80 mt-xs ${product.isTall ? '' : 'text-[12px] font-semibold text-text-dark/70'}`}>
            {product.price} + {product.fee} Fee
          </p>
        </div>
      </div>
      <button
        className={`absolute bottom-md right-md w-11 h-11 bg-white rounded-full flex items-center justify-center clay-button transition-all active:scale-90 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => onAddToCart(product)}
      >
        <span className="material-symbols-outlined text-text-dark font-bold">add</span>
      </button>
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-10"></Link>
    </div>
  );
}
