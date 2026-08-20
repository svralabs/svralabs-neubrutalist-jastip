import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get('minPrice') || '',
    max: searchParams.get('maxPrice') || ''
  });

  const categories = ['All', 'Fashion', 'Skincare', 'Snacks', 'Electronics'];

  const handleCategoryChange = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    setSearchParams(params);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({ ...prev, [name]: value }));
  };

  const applyPriceFilter = () => {
    const params = new URLSearchParams(searchParams);
    if (priceRange.min) params.set('minPrice', priceRange.min);
    if (priceRange.max) params.set('maxPrice', priceRange.max);
    setSearchParams(params);
  };

  return (
    <aside className="w-64 bg-surface p-lg rounded-clay clay-shadow">
      <h3 className="font-headline-sm text-headline-sm mb-lg">Filters</h3>

      <div className="mb-xl">
        <h4 className="font-label-pill text-label-pill mb-md">Category</h4>
        <div className="flex flex-col gap-sm">
          {categories.map(category => (
            <button
              key={category}
              className={`px-md py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap text-left ${searchParams.get('category') === category || (category === 'All' && !searchParams.get('category')) ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container text-text-secondary'}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-label-pill text-label-pill mb-md">Price Range</h4>
        <div className="flex gap-sm mb-md">
          <input
            type="number"
            name="min"
            placeholder="Min"
            value={priceRange.min}
            onChange={handlePriceChange}
            className="flex-1 px-md py-sm rounded-full bg-surface-container text-text-secondary font-label-pill text-label-pill border border-outline-variant/30"
          />
          <input
            type="number"
            name="max"
            placeholder="Max"
            value={priceRange.max}
            onChange={handlePriceChange}
            className="flex-1 px-md py-sm rounded-full bg-surface-container text-text-secondary font-label-pill text-label-pill border border-outline-variant/30"
          />
        </div>
        <button
          className="w-full bg-primary-container text-on-primary-container px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap clay-shadow"
          onClick={applyPriceFilter}
        >
          Apply
        </button>
      </div>
    </aside>
  );
}
