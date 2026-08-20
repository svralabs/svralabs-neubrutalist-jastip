import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../components/CartItem';

const mockCartItems = [
  {
    id: 1,
    name: 'Gentlewoman Canvas Tote',
    description: 'Premium Edition • Beige',
    price: 790,
    quantity: 1,
    stock: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtANHVuFK2hh66As02APMFNFUcob1Xh59aStzsce5B3FN0_ivN9q25gZ3VFj9KpIKgWdtAYEkU2j6_iUeenO3cjP2L5KAt3daVk32Kh4hO2Nc4eA1uehuz22sz8N4WVFGSP1G51oPiwVGv6CsE0qm7SesxKHUT3SXs_G72QAsTEtVfXhikJwrCTyHaFokF7rM6NM5ij32Xx51LJMh-d04jO2vUpU2xsziwqBe0Sv9P61d2WEww29nrkg'
  },
  {
    id: 2,
    name: 'Mistine Glow Serum',
    description: 'Skin Brightening • 30ml',
    price: 450,
    quantity: 2,
    stock: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfObMVNMTGHQUgHI51iLdJnmPzcXg06Wn0gpqBu9QU7p7KdrTjc4fFU9AsNesIEakWqUoT-au2L_o-UnPL4kBbeD6DsuJfyXvmgGOCmIrqQFGQbNS3GEyOLoFZCytgZee2GXIi62moWMpwKZyuP6djbG25fB5GryeuOyA4qvexbfuRQnOPLShyA6_k9bVdr2IE2UMV5qkJeyFZ0TAfN94qB2RAPB5ZMsEVXsxdN8WlhLf2yZdPPi28OA'
  }
];

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const navigate = useNavigate();

  const handleQuantityChange = (itemId, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (itemId) => {
    setItemToRemove(itemId);
    setShowRemoveModal(true);
  };

  const confirmRemoveItem = () => {
    setCartItems(cartItems.filter(item => item.id !== itemToRemove));
    setShowRemoveModal(false);
    setItemToRemove(null);
  };

  const cancelRemoveItem = () => {
    setShowRemoveModal(false);
    setItemToRemove(null);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateSubtotal();
  const adminFee = 150;
  const total = subtotal + adminFee;

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full z-50 bg-background flex justify-between items-center px-screen-margin py-md">
        <div className="flex items-center gap-md">
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container transition-transform active:scale-95"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">Your Cart</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-fixed clay-card">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEX2_5MxfvK81b2QVJse3-TauomwqHh6YAe9JExzcSJWNoRtNKlowbPaHM7SmuepqJ7czny4JMa9Gnf72bD9Tu1C6eB3P9SvNOFbOWvNwt4cSERL4JlNC7NXDBv62lU2ztCbYKZ2tku82QxmPOXYOl2j6fQMvxUiWyzx-UDQzdyZ1_rEE0z4MwvSVxQISXiybKKoqSaOUtjfK1oVmYZgaqJDJQdrQo4T-HW8i98ffEJa4npeQ3EoZ6_Q"
            alt="User profile"
          />
        </div>
      </header>

      <main className="mt-20 px-screen-margin space-y-grid-gap">
        <div className="flex items-center gap-sm mt-4">
          <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_mall</span>
          <h2 className="font-headline-md text-body-md font-bold text-on-surface uppercase tracking-wider">Bangkok Sale</h2>
        </div>

        <div className="grid grid-cols-1 gap-grid-gap">
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveItem}
            />
          ))}
        </div>

        <div className="clay-card bg-secondary-container p-xl rounded-2xl mt-4 space-y-md">
          <div className="flex justify-between items-center">
            <span className="font-body-md text-on-secondary-container opacity-80">Product Total</span>
            <span className="font-headline-md text-on-secondary-container font-bold">฿{subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body-md text-on-secondary-container opacity-80">Est. Admin Fee</span>
            <span className="font-headline-md text-on-secondary-container font-bold">฿{adminFee.toLocaleString()}</span>
          </div>
          <hr className="border-on-secondary-container opacity-10" />
          <div className="flex gap-sm items-start bg-white/30 p-md rounded-xl">
            <span className="material-symbols-outlined text-on-secondary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <p className="font-caption-sm text-on-secondary-container leading-tight">Final shipping/packing fees will be adjusted by admin later.</p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-32 left-0 w-full px-screen-margin z-40">
        <button
          className="w-full clay-button bg-primary-container text-on-primary py-lg rounded-full font-headline-md text-body-md font-bold transition-all hover:brightness-105 active:scale-95 flex items-center justify-center gap-sm"
          onClick={() => navigate('/checkout')}
          disabled={cartItems.length === 0}
        >
          Lanjut ke Pembayaran
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      {showRemoveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-surface p-md rounded-2xl w-80">
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-md">Remove Item</h3>
            <p className="font-body-md text-body-md text-on-surface mb-md">Are you sure you want to remove this item from your cart?</p>
            <div className="flex justify-end gap-md">
              <button
                className="px-md py-sm bg-surface-container rounded-full font-body-md text-body-md text-on-surface hover:bg-surface-container-high transition-colors"
                onClick={cancelRemoveItem}
              >
                Cancel
              </button>
              <button
                className="px-md py-sm bg-error-container rounded-full font-body-md text-body-md text-on-error-container hover:bg-error transition-colors"
                onClick={confirmRemoveItem}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
