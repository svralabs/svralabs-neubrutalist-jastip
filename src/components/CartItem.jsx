import { useState } from 'react';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    const validQuantity = Math.max(1, Math.min(newQuantity, item.stock));
    setQuantity(validQuantity);
    onQuantityChange(item.id, validQuantity);
  };

  return (
    <div className="clay-card bg-surface p-md rounded-2xl flex gap-md items-center group">
      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-primary-fixed border-4 border-white clay-card">
        <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
      </div>
      <div className="flex-grow flex flex-col justify-between h-24 py-1">
        <div>
          <h3 className="font-body-md text-body-md font-bold text-on-surface leading-tight">{item.name}</h3>
          <p className="font-caption-sm text-caption-sm text-text-secondary mt-xs">{item.description}</p>
        </div>
        <div className="flex justify-between items-end">
          <span className="font-headline-md text-primary font-bold">฿{item.price.toLocaleString()}</span>
          <div className="clay-counter bg-surface-container rounded-full flex items-center px-1 py-1">
            <button
              className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <span className="px-3 font-bold text-on-surface">{quantity}</span>
            <button
              className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={quantity >= item.stock}
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>
      </div>
      <button
        className="text-error opacity-40 hover:opacity-100 transition-opacity p-1"
        onClick={() => onRemove(item.id)}
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
}
