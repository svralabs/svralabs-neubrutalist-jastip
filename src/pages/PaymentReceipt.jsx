import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function PaymentReceipt() {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId } = location.state || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/orders');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-screen-margin">
      <div className="bg-surface clay-card rounded-[32px] p-2xl w-full max-w-md text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-lg">
          <span className="material-symbols-outlined text-primary text-4xl">check_circle</span>
        </div>

        <h1 className="font-headline-md text-headline-md text-primary mb-md">Payment Successful!</h1>

        <p className="font-body-md text-text-dark mb-lg">
          Your order has been placed successfully. Your order ID is:
        </p>

        <div className="bg-surface-variant/30 rounded-input p-xs mb-lg">
          <div className="clay-input-inset rounded-input px-lg py-md bg-surface">
            <span className="font-label-pill text-text-secondary">Order ID</span>
            <p className="font-body-md text-text-dark">{orderId || 'ORD-123456'}</p>
          </div>
        </div>

        <p className="font-body-md text-text-dark mb-lg">
          You will be redirected to your orders page shortly.
        </p>

        <button
          onClick={() => navigate('/orders')}
          className="clay-button bg-primary-container text-on-primary-container font-h2 text-h2 py-xl px-8 rounded-full active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-sm mx-auto"
        >
          <span>View Orders</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}
