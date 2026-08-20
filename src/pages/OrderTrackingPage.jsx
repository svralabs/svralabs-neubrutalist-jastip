import React from 'react';
import { useParams } from 'react-router-dom';
import OrderStatusBadge from '../components/OrderStatusBadge';

const mockOrder = {
  id: 'BK-9901',
  status: 'In Progress',
  steps: [
    { name: 'Order Masuk', completed: true },
    { name: 'Diproses', completed: true },
    { name: 'Terbeli', completed: true },
    { name: 'Invoice', completed: true },
    { name: 'Menunggu Bayar', active: true },
    { name: 'Validasi Lunas', completed: false }
  ],
  items: [
    {
      name: 'Mistine Glow Serum',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6pw2SVuEl929L41hVTb7xQ9fQJYuNhfRSHcuLCZnBNiriAjO9i_MCmY-3mG7N9xtxXlLkfarRO7JX_VoiWKsBEbAPMwXO-37EeHiPh0NyFzU0lSPcFQHDX0DxxbEtxJlNcL0eIYmwnIu1i-f0UsrEZ38Cayr4prknJUJTiIwMTAIat59UtX0vJmmvclpsgUuFa2-puO2xtKr7pa299XHnDpXP3---EP4vOYW8BlYGsH6XSN9i_IEc_g',
      inStock: true
    },
    {
      name: 'Matcha Pocky XL',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjW1-VJIVFpX7CXeQbyFyWin7vw3OyA75UFyzoEiQz-B2IGP03DubC6x9l_IrKrhqFOXJzVPnZBHQDP5f7xDJPCktPGuYQ-KmuMCkErvydatNceSLeUKDILMnuZK3xa1DL7JYFv9R5g8gu0wnKVYi4l38b5s7EMZozcfT8pvgNttsMHzu86VKjSwRK9jT96BMdnOCoxeA11zrKwZ_SuJ7Ze1rAB1yz3PGMCw67SN09OXcfUEUxCQcd7Q',
      inStock: true
    },
    {
      name: 'Spicy Seaweed',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU9ZMhORMjNCZgSEhnH1ty9wjQIbtm3HM69SQ8haJTWDVF64lbQnzcC2EnIO3-PYcOue4VLTEt_cKnssyUXpJkVYWQkygVdtDqxBqNqkylIGphG7KxrQIrke7kEC71swyuwtJe8gh7Mb4YFNLVRGZxCrNB6R0_zCRJnObAkGdjzSNwoesfcyexEMFxQKQGibYa48NwAcfbPKARNvqhpdk8fLqxHSc4gfIiozSPAlmOG5ipxINfWg57Qg',
      inStock: false
    }
  ]
};

export default function OrderTrackingPage() {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background pt-4 pb-2 px-screen-margin flex justify-between items-center w-full">
        <button className="w-12 h-12 flex items-center justify-center bg-surface clay-card active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Order Status</h1>
        <button className="w-12 h-12 flex items-center justify-center bg-surface clay-card active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">help</span>
        </button>
      </header>

      <main className="px-screen-margin mt-6 space-y-grid-gap">
        <section className="clay-card p-6 bg-surface">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-on-surface-variant font-label-pill text-xs uppercase tracking-wider">Order Reference</span>
              <h2 className="font-headline-md text-headline-md text-text-dark">Order #{orderId}</h2>
            </div>
            <OrderStatusBadge status={mockOrder.status} />
          </div>

          <div className="relative pt-4 pb-8 overflow-x-auto hide-scrollbar">
            <div className="flex items-center min-w-[600px] px-2">
              {mockOrder.steps.map((step, index) => (
                <React.Fragment key={step.name}>
                  <div className="flex flex-col items-center gap-2 relative z-10">
                    <div className={`w-${step.active ? '6' : '4'} h-${step.active ? '6' : '4'} bg-${step.completed ? 'primary' : 'outline-variant'} rounded-full flex items-center justify-center ${step.active ? 'clay-dot-active ring-4 ring-primary-container/30' : step.completed ? 'clay-dot-active' : 'clay-dot-inactive'}`}>
                      {step.active && (
                        <span className="material-symbols-outlined text-white text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
                      )}
                    </div>
                    <span className={`text-[10px] ${step.active ? 'font-bold' : 'font-semibold'} ${step.completed ? 'text-primary' : step.active ? 'text-primary' : 'text-on-surface-variant'} text-center whitespace-nowrap`}>
                      {step.name}
                    </span>
                  </div>
                  {index < mockOrder.steps.length - 1 && (
                    <div className={`h-[3px] flex-1 ${step.completed ? 'bg-primary/20' : 'bg-outline-variant/30'} min-w-[40px]`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <div className="bento-grid">
          <section className="clay-card bg-accent-blue p-5 col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-on-primary-container">fact_check</span>
              <h3 className="font-label-pill text-on-primary-container">Items Found</h3>
            </div>
            <ul className="space-y-3">
              {mockOrder.items.filter(item => item.inStock).map((item) => (
                <li key={item.name} className="flex items-center justify-between bg-white/50 p-3 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl overflow-hidden bg-white">
                      <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                    </div>
                    <span className="font-medium text-sm">{item.name}</span>
                  </div>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="clay-card bg-accent-pink p-5 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-red-600">cancel</span>
              <h3 className="font-label-pill text-red-800">Out of Stock</h3>
            </div>
            <div className="flex items-center justify-between bg-white/30 p-3 rounded-2xl border border-white/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/50 grayscale">
                  <img className="w-full h-full object-cover" src={mockOrder.items.find(item => !item.inStock).image} alt={mockOrder.items.find(item => !item.inStock).name} />
                </div>
                <span className="font-medium text-sm text-red-900">{mockOrder.items.find(item => !item.inStock).name}</span>
              </div>
              <button className="text-[10px] font-bold bg-white/50 text-red-800 px-2 py-1 rounded-full">Cancel Item</button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
