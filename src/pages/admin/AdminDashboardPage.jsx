import React from 'react';

const AdminDashboardPage = () => {
  const metrics = [
    { title: 'Order Masuk', value: '38', label: 'Orders', bgColor: 'bg-secondary-container', textColor: 'text-on-secondary-container' },
    { title: 'Omset Event', value: 'Rp 14.5M', label: 'Total IDR', bgColor: 'bg-accent-pink', textColor: 'text-badge-pink-text' },
    { title: 'Sover List', value: '12', label: 'Pending Items', bgColor: 'bg-accent-yellow', textColor: 'text-badge-yellow-text' },
    { title: 'Lunas', value: '24', label: 'Transaksi', bgColor: 'bg-primary-container', textColor: 'text-on-primary-container' },
  ];

  const topCustomers = [
    {
      name: 'Anita S.',
      orders: '12 Orders',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu4MTe-vi2D5Qqx71KBhPO0royHOctitxzdzoRz5MOXxCB1gqk5J8knlrHG4d2wS0JHWHFEu30wAoK6w-71x9MyxDMqwn7kJ2vtu6aIBNmCn3PCdn2Wqj5DKmkyxNgzqJxzsNfJ3trkj1L665_OUVheZVFdXh7do_nhtIQ6DP96Tbil8d8H5VzoH6H_m1c2u_7Sk-jGV8c_RzG8iJXemlvr16K0cZwmWv1As0Wy7mKoGzMsbLhSUoR',
      badge: { text: 'VIP', bgColor: 'bg-badge-purple-bg', textColor: 'text-badge-purple-text' }
    },
    {
      name: 'Budi R.',
      orders: '8 Orders',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC70Q-RGyFyRYZYuDyd7xJ6BL0ndi6_ene3uixHD-ZXcmf3CRf3f9N0gL9ENxpj4x9Aex1IwD2nsVPEV33AV7bhuLsqR4CxZ2aQIp-8poHUuQS87h14Efi4LPHRMOT9dbUQ5ATrfcCRET_WqpMTokg7_cW4xKod4ivb60BHoRfF-owNPKC7kZWpkEv6fpPCJXmlWphCW8cj9R0igMlVAiykwg6q4wkq9wGlfOqZLWBtBQ49ECUnKoMM',
      badge: { text: 'ACTIVE', bgColor: 'bg-badge-green-bg', textColor: 'text-badge-green-text' }
    },
  ];

  const weeklyPerformance = [
    { day: 'MON', height: '40%' },
    { day: 'TUE', height: '70%' },
    { day: 'WED', height: '55%' },
    { day: 'THU', height: '90%' },
    { day: 'FRI', height: '65%' },
    { day: 'SAT', height: '80%' },
    { day: 'SUN', height: '45%' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <header className="w-full sticky top-0 bg-surface z-50 flex items-center justify-between px-lg py-md border-b border-black">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary font-bold">shopping_bag</span>
          <h1 className="font-headline-lg text-headline-lg font-black text-primary">JastipHub</h1>
        </div>
        <button className="neubrutalist-border p-2 rounded-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="px-lg py-xl space-y-xl">
        <section>
          <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Dashboard Admin</h2>
          <p className="font-body-md text-text-secondary">Overview performa jastip hari ini.</p>
        </section>

        <section className="grid grid-cols-2 gap-md">
          {metrics.map((metric, index) => (
            <div key={index} className={`neubrutalist-border ${metric.bgColor} p-lg flex flex-col justify-between min-h-[120px] rounded-lg`}>
              <span className={`font-label-caps text-label-caps uppercase ${metric.textColor} opacity-80`}>{metric.title}</span>
              <div>
                <div className="font-headline-lg text-headline-lg">{metric.value}</div>
                <div className="font-label-bold text-label-bold mt-1">{metric.label}</div>
              </div>
            </div>
          ))}
        </section>

        <section className="neubrutalist-border bg-surface rounded-xl p-lg">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-headline-md text-headline-md">Top Customers</h3>
            <span className="material-symbols-outlined text-accent-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </div>
          <div className="space-y-md">
            {topCustomers.map((customer, index) => (
              <div key={index} className="flex items-center justify-between p-md neubrutalist-border bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-md">
                  <div
                    className="w-10 h-10 neubrutalist-border rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${customer.imageUrl}')` }}
                  />
                  <div>
                    <div className="font-headline-md text-[1rem]">{customer.name}</div>
                    <div className="font-body-sm text-text-secondary">{customer.orders}</div>
                  </div>
                </div>
                <span className={`neubrutalist-border ${customer.badge.bgColor} ${customer.badge.textColor} font-label-caps text-label-caps px-sm py-1 rounded-full`}>
                  {customer.badge.text}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="neubrutalist-border bg-surface rounded-xl p-lg">
          <h3 className="font-headline-md text-headline-md mb-lg">Weekly Performance</h3>
          <div className="h-40 flex items-end justify-around gap-2 px-sm">
            {weeklyPerformance.map((day, index) => (
              <div key={index} className="flex flex-col items-center gap-2 w-full">
                <div
                  className={`w-full ${index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-accent-yellow'} border border-black rounded-t-sm transition-all hover:scale-x-105`}
                  style={{ height: day.height }}
                />
                <span className="font-label-caps text-[10px]">{day.day}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
