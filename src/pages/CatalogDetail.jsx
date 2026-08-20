import { useNavigate } from 'react-router-dom';

const mockProducts = [
  {
    id: 1,
    name: 'Hada Labo Gokujyun Premium',
    price: 'Rp 245.000',
    fee: 'Fee 10%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ug4rAG5GumUXr88U3gLZVTMl5i6ag1zAw6NTmryYLqmWnq0iH9sqICB5ObR1TPr7bAA6YPmJtXfTI29OBDSg84YczveAt22rdCKF7mEY68AwMvQQnei03Nibo0voFchrRQy7mcydg--pbPCCdHGqHwi5E-Yqo_1oZlfLvVlE77oqJQuozoO_gYNrxsu2miZ60Xp__bkbwHx833Z8T5TFF1699xgIBgfmvr7h_Fk8G6buaDnVI1kk',
    alt: 'Close-up of a high-end Japanese Hada Labo Gokujyun skincare bottle set against a vibrant, energetic background of abstract cyan and yellow shapes. Professional studio lighting highlights the translucent texture of the packaging. The overall aesthetic is clean, modern, and high-contrast, fitting a premium jastip catalog vibe.'
  },
  {
    id: 2,
    name: 'KitKat Matcha Kyoto Edition',
    price: 'Rp 85.000',
    fee: 'Fee Rp15.000',
    image: null,
    alt: 'Product Image Missing'
  },
  {
    id: 3,
    name: 'Uniqlo Japan Graphic Tee',
    price: 'Rp 299.000',
    fee: 'Fee 10%',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVidW2XqSGa_umMEbQDCmXOSgelwHu_jJzGccCBhwPRArS5KNt7CZgKLb5X22t7o2GyQcOo21e33RtrWbhqqh92uERD_oAycU19kURG42-j2x9n4igU5EPGAbn6WRhqIzUv-84dSZoKpyaoz5LLJc9-kLPcCAqN8g1fU4exGExTJhLfDsRwZtJyVCZpOgZJkFfwG3WD8-evQFSVxglKY5TFrSdnrLGHKO4NgZVTXAwFbgBCAJxDoiu',
    alt: 'A trendy Japanese streetwear oversized graphic t-shirt displayed on a bright orange background with mechanical neubrutalist design elements like heavy black lines and grids. The lighting is harsh and direct, creating a bold, street-style aesthetic. The t-shirt features colorful Japanese typography and anime-inspired illustrations.'
  }
];

export default function CatalogDetail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface">
      {/* Top AppBar */}
      <header className="bg-primary dark:bg-primary text-on-primary dark:text-on-primary w-full top-0 sticky border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center px-4 py-2 z-50">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)} className="active:translate-y-0.5 active:shadow-none transition-all hover:bg-accent-pink p-2 rounded-full">
            <span className="material-symbols-outlined text-on-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-main-mobile text-[24px] uppercase tracking-tighter text-on-primary">Jastip Catalog</h1>
        </div>
        <button className="active:translate-y-0.5 active:shadow-none transition-all hover:bg-accent-pink p-2 rounded-full">
          <span className="material-symbols-outlined text-on-primary">search</span>
        </button>
      </header>

      <main className="px-4 pt-6">
        {/* Event Banner Section */}
        <section className="bg-primary-container border-2 border-black block-shadow rounded-xl p-4 mb-6">
          <div className="flex flex-col">
            <span className="font-label-bold text-label-bold text-on-primary-container uppercase tracking-widest mb-2">Active Event</span>
            <h2 className="font-headline-main-mobile text-headline-main-mobile leading-none mb-2">Event Jepang Trip</h2>
            <div className="flex items-center gap-2 text-on-primary-container">
              <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              <p className="font-label-bold text-label-bold">12–18 Jul 2026</p>
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative flex items-center">
            <span className="material-symbols-outlined absolute left-4 text-on-surface-variant">search</span>
            <input className="w-full bg-white border-2 border-black rounded-xl py-3 pl-12 pr-4 font-body-md block-shadow focus:outline-none focus:ring-2 focus:ring-accent-orange" placeholder="Cari oleh-oleh idamanmu..." type="text" />
          </div>
        </div>

        {/* Category Filters */}
        <section className="mb-6 -mx-4 px-4 overflow-x-auto no-scrollbar flex gap-2">
          <button className="bg-secondary-container text-on-secondary-container border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Semua</button>
          <button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Skincare</button>
          <button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Snack</button>
          <button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Fashion</button>
          <button className="bg-white border-2 border-black rounded-full px-6 py-2 font-label-bold text-label-bold block-shadow active-shadow-press whitespace-nowrap">Mainan</button>
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-2 gap-4">
          {mockProducts.map(product => (
            <div key={product.id} className="bg-white border-2 border-black rounded-xl overflow-hidden block-shadow flex flex-col">
              <div className="relative h-40 w-full border-b-2 border-black overflow-hidden">
                {product.image ? (
                  <img className="w-full h-full object-cover" src={product.image} alt={product.alt} />
                ) : (
                  <div className="relative h-40 w-full border-b-2 border-black bg-surface-container flex flex-col items-center justify-center text-on-surface-variant p-4 text-center">
                    <span className="material-symbols-outlined text-[48px] mb-2">hide_image</span>
                    <p className="font-label-bold text-[10px] uppercase opacity-60">Product Image Missing</p>
                  </div>
                )}
                <div className={`absolute top-2 left-2 border-2 border-black px-2 py-0.5 rounded-full font-label-bold text-[10px] uppercase ${product.fee.includes('%') ? 'bg-accent-pink' : 'bg-accent-orange text-white'}`}>
                  {product.fee}
                </div>
              </div>
              <div className="p-3 flex flex-col flex-grow">
                <h3 className="font-label-bold text-label-bold text-on-surface line-clamp-2 h-10 mb-2">{product.name}</h3>
                <p className="font-headline-main-mobile text-[16px] text-primary mb-4">{product.price}</p>
                <button className="mt-auto w-full bg-secondary-container border-2 border-black py-2 rounded-lg font-label-bold text-label-bold flex items-center justify-center gap-2 active-shadow-press block-shadow text-on-secondary-container">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Titip
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
