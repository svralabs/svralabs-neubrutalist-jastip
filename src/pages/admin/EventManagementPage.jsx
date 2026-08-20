import React, { useState } from 'react';
import DataTable from '../../components/admin/DataTable';

const EventManagementPage = () => {
  const [events, setEvents] = useState([
    { id: 1, name: 'Birthday Party', date: '2023-12-15', participants: 50, status: 'UPCOMING' },
    { id: 2, name: 'Corporate Event', date: '2023-11-20', participants: 100, status: 'COMPLETED' },
    { id: 3, name: 'Wedding Reception', date: '2023-12-25', participants: 200, status: 'UPCOMING' },
    { id: 4, name: 'Anniversary', date: '2023-10-10', participants: 30, status: 'CANCELLED' },
  ]);

  const columns = [
    { header: 'Event Name', accessor: 'name' },
    { header: 'Date', accessor: 'date' },
    { header: 'Participants', accessor: 'participants' },
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
          <h2 className="font-headline-lg text-headline-lg text-text-primary tracking-tight">Event Management</h2>
          <p className="font-body-md text-text-secondary">Manage all event data and statuses.</p>
        </section>

        <section className="neubrutalist-border bg-surface rounded-xl p-lg">
          <DataTable
            data={events}
            columns={columns}
            title="Event List"
            searchPlaceholder="Search events..."
          />
        </section>
      </main>
    </div>
  );
};

export default EventManagementPage;
