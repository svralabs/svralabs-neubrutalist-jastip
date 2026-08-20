import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';

export default function ProductCatalog() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const mockProducts = [
    {
      id: 1,
      name: 'Streetwear Tee',
      price: '฿450 + 50 Fee',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0T7VEKmggwNY_cKA_B3MSNlotUL31bGfiF_Sghdp8jgqgQDATK88oL2heVDpXFhRIQuLAZsG2RR9KeGW3ZaPs4NhxuBdTkKrGKZoa1L--8m_rWqs0m1dbVYoDRmMhcI_BkG6pBzOmcy-h72a_Pc9Yen9mmLXHVlNiHA-64T5JaYcdDI2t_OKLuBbMcthkkeNp2g2Fc0HkFogdCfLok_rbqbDaam_8myPvi-lXRJhWAiWecwOyrROhHQ',
      category: 'Fashion',
      bgColor: '#FBBF24',
      isTall: true,
      badge: 'New Arrival',
      stock: 10
    },
    {
      id: 2,
      name: 'Glow Serum',
      price: '฿800 + 100 Fee',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqZVsKM60KFXMLz-g646xftbFsHW_NDqDB626oydYxbgZWaq5aEX3IfTtFAYPh4dY8nrpB4NrNSHV0rPkY3HRYl45O5Q9jVQNDwuK_tcv2fvB7gNJYiAaKZdKMD66AANSDtfadVQF4idGVzrvEBqq8-toWp5yKqWPvjr9rC00y_h-3XncJsfyR1FKzkXgjguJ7DHRLWlHiBa3MjUFtw4C0wSUofmxHt5I4b-TfbrhuH9aP0PdhyJezxQ',
      category: 'Skincare',
      bgColor: '#93C5FD',
      isTall: false,
      stock: 5
    },
    {
      id: 3,
      name: 'Seaweed Snacks',
      price: '฿120 + 20 Fee',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCDtd9PaekmNRt6ApIMiSDwjCYfb23LO4Dpd3tYMAa_08gUppDuzsg_mX1gqvHu-cUF9ErkIxzXKvFYrvWZEnBcwlHLVkgf3oQocUAbdZT6jIDawwsuLHRip_0Nzy2xgp2-XVqfXohFo_NMqKms9EAbZmwHmwFD8C8QHWGjEW17n1Ukw9762jucUMyA_6CA_RXeR2CoBssV3HJyfnfHuv4L259R-VfGVFyWWaRUXLNLYLeG9XA7V8aOw',
      category: 'Snacks',
      bgColor: '#F9A8D4',
      isTall: false,
      stock: 0
    },
    // Add more mock products as needed
  ];

  const fetchProducts = useCallback(() => {
    if (loading || !hasMore) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filteredProducts = mockProducts.filter(product => {
        const categoryFilter = searchParams.get('category');
        const minPrice = searchParams.get('minPrice');
        const maxPrice = searchParams.get('maxPrice');

        if (categoryFilter && categoryFilter !== 'All' && product.category !== categoryFilter) {
          return false;
        }

        if (minPrice && parseInt(product.price.split('฿')[1].split(' ')[0]) < parseInt(minPrice)) {
          return false;
        }

        if (maxPrice && parseInt(product.price.split('฿')[1].split(' ')[0]) > parseInt(maxPrice)) {
          return false;
        }

        return true;
      });

      const newProducts = filteredProducts.slice((page - 1) * 12, page * 12);
      setProducts(prev => [...prev, ...newProducts]);
      setHasMore(newProducts.length === 12);
      setLoading(false);
      setPage(prev => prev + 1);
    }, 1000);
  }, [loading, hasMore, page, searchParams]);

  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);
    fetchProducts();
  }, [searchParams]);

  const lastProductRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchProducts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, fetchProducts]);

  const handleAddToCart = (productId) => {
    // Implement add to cart logic here
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="flex gap-xl px-screen-margin py-xl">
      <FilterSidebar />

      <div className="flex-1">
        <div className="py-xl">
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-text-dark">Bangkok Sale Catalog</h2>
          <p className="text-text-secondary font-body-md mt-xs">Curated deals from Siam Square &amp; Beyond</p>
        </div>

        <div className="grid grid-cols-2 gap-grid-gap">
          {products.map((product, index) => {
            if (products.length === index + 1) {
              return (
                <div ref={lastProductRef} key={product.id}>
                  <ProductCard product={product} onAddToCart={() => handleAddToCart(product.id)} />
                </div>
              );
            } else {
              return <ProductCard key={product.id} product={product} onAddToCart={() => handleAddToCart(product.id)} />;
            }
          })}
        </div>

        {loading && <div className="text-center py-lg">Loading more products...</div>}
      </div>
    </div>
  );
}
