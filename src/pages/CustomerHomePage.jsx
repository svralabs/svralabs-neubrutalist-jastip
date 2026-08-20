import { useState } from 'react';
import { products, categories } from '../mocks/products';

export default function CustomerHomePage() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = activeCategory === 'Semua'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-surface">
      {/* TopAppBar */}
      <header className="w-full sticky top-0 bg-surface z-50 border-b border-border-black flex items-center justify-between px-lg py-md h-16">
        <div className="flex items-center gap-sm">
          <span className="material-symbols-outlined text-primary" data-icon="shopping_bag">shopping_bag</span>
          <h1 className="font-headline-lg text-headline-lg font-black text-primary tracking-tight">JastipHub</h1>
        </div>
        <button className="w-10 h-10 border border-border-black rounded-lg flex items-center justify-center hover:bg-surface-container transition-colors active:translate-x-0.5 active:translate-y-0.5">
          <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
        </button>
      </header>

      <main className="px-lg py-lg space-y-2xl">
        {/* Hero Banner */}
        <section className="relative bg-accent-yellow border border-border-black rounded-2xl p-lg overflow-hidden">
          <div className="flex flex-col relative z-10 space-y-md">
            <div className="flex justify-between items-start">
              <span className="bg-border-black text-white px-md py-xs rounded-full font-label-caps text-label-caps flex items-center gap-xs">
                <span className="material-symbols-outlined text-[14px]" data-icon="timer" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                CLOSES IN 02D : 14H : 30M
              </span>
            </div>
            <div className="space-y-xs">
              <h2 className="font-headline-lg text-headline-lg text-border-black uppercase italic">Bangkok Snacks & Fashion</h2>
              <p className="font-body-md text-border-black/80 font-bold">15 - 20 Aug 2026</p>
            </div>
            <button className="bg-border-black text-white px-lg py-sm rounded-lg font-label-bold flex items-center justify-center self-start gap-sm transition-transform active:scale-95">
              Explore Trip
              <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>
          {/* Decorative Element */}
          <div className="absolute -right-8 -bottom-8 opacity-20 transform -rotate-12 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]" data-icon="flight_takeoff">flight_takeoff</span>
          </div>
        </section>

        {/* Categories */}
        <nav className="flex overflow-x-auto gap-sm hide-scrollbar -mx-lg px-lg">
          {categories.map(category => (
            <button
              key={category}
              className={`whitespace-nowrap px-lg py-sm border border-border-black rounded-full font-label-bold transition-all ${
                activeCategory === category
                  ? 'bg-border-black text-white'
                  : 'bg-surface text-border-black hover:bg-surface-container'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-lg">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-surface border border-border-black rounded-xl overflow-hidden flex flex-col transition-transform active:scale-[0.98]">
              <div className="h-40 w-full relative bg-surface-container">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.imageUrl}')` }}
                />
              </div>
              <div className="p-md flex flex-col gap-sm flex-1">
                <h3 className="font-headline-md text-body-md font-bold leading-tight line-clamp-2">{product.name}</h3>
                <div className="space-y-xs">
                  <p className="font-headline-md text-border-black">Rp {product.price.toLocaleString()}</p>
                  <span className={`inline-block text-white px-sm py-xs border border-border-black rounded font-label-bold text-[10px] ${
                    product.fee > 30000 ? 'bg-[#F472B6]' : 'bg-[#4ADE80] text-border-black'
                  }`}>
                    + Fee Rp {product.fee.toLocaleString()}
                  </span>
                </div>
                <button className="mt-auto w-full border border-border-black bg-primary-container text-border-black font-label-bold py-xs rounded-lg hover:bg-primary transition-colors active:translate-x-0.5 active:translate-y-0.5">
                  + Tambah
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
