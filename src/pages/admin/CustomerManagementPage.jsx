import React, { useState } from 'react';
import DataTable from '../../components/admin/DataTable';

const CustomerManagementPage = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Anita S.', email: 'anita@example.com', orders: 12, status: 'VIP' },
    { id: 2, name: 'Budi R.', email: 'budi@example.com', orders: 8, status: 'ACTIVE' },
    { id: 3, name: 'Citra L.', email: 'citra@example.com', orders: 5, status: 'NEW' },
    { id: 4, name: 'Dedi P.', email: 'dedi@example.com', orders: 3, status: 'INACTIVE' },
  ]);

  const columns = [
    { header: 'Name', accessor: 'name' },
    { header: 'Email', accessor: 'email' },
    { header: 'Orders', accessor: 'orders' },
    { header: 'Status', accessor: 'status' },
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
          <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Customer Management</h2>
          <p className="font-body-md text-text-secondary">Manage all customer data and statuses.</p>
        </section>

        <section className="neubrutalist-border bg-surface rounded-xl p-lg">
          <DataTable
            data={customers}
            columns={columns}
            title="Customer List"
            searchPlaceholder="Search customers..."
          />
        </section>
      </main>
    </div>
  );
};

export default CustomerManagementPage;
