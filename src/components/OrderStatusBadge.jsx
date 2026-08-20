import React from 'react';

const statusColors = {
  'In Progress': 'bg-primary-container/20 text-on-primary-container',
  'Completed': 'bg-success-container/20 text-on-success-container',
  'Cancelled': 'bg-error-container/20 text-on-error-container',
  'Pending': 'bg-warning-container/20 text-on-warning-container',
  'Shipped': 'bg-info-container/20 text-on-info-container'
};

export default function OrderStatusBadge({ status }) {
  return (
    <div className={`px-3 py-1 rounded-full font-label-pill text-xs ${statusColors[status]}`}>
      {status}
    </div>
  );
}
