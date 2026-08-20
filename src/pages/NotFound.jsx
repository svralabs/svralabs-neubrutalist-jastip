import { Link } from 'react-router-dom';

export default function NotFound() {
  const bentoItems = [
    {
      title: "Dashboard",
      description: "Return to your primary mission control and overview.",
      icon: "dashboard",
      link: "/",
      size: "large",
      bgColor: "bg-primary-container"
    },
    {
      title: "Settings",
      description: "Configure your station",
      icon: "settings",
      link: "/settings",
      size: "small",
      bgColor: "bg-secondary-container"
    },
    {
      title: "API Docs",
      description: "",
      icon: "terminal",
      link: "/docs",
      size: "vertical",
      bgColor: "bg-accent-pink"
    },
    {
      title: "My Profile",
      description: "",
      icon: "account_circle",
      link: "/profile",
      size: "small",
      bgColor: "bg-accent-purple text-white"
    },
    {
      title: "Community",
      description: "Join test of other designers in the void.",
      icon: "groups",
      link: "/community",
      size: "wide",
      bgColor: "bg-surface"
    },
    {
      title: "Help Center",
      description: "Need assistance? Our support team is ready to help.",
      icon: "help",
      link: "/help",
      size: "tall",
      bgColor: "bg-accent-orange text-white"
    }
  ];

  return (
    <main className="flex-grow pt-24 pb-xl px-margin max-w-7xl mx-auto w-full">
      <section className="flex flex-col items-center text-center mb-md">
        <div className="relative inline-block mb-sm">
          <h1 className="font-headline-main text-[80px] md:text-[120px] leading-none text-accent-orange font-black drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] select-none">
            404
          </h1>
          <div className="absolute -top-2 -right-6 bg-accent-pink border-2 border-black px-md py-xs neubrutal-shadow font-label-bold -rotate-12 text-xs md:text-sm">
            LOST IN SPACE
          </div>
        </div>
        <h2 className="font-headline-main text-2xl md:text-4xl max-w-2xl mb-xs uppercase tracking-tight">
          Destination Not Found
        </h2>
        <p className="font-body-md text-on-surface-variant max-w-xl">
          We've recalculated your trajectory. Choose a new destination from the flight deck below.
        </p>
      </section>

      <section className="mt-lg">
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-md md:h-[700px]">
          {bentoItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`md:col-span-${item.size === 'large' ? '8' : item.size === 'small' ? '4' : item.size === 'vertical' ? '3' : item.size === 'wide' ? '5' : '4'} md:row-span-${item.size === 'large' ? '3' : item.size === 'small' ? '1' : item.size === 'vertical' ? '3' : item.size === 'wide' ? '2' : '3'} group ${item.bgColor} border-2 border-black p-lg rounded-xl neubrutal-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none flex flex-col ${item.size === 'small' ? 'justify-center items-center text-center' : 'justify-between'} relative overflow-hidden`}
            >
              <div className={`relative z-10 ${item.size === 'small' ? '' : 'flex flex-col'}`}>
                <span className="material-symbols-outlined text-4xl mb-md">{item.icon}</span>
                <h4 className="font-heading-card text-heading-card">{item.title}</h4>
                {item.description && <p className="font-body-md text-sm">{item.description}</p>}
              </div>
              {item.size === 'large' && (
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-[160px]">rocket</span>
                </div>
              )}
              {item.size === 'wide' && (
                <div className="mt-auto flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-primary"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-accent-pink"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-secondary-container"></div>
                  <div className="flex items-center pl-4 font-label-bold text-xs">+12k joined</div>
                </div>
              )}
              <div className="mt-auto relative z-10">
                <span className="font-label-bold group-hover:underline">Enter →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
