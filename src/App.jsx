import React from 'react'

const AVATARS = {
  anita: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAu4MTe-vi2D5Qqx71KBhPO0royHOctitxzdzoRz5MOXxCB1gqk5J8knlrHG4d2wS0JHWHFEu30wAoK6w-71x9MyxDMqwn7kJ2vtu6aIBNmCn3PCdn2Wqj5DKmkyxNgzqJxzsNfJ3trkj1L665_OUVheZVFdXh7do_nhtIQ6DP96Tbil8d8H5VzoH6H_m1c2u_7Sk-jGV8c_RzG8iJXemlvr16K0cZwmWv1As0Wy7mKoGzMsbLhSUoR',
  budi: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC70Q-RGyFyRYZYuDyd7xJ6BL0ndi6_ene3uixHD-ZXcmf3CRf3f9N0gL9ENxpj4x9Aex1IwD2nsVPEV33AV7bhuLsqR4CxZ2aQIp-8poHUuQS87h14Efi4LPHRMOT9dbUQ5ATrfcCRET_WqpMTokg7_cW4xKod4ivb60BHoRfF-owNPKC7kZWpkEv6fpPCJXmlWphCW8cj9R0igMlVAiykwg6q4wkq9wGlfOqZLWBtBQ49ECUnKoMM',
}

const METRICS = [
  { bg: 'bg-secondary-container', label: 'Order Masuk', labelCls: 'text-on-secondary-container', value: '38', sub: 'Orders', big: true },
  { bg: 'bg-accent-pink', label: 'Omset Event', labelCls: 'text-badge-pink-text', value: 'Rp 14.5M', sub: 'Total IDR', big: false },
  { bg: 'bg-accent-yellow', label: 'Sover List', labelCls: 'text-badge-yellow-text', value: '12', sub: 'Pending Items', big: true },
  { bg: 'bg-primary-container', label: 'Lunas', labelCls: 'text-on-primary-container', value: '24', sub: 'Transaksi', big: true },
]

const BARS = [
  { day: 'MON', h: '40%', cls: 'bg-primary' },
  { day: 'TUE', h: '70%', cls: 'bg-secondary' },
  { day: 'WED', h: '55%', cls: 'bg-accent-yellow' },
  { day: 'THU', h: '90%', cls: 'bg-primary' },
  { day: 'FRI', h: '65%', cls: 'bg-secondary' },
  { day: 'SAT', h: '80%', cls: 'bg-accent-yellow' },
  { day: 'SUN', h: '45%', cls: 'bg-primary' },
]

export default function App() {
  return (
    <div className="text-on-surface antialiased pb-32">
      {/* TopAppBar */}
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
        {/* Title */}
        <section>
          <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Dashboard Admin</h2>
          <p className="font-body-md text-text-secondary">Overview performa jastip hari ini.</p>
        </section>

        {/* Metrics */}
        <section className="grid grid-cols-2 gap-md">
          {METRICS.map((m) => (
            <div key={m.label} className={`neubrutalist-border ${m.bg} p-lg flex flex-col justify-between min-h-[120px] rounded-lg`}>
              <span className={`font-label-caps text-label-caps uppercase ${m.labelCls} opacity-80`}>{m.label}</span>
              <div>
                <div className={m.big ? 'font-headline-lg text-headline-lg' : 'font-headline-md text-headline-md leading-tight'}>{m.value}</div>
                <div className="font-label-bold text-label-bold mt-1">{m.sub}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Top Customers */}
        <section className="neubrutalist-border bg-surface rounded-xl p-lg">
          <div className="flex items-center justify-between mb-lg">
            <h3 className="font-headline-md text-headline-md">Top Customers</h3>
            <span className="material-symbols-outlined text-accent-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </div>
          <div className="space-y-md">
            <div className="flex items-center justify-between p-md neubrutalist-border bg-surface-container-low rounded-lg">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 neubrutalist-border rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${AVATARS.anita}')` }} />
                <div>
                  <div className="font-headline-md text-[1rem]">Anita S.</div>
                  <div className="font-body-sm text-text-secondary">12 Orders</div>
                </div>
              </div>
              <span className="neubrutalist-border bg-badge-purple-bg text-badge-purple-text font-label-caps text-label-caps px-sm py-1 rounded-full">VIP</span>
            </div>
            <div className="flex items-center justify-between p-md neubrutalist-border bg-surface-container-low rounded-lg">
              <div className="flex items-center gap-md">
                <div className="w-10 h-10 neubrutalist-border rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${AVATARS.budi}')` }} />
                <div>
                  <div className="font-headline-md text-[1rem]">Budi R.</div>
                  <div className="font-body-sm text-text-secondary">8 Orders</div>
                </div>
              </div>
              <span className="neubrutalist-border bg-badge-green-bg text-badge-green-text font-label-caps text-label-caps px-sm py-1 rounded-full">ACTIVE</span>
            </div>
          </div>
        </section>

        {/* Weekly Performance */}
        <section className="neubrutalist-border bg-surface rounded-xl p-lg">
          <h3 className="font-headline-md text-headline-md mb-lg">Weekly Performance</h3>
          <div className="h-40 flex items-end justify-around gap-2 px-sm">
            {BARS.map((b) => (
              <div key={b.day} className="flex flex-col items-center gap-2 w-full">
                <div className={`w-full ${b.cls} border border-black rounded-t-sm transition-all hover:scale-x-105`} style={{ height: b.h }} />
                <span className="font-label-caps text-[10px]">{b.day}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="neubrutalist-border bg-surface-container-highest rounded-xl p-lg">
          <h3 className="font-headline-md text-headline-md mb-md">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-sm">
            <button className="bg-surface neubrutalist-border p-md rounded-lg flex items-center gap-2 hover:bg-surface-container active:translate-x-0.5 active:translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-primary">add_box</span>
              <span className="font-label-bold">New Item</span>
            </button>
            <button className="bg-surface neubrutalist-border p-md rounded-lg flex items-center gap-2 hover:bg-surface-container active:translate-x-0.5 active:translate-y-0.5 transition-all">
              <span className="material-symbols-outlined text-secondary">print</span>
              <span className="font-label-bold">Labels</span>
            </button>
          </div>
        </section>
      </main>

      {/* BottomNav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-lg py-sm bg-surface mb-4 mx-auto w-[90%] max-w-md border border-black rounded-full neubrutalist-shadow">
        <div className="bg-primary-container text-on-primary-container rounded-full p-2 border border-black transition-all hover:scale-110 active:scale-95">
          <span className="material-symbols-outlined block" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        </div>
        {['calendar_today', 'receipt_long', 'person'].map((icon) => (
          <div key={icon} className="text-on-surface-variant p-2 transition-all hover:scale-110 active:scale-95">
            <span className="material-symbols-outlined block">{icon}</span>
          </div>
        ))}
      </nav>
    </div>
  )
}
