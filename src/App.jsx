import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import AuthPage from './pages/AuthPage';
import CustomerHomePage from './pages/CustomerHomePage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'AuthPage' },
    { path: '/customerhomepage', label: 'CustomerHomePage' },
    { path: '/ordertrackingpage', label: 'OrderTrackingPage' },
    { path: '/orderhistorypage', label: 'OrderHistoryPage' },
    { path: '/shoppingcartpage', label: 'ShoppingCartPage' }
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 overflow-x-auto max-w-[95vw]">
      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest px-2 hidden sm:inline">Screens:</span>
      {navs.map((n) => {
        const active = loc.pathname === n.path;
        return (
          <Link
            key={n.path}
            to={n.path}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <BrowserRouter>
              <ScreenBar />
              <div className="pt-10 min-h-screen">
                <Routes>
                  <Route path='/' element={<AuthPage />} />
        <Route path='/customerhomepage' element={<CustomerHomePage />} />
        <Route path='/ordertrackingpage' element={<OrderTrackingPage />} />
        <Route path='/orderhistorypage' element={<OrderHistoryPage />} />
        <Route path='/shoppingcartpage' element={<ShoppingCartPage />} />
                  <Route path="*" element={<AuthPage />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
