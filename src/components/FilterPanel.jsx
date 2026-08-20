import { useState } from 'react';

export default function FilterPanel({ categories, onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <nav className="flex overflow-x-auto gap-md hide-scrollbar pb-lg -mx-screen-margin px-screen-margin">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-lg py-sm rounded-full font-label-pill text-label-pill whitespace-nowrap clay-shadow ${activeCategory === category ? 'bg-primary-container text-on-primary-container' : 'bg-surface text-text-secondary shadow-sm border border-outline-variant/30'}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
