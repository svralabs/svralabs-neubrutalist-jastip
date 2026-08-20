import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutStepper from '../components/CheckoutStepper';

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    phone: '',
    paymentMethod: '',
    receipt: null
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const steps = ['Shipping', 'Payment', 'Review'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg') && file.size <= 2 * 1024 * 1024) {
      setFormData(prev => ({ ...prev, receipt: file }));
      setErrors(prev => ({ ...prev, receipt: '' }));
    } else {
      setErrors(prev => ({ ...prev, receipt: 'File must be PNG/JPG and less than 2MB' }));
    }
  };

  const validateStep = () => {
    const newErrors = {};
    if (currentStep === 0) {
      if (!formData.nama) newErrors.nama = 'Nama is required';
      if (!formData.alamat) newErrors.alamat = 'Alamat is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (currentStep === 1) {
      if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    } else if (currentStep === 2) {
      if (!formData.receipt) newErrors.receipt = 'Receipt is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        // Submit form
        navigate('/payment-receipt', { state: { orderId: 'ORD-123456' } });
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <section className="space-y-sm">
            <h2 className="font-h2 text-h2 text-text-dark px-xs">Data Penerima</h2>

            <div className="bg-surface clay-card rounded-input p-xs">
              <div className="clay-input-inset rounded-input px-lg py-md bg-surface">
                <label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="nama">Nama Penerima</label>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md placeholder:text-outline-variant"
                  id="nama"
                  name="nama"
                  placeholder="Masukkan nama lengkap"
                  type="text"
                  value={formData.nama}
                  onChange={handleChange}
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                />
                {errors.nama && <p className="text-error text-xs mt-1">{errors.nama}</p>}
              </div>
            </div>

            <div className="bg-surface clay-card rounded-input p-xs">
              <div className="clay-input-inset rounded-input px-lg py-md bg-surface">
                <label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="alamat">Alamat Lengkap</label>
                <textarea
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md placeholder:text-outline-variant resize-none"
                  id="alamat"
                  name="alamat"
                  placeholder="Masukkan alamat pengiriman detail..."
                  rows="3"
                  value={formData.alamat}
                  onChange={handleChange}
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                />
                {errors.alamat && <p className="text-error text-xs mt-1">{errors.alamat}</p>}
              </div>
            </div>

            <div className="bg-surface clay-card rounded-input p-xs">
              <div className="clay-input-inset rounded-input px-lg py-md bg-surface">
                <label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="phone">No. Telepon</label>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md placeholder:text-outline-variant"
                  id="phone"
                  name="phone"
                  placeholder="0812 XXXX XXXX"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                />
                {errors.phone && <p className="text-error text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>
          </section>
        );
      case 1:
        return (
          <section className="space-y-sm">
            <h2 className="font-h2 text-h2 text-text-dark px-xs">Payment Method</h2>

            <div className="bg-surface clay-card rounded-input p-xs">
              <div className="clay-input-inset rounded-input px-lg py-md bg-surface">
                <label className="block text-xs font-label-pill text-text-secondary mb-1">Select Payment Method</label>
                <select
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="bank_transfer">Bank Transfer</option>
                  <option value="credit_card">Credit Card</option>
                  <option value="e_wallet">E-Wallet</option>
                </select>
                {errors.paymentMethod && <p className="text-error text-xs mt-1">{errors.paymentMethod}</p>}
              </div>
            </div>
          </section>
        );
      case 2:
        return (
          <section className="space-y-sm">
            <h2 className="font-h2 text-h2 text-text-dark px-xs">Upload Payment Receipt</h2>

            <div className="bg-surface clay-card rounded-input p-xs">
              <div className="clay-input-inset rounded-input px-lg py-md bg-surface">
                <label className="block text-xs font-label-pill text-text-secondary mb-1" htmlFor="receipt">Receipt Image</label>
                <input
                  className="w-full bg-transparent border-none focus:ring-0 p-0 text-text-dark font-body-md"
                  id="receipt"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                />
                {errors.receipt && <p className="text-error text-xs mt-1">{errors.receipt}</p>}
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="w-full top-0 sticky z-40 bg-background flex items-center justify-between px-screen-margin py-md shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <button className="w-11 h-11 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" aria-label="Go Back">
          <span className="material-symbols-outlined text-primary text-2xl">arrow_back</span>
        </button>
        <h1 className="font-headline-md text-headline-md-mobile text-primary">Checkout</h1>
        <button className="w-11 h-11 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity active:scale-95 transition-transform duration-200" aria-label="Help">
          <span className="material-symbols-outlined text-primary text-2xl">help</span>
        </button>
      </header>

      <main className="px-screen-margin mt-lg space-y-grid-gap">
        <CheckoutStepper steps={steps} currentStep={currentStep} />

        {renderStepContent()}

        <section className="mt-lg">
          <div className="bg-accent-blue/40 clay-card rounded-[32px] p-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/30 blur-3xl rounded-full -mr-16 -mt-16"></div>

            <h3 className="font-h2 text-h2 text-on-primary-container mb-lg">Order Overview</h3>

            <div className="space-y-md relative z-10">
              <div className="flex justify-between items-center text-on-primary-container/80">
                <span className="font-body-md">Product Total</span>
                <span className="font-label-pill">Rp 450.000</span>
              </div>
              <div className="flex justify-between items-center text-on-primary-container/80">
                <span className="font-body-md">Admin Fee</span>
                <span className="font-label-pill">Rp 2.500</span>
              </div>
              <div className="flex justify-between items-center text-on-primary-container/80 pb-md border-b border-on-primary-container/10">
                <span className="font-body-md">Shipping</span>
                <span className="font-label-pill">Rp 15.000</span>
              </div>
              <div className="flex justify-between items-center pt-md">
                <span className="font-h2 text-h2 text-on-primary-container">Grand Total</span>
                <span className="font-h1 text-h1 text-primary">Rp 467.500</span>
              </div>
            </div>
          </div>
        </section>

        <div className="pt-lg flex justify-between">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="clay-button bg-surface text-text-dark font-h2 text-h2 py-xl px-8 rounded-full active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-sm"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              <span>Back</span>
            </button>
          )}
          <button
            onClick={handleNext}
            className="clay-button bg-primary-container text-on-primary-container font-h2 text-h2 py-xl px-8 rounded-full active:scale-95 transition-all duration-300 ease-out flex items-center justify-center gap-sm"
          >
            <span>{currentStep === steps.length - 1 ? 'Submit Order' : 'Next'}</span>
            <span className="material-symbols-outlined">{currentStep === steps.length - 1 ? 'send' : 'arrow_forward'}</span>
          </button>
        </div>
      </main>

      <nav className="fixed bottom-4 left-4 right-4 rounded-full z-50 h-16 bg-text-dark flex justify-around items-center px-4 w-[calc(100%-32px)] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        <button className="flex items-center justify-center text-surface-variant/60 w-12 h-12 hover:scale-110 active:scale-90 transition-all">
          <span className="material-symbols-outlined">home</span>
        </button>
        <button className="flex items-center justify-center bg-primary-container text-on-primary-container rounded-full w-12 h-12 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:scale-110 active:scale-90 transition-all">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
        </button>
        <button className="flex items-center justify-center text-surface-variant/60 w-12 h-12 hover:scale-110 active:scale-90 transition-all">
          <span className="material-symbols-outlined">receipt_long</span>
        </button>
      </nav>
    </div>
  );
}
