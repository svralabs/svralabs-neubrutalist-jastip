import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Gentlewoman Canvas Tote',
      description: 'Premium Edition • Beige',
      price: 790,
      quantity: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtANHVuFK2hh66As02APMFNFUcob1Xh59aStzsce5B3FN0_ivN9q25gZ3VFj9KpIKgWdtAYEkU2j6_iUeenO3cjP2L5KAt3daVk32Kh4hO2Nc4eA1uehuz22sz8N4WVFGSP1G51oPiwVGv6CsE0qm7SesxKHUT3SXs_G72QAsTEtVfXhikJwrCTyHaFokF7rM6NM5ij32Xx51LJMh-d04jO2vUpU2xsziwqBe0Sv9P61d2WEww29nrkg'
    },
    {
      id: 2,
      name: 'Mistine Glow Serum',
      description: 'Skin Brightening • 30ml',
      price: 450,
      quantity: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfObMVNMTGHQUgHI51iLdJnmPzcXg06Wn0gpqBu9QU7p7KdrTjc4fFU9AsNesIEakWqUoT-au2L_o-UnPL4kBbeD6DsuJfyXvmgGOCmIrqQFGQbNS3GEyOLoFZCytgZee2GXIi62moWMpwKZyuP6djbG25fB5GryeuOyA4qvexbfuRQnOPLShyA6_k9bVdr2IE2UMV5qkJeyFZ0TAfN94qB2RAPB5ZMsEVXsxdN8WlhLf2yZdPPi28OA'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateQuantity, removeItem, calculateTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
