import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockCatalog } from '../data/mockCatalog';

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCatalog = activeTab === 'all'
    ? mockCatalog
    : mockCatalog.filter(item => item.tags.includes(activeTab));

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-16 md:pb-24">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h1 className="font-headline-main text-headline-main text-on-surface mb-6">
            SATU TEMPAT, <br/>
            <span className="bg-on-surface text-white px-4 md:px-6 inline-block neubrutal-shadow rotate-[-1deg]">SEMUA ADA!</span>
          </h1>
          <p className="font-body-md text-lg md:text-xl text-on-surface-variant max-w-xl">
            Tinggalkan tab browser yang menumpuk. Pindah ke Thirtyspace. Ruang kerja kolaboratif paling berisik tapi paling rapi.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {mockCatalog.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} neubrutal-border neubrutal-shadow rounded-xl p-4 md:p-6 flex flex-col justify-between h-40 md:h-48 hover-lift`}
            >
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-3xl md:text-4xl">{item.icon}</span>
                <span className="bg-white neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">
                  {item.tags[0].toUpperCase()}
                </span>
              </div>
              <h3 className="font-heading-card text-heading-card uppercase">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Catalog Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full font-label-bold text-label-bold ${activeTab === 'all' ? 'bg-primary-container neubrutal-border neubrutal-shadow' : 'bg-white neubrutal-border'}`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveTab('new')}
              className={`px-4 py-2 rounded-full font-label-bold text-label-bold ${activeTab === 'new' ? 'bg-primary-container neubrutal-border neubrutal-shadow' : 'bg-white neubrutal-border'}`}
            >
              Baru
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-full font-label-bold text-label-bold ${activeTab === 'featured' ? 'bg-primary-container neubrutal-border neubrutal-shadow' : 'bg-white neubrutal-border'}`}
            >
              Unggulan
            </button>
            <button
              onClick={() => setActiveTab('hot')}
              className={`px-4 py-2 rounded-full font-label-bold text-label-bold ${activeTab === 'hot' ? 'bg-primary-container neubrutal-border neubrutal-shadow' : 'bg-white neubrutal-border'}`}
            >
              Populer
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredCatalog.map((item) => (
              <Link
                key={item.id}
                to={`/catalog/${item.id}`}
                className="block bg-white neubrutal-border neubrutal-shadow rounded-xl overflow-hidden hover-lift transition-all"
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white neubrutal-border px-2 py-0.5 rounded-full font-label-bold text-[10px]">
                    {item.tags[0].toUpperCase()}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-heading-card text-heading-card mb-2">{item.title}</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-label-bold text-label-bold">Rp {item.price.toLocaleString('id-ID')}</span>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                      <span className="font-label-bold text-label-bold">{item.rating}</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">({item.reviews})</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
