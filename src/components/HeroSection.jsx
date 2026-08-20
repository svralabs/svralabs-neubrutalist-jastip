import React from 'react';
import CTAButton from './CTAButton';

export default function HeroSection() {
  const handleBrowseStoreClick = () => {
    console.log('Browse Store button clicked');
  };

  return (
    <section className="col-span-2 relative overflow-hidden bg-primary-container rounded-[28px] p-6 clay-card-primary text-white h-52 flex flex-col justify-between">
      <div className="z-10 relative">
        <span className="bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-caption-sm font-label-pill uppercase tracking-wider">Live Now</span>
        <h2 className="font-headline-lg text-headline-lg mt-2">Jastip Bangkok Sale</h2>
        <p className="font-body-md opacity-90">25 - 30 Nov</p>
      </div>
      <div className="z-10 relative flex justify-between items-end">
        <div className="bg-text-dark/20 backdrop-blur-lg px-4 py-2 rounded-2xl border border-white/20">
          <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Ends in</p>
          <p className="font-label-pill text-lg">2d 14h 05m</p>
        </div>
        <CTAButton onClick={handleBrowseStoreClick}>Browse Store</CTAButton>
      </div>
      <div className="absolute -right-4 -top-4 w-40 h-40 opacity-90 pointer-events-none">
        <img
          className="w-full h-full object-contain transform rotate-12"
          alt="A 3D clay-style shopping bag overflowing with colorful gift boxes and trendy items, rendered in a playful matte finish with soft, pillow-like edges. The colors include vibrant purples, pinks, and yellows, perfectly matching a modern app interface."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuATSwbu4ouAidNUFaFc0qvBX_md9pg6c_nI1-2QPjnJlce-j7cwVu4pEfwJOxxf-AMuvTRQoMwzKLXaQPmwQ8zTFx5oOB09UJB53pyeL7DTuUcLK0ORnMQSR9ycUt9rmi078G73S-Jcu-rtSoPgj5hwqdIaDc6pNImFL7qzwXbAFK70JJXYPdeLC-UsbTVbtuOoxJ4NQG3ID8q4lV9djkVylsvIv5La32Tm3hb-NobCDIET7DdWXw7POQ"
        />
      </div>
    </section>
  );
}
