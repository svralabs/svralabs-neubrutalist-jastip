import React from 'react';
import HeroSection from '../components/HeroSection';

export default function LandingPage() {
  const handleNotificationsClick = () => {
    console.log('Notifications button clicked');
  };

  const categories = [
    {
      name: 'Fashion',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnV9ONG4-sEp3G-DfvTIxqayWdoEbnMrecidmruIE6r0Ifj0qcB2cGvbY975Xpjx-LTTg-aI_OJIFDGwxse-3S3KFg1Fdj3_9MPh_o5tYbfEZ2pK2_iy0EiE1MQuO6OZvHjhs9RUDzdc2IKpThco77AGVcozzyGert8tMvZ9Y_w57FZCo0d3weWk9AlCCf54pmUH5eix0tPcyRzE4CyBRAahnFsGc6zQdDh7n5dYGU4p25et1WXUU7cg',
      alt: 'A 3D claymorphic model of a stylish sneaker and a tiny designer handbag, colored in soft pastel pinks and purples with a matte finish. High quality rendering with soft ambient occlusion shadows.'
    },
    {
      name: 'Beauty',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzs9DiqPpCxURk15RVmmujlNGGq1ur-ZrfbHGph4Zm0Vz5l8kPFeqLRrvSWjEA8CMFXif-BZBUTi7yRwcHRk7D3ISlhVb0OaRs9Dbh7xROBzY8Bpi4AR5Rs1uKTvm9fuPA9XvV-oT76MpBqdXBxCf8xN0God1UTD_2bRerRFa0vwin2HdvSNkSoXoVD2at5EdnMfAUHd3_te5jGNuagDl64EUTIWF1c5lwl2qjxW4sK',
      alt: 'A 3D clay-style cosmetic set including a lipstick tube and a skincare bottle, rendered in soft peach and cream colors with a smooth matte texture. Playful and toy-like design style.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="w-full top-0 sticky z-40 bg-background/80 backdrop-blur-md flex justify-between items-center px-screen-margin py-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container clay-card overflow-hidden border-2 border-white">
            <img
              className="w-full h-full object-cover"
              alt="A high-quality 3D clay-style avatar of a young smiling traveler wearing a yellow beanie, set against a soft purple background. The visual style is matte, toy-like, and highly approachable, using soft ambient lighting to create depth."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKpKANe7PD2X4YYr9TFTKH4NSUawTwib3I_EoIkwhRWNtE4Bu_OqzAsCf0zAx0abbpc_bBWMEDANKAnEoWT4SiojhyZBc6X2ZLBYF-eDxPFAAPqPK3biJ4kqe4DJCGr5umeYj_U1_Q1cQmaRxWbOWsr8vzh0tXTnMGBpnEBnLL5RODmhqotwK-VeIej4GIkFp2WTNAKks1CRkQwdwpGs1hV6BAH0-3-iOk8vdpUBAMUqtnpQ6nycYuqA"
            />
          </div>
          <h1 className="font-headline-md text-headline-md text-primary">Hi, Traveler!</h1>
        </div>
        <button
          className="w-10 h-10 rounded-full bg-surface clay-card flex items-center justify-center text-primary active:scale-95 transition-transform"
          onClick={handleNotificationsClick}
        >
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>
      <main className="px-screen-margin pt-4 space-y-6">
        <div className="relative w-full clay-card rounded-full bg-surface px-4 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-outline">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 w-full text-body-md text-on-surface-variant placeholder:text-outline-variant"
            placeholder="Where do you want to shop?"
            type="text"
          />
        </div>
        <div className="grid grid-cols-2 gap-grid-gap">
          <HeroSection />
          <section className="col-span-2 bg-accent-blue rounded-[28px] p-5 clay-card-blue relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-headline-md text-on-secondary-container">Upcoming Trips</h3>
                <p className="text-caption-sm text-on-secondary-container/70">Mark your calendars!</p>
              </div>
              <span className="material-symbols-outlined text-on-secondary-container">calendar_month</span>
            </div>
            <div className="flex justify-between items-center bg-white/40 backdrop-blur-sm rounded-2xl p-3">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-secondary-container opacity-60">DEC</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white clay-card text-on-secondary-container font-bold text-sm">12</div>
              </div>
              <div className="h-0.5 flex-1 bg-on-secondary-container/10 mx-2 relative">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
                <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-pink"></div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold text-on-secondary-container opacity-60">DEC</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-on-secondary-container text-white clay-card-blue font-bold text-sm">24</div>
              </div>
              <div className="ml-4 text-right">
                <p className="font-label-pill text-xs text-on-secondary-container">Tokyo Disney</p>
                <p className="text-[10px] font-body-md text-on-secondary-container/70">Limited Slots</p>
              </div>
            </div>
          </section>
          {categories.map((category, index) => (
            <section key={index} className="bg-surface rounded-[28px] p-4 clay-card flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
              <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center mb-2 overflow-hidden">
                <img
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
                  alt={category.alt}
                  src={category.image}
                />
              </div>
              <h4 className="font-label-pill text-on-surface">{category.name}</h4>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
