import React from 'react';
import { Link } from 'react-router-dom';
import OrderStatusBadge from '../components/OrderStatusBadge';

const mockOrders = [
  {
    id: 'BK-9901',
    status: 'In Progress',
    date: '2023-05-15',
    items: 2,
    total: 'Rp 250.000'
  },
  {
    id: 'BK-9899',
    status: 'Completed',
    date: '2023-05-10',
    items: 3,
    total: 'Rp 320.000'
  },
  {
    id: 'BK-9898',
    status: 'Cancelled',
    date: '2023-05-05',
    items: 1,
    total: 'Rp 85.000'
  },
  {
    id: 'BK-9897',
    status: 'Completed',
    date: '2023-04-28',
    items: 4,
    total: 'Rp 410.000'
  }
];

export default function OrderHistoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background pt-4 pb-2 px-screen-margin flex justify-between items-center w-full">
        <button className="w-12 h-12 flex items-center justify-center bg-surface clay-card active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Order History</h1>
        <button className="w-12 h-12 flex items-center justify-center bg-surface clay-card active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-primary">search</span>
        </button>
      </header>

      <main className="px-screen-margin mt-6 space-y-grid-gap">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-headline-sm text-headline-sm text-text-dark">Recent Orders</h2>
          <button className="text-primary font-label-pill text-xs uppercase tracking-wider">View All</button>
        </div>

        <div className="space-y-4">
          {mockOrders.map((order) => (
            <Link to={`/order-tracking/${order.id}`} key={order.id} className="block">
              <div className="clay-card p-4 bg-surface flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-on-surface-variant font-label-pill text-xs uppercase tracking-wider">Order #{order.id}</span>
                    <OrderStatusBadge status={order.status} />
                  </div>
                  <p className="text-body-sm text-on-surface-variant">{order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-body-sm text-on-surface-variant">{order.items} items</p>
                  <p className="text-body-lg font-medium text-text-dark">{order.total}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
