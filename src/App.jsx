import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CancellationOutOfStockResolution from './pages/CancellationOutOfStockResolution';
import AdminTeamLoginJastipControlCenter from './pages/AdminTeamLoginJastipControlCenter';
import AdminDashboardOverview from './pages/AdminDashboardOverview';
import PaymentReceiptUploadScreen from './pages/PaymentReceiptUploadScreen';
import OrderHistoryTracking from './pages/OrderHistoryTracking';
import AdminEventManagementScreen from './pages/AdminEventManagementScreen';
import KalenderEventJastip from './pages/KalenderEventJastip';
import CustomerHomeJastiphub from './pages/CustomerHomeJastiphub';
import AdminCustomerManagement from './pages/AdminCustomerManagement';
import RingkasanOrderCheckout from './pages/RingkasanOrderCheckout';
import AuthenticationScreen from './pages/AuthenticationScreen';
import ProductDetailOrderForm from './pages/ProductDetailOrderForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CancellationOutOfStockResolution />} />
<Route path='/cancellation-out-of-stock-resolution' element={<CancellationOutOfStockResolution />} />
<Route path='/admin-team-login-jastip-control-center' element={<AdminTeamLoginJastipControlCenter />} />
<Route path='/admin-dashboard-overview' element={<AdminDashboardOverview />} />
<Route path='/payment-receipt-upload-screen' element={<PaymentReceiptUploadScreen />} />
<Route path='/order-history-tracking' element={<OrderHistoryTracking />} />
<Route path='/admin-event-management-screen' element={<AdminEventManagementScreen />} />
<Route path='/kalender-event-jastip' element={<KalenderEventJastip />} />
<Route path='/customer-home-jastiphub' element={<CustomerHomeJastiphub />} />
<Route path='/admin-customer-management' element={<AdminCustomerManagement />} />
<Route path='/ringkasan-order-checkout' element={<RingkasanOrderCheckout />} />
<Route path='/authentication-screen' element={<AuthenticationScreen />} />
<Route path='/product-detail-order-form' element={<ProductDetailOrderForm />} />
        <Route path="*" element={<CancellationOutOfStockResolution />} />
      </Routes>
    </BrowserRouter>
  );
}
