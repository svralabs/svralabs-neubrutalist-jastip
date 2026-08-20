import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product, onAddToCart }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`col-span-1 rounded-clay ${product.isTall ? 'row-span-2 h-[340px]' : 'h-[164px]'} p-lg flex flex-col justify-between clay-shadow relative overflow-hidden`}
      style={{ backgroundColor: product.bgColor }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="clay-card-inner absolute inset-0 pointer-events-none"></div>
      <div className="z-10 h-full flex flex-col">
        {product.badge && (
          <span className="bg-white/30 backdrop-blur-md px-sm py-xs rounded-full text-[10px] font-bold self-start text-dark uppercase tracking-wider">
            {product.badge}
          </span>
        )}
        <div className={`mt-xl flex-grow flex items-center justify-center ${product.isTall ? '' : 'mt-0'}`}>
          <img
            className={`w-full h-auto ${product.isTall ? 'drop-shadow-2xl' : 'object-contain'}`}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="mt-auto">
          <h3 className={`font-headline-md text-headline-md text-text-dark leading-tight ${product.isTall ? '' : 'font-label-pill text-label-pill'}`}>
            {product.name}
          </h3>
          <p className={`font-body-md text-text-dark/80 mt-xs ${product.isTall ? '' : 'text-[12px] font-semibold text-text-dark/70'}`}>
            {product.price}
          </p>
        </div>
      </div>
      <button
        className="absolute bottom-md right-md w-11 h-11 bg-white rounded-full flex items-center justify-center clay-button transition-all active:scale-90 z-20"
        onClick={onAddToCart}
        disabled={product.stock === 0}
      >
        <span className="material-symbols-outlined text-text-dark font-bold">
          {product.stock === 0 ? 'remove_shopping_cart' : 'add'}
        </span>
      </button>
    </motion.div>
  );
}
