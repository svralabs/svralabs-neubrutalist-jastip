import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ShoppingCartPage() {
  const { cartItems, updateQuantity, removeItem, calculateTotal } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full z-50 bg-background flex justify-between items-center px-4 py-4">
        <div className="flex items-center gap-4">
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
            alt="User profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEX2_5MxfvK81b2QVJse3-TauomwqHh6YAe9JExzcSJWNoRtNKlowbPaHM7SmuepqJ7czny4JMa9Gnf72bD9Tu1C6eB3P9SvNOFbOWvNwt4cSERL4JlNC7NXDBv62lU2ztCbYKZ2tku82QxmPOXYOl2j6fQMvxUiWyzx-UDQzdyZ1_rEE0z4MwvSVxQISXiybKKoqSaOUtjfK1oVmYZgaqJDJQdrQo4T-HW8i98ffEJa4npeQ3EoZ6_Q"
          />
        </div>
      </header>

      <main className="mt-20 px-4 space-y-4">
        <div className="flex items-center gap-2 mt-4">
          <span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_mall</span>
          <h2 className="font-headline-md text-body-md font-bold text-on-surface uppercase tracking-wider">Bangkok Sale</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {cartItems.map(item => (
            <div key={item.id} className="clay-card bg-surface p-4 rounded-2xl flex gap-4 items-center group">
              <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-primary-fixed border-4 border-white clay-card">
                <img
                  className="w-full h-full object-cover"
                  alt={item.name}
                  src={item.image}
                />
              </div>
              <div className="flex-grow flex flex-col justify-between h-24 py-1">
                <div>
                  <h3 className="font-body-md text-body-md font-bold text-on-surface leading-tight">{item.name}</h3>
                  <p className="font-caption-sm text-caption-sm text-text-secondary mt-1">{item.description}</p>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-headline-md text-primary font-bold">฿{item.price}</span>
                  <div className="clay-counter bg-surface-container rounded-full flex items-center px-1 py-1">
                    <button
                      className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90"
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    >
                      <span className="material-symbols-outlined text-[18px]">remove</span>
                    </button>
                    <span className="px-3 font-bold text-on-surface">{item.quantity}</span>
                    <button
                      className="w-7 h-7 flex items-center justify-center text-primary hover:bg-white rounded-full transition-colors active:scale-90"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
              <button
                className="text-error opacity-40 hover:opacity-100 transition-opacity p-1"
                onClick={() => removeItem(item.id)}
              >
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))}
        </div>

        <div className="clay-card bg-secondary-container p-8 rounded-2xl mt-4 space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-body-md text-on-secondary-container opacity-80">Product Total</span>
            <span className="font-headline-md text-on-secondary-container font-bold">฿{calculateTotal()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-body-md text-on-secondary-container opacity-80">Est. Admin Fee</span>
            <span className="font-headline-md text-on-secondary-container font-bold">฿150</span>
          </div>
          <hr className="border-on-secondary-container opacity-10" />
          <div className="flex gap-2 items-start bg-white/30 p-4 rounded-xl">
            <span className="material-symbols-outlined text-on-secondary-container text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <p className="font-caption-sm text-on-secondary-container leading-tight">Final shipping/packing fees will be adjusted by admin later.</p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-32 left-0 w-full px-4 z-40">
        <button
          className="w-full clay-button bg-primary-container text-on-primary py-4 rounded-full font-headline-md text-body-md font-bold transition-all hover:brightness-105 active:scale-95 flex items-center justify-center gap-2"
          onClick={() => navigate('/checkout')}
        >
          Lanjut ke Pembayaran
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
