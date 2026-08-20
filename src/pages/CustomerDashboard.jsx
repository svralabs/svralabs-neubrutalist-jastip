import OrderStats from '../components/OrderStats';
import EventCalendar from '../components/EventCalendar';

export default function CustomerDashboard() {
  const quickActions = [
    { label: 'New Order', icon: 'add_shopping_cart', color: 'bg-primary' },
    { label: 'Track Order', icon: 'local_shipping', color: 'bg-accent-blue' },
    { label: 'Support', icon: 'support_agent', color: 'bg-accent-green' },
    { label: 'Settings', icon: 'settings', color: 'bg-accent-yellow' },
  ];

  const handleActionClick = (action) => {
    console.log('Quick action clicked:', action);
  };

  return (
    <div className="min-h-screen bg-background">
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
          <div className="absolute -right-8 -bottom-8 opacity-20 transform -rotate-12 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]" data-icon="flight_takeoff">flight_takeoff</span>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
          <div className="lg:col-span-2 space-y-lg">
            <OrderStats />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} text-white border border-border-black rounded-xl p-lg flex flex-col items-center gap-sm hover:opacity-90 transition-opacity active:translate-x-0.5 active:translate-y-0.5`}
                  onClick={() => handleActionClick(action.label)}
                >
                  <span className="material-symbols-outlined text-[24px]" data-icon={action.icon}>{action.icon}</span>
                  <span className="font-label-bold text-label-bold">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <EventCalendar />
          </div>
        </div>
      </main>
    </div>
  );
}
