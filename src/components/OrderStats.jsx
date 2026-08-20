import {Globe as ArrowUpRight, ShoppingBag, Globe as Package, Globe as Truck, Globe as CheckCircle} from 'lucide-react';

export default function OrderStats() {
  const stats = [
    { icon: ShoppingBag, value: '12', label: 'Total Orders', color: 'text-primary' },
    { icon: Package, value: '3', label: 'Processing', color: 'text-accent-yellow' },
    { icon: Truck, value: '5', label: 'Shipped', color: 'text-accent-blue' },
    { icon: CheckCircle, value: '4', label: 'Delivered', color: 'text-accent-green' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-lg">
      {stats.map((stat, index) => (
        <div key={index} className="bg-surface border border-border-black rounded-xl p-lg flex flex-col gap-sm">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color} bg-opacity-10`}>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </div>
          <div>
            <p className="font-headline-lg text-headline-lg font-bold">{stat.value}</p>
            <p className="font-body-sm text-body-sm text-border-black/80">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
