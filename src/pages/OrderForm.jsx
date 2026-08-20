import { useState } from 'react';

export default function OrderForm() {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    nama: '',
    telepon: '',
    alamat: ''
  });
  const [errors, setErrors] = useState({});

  const product = {
    name: 'Hada Labo Lotion',
    price: 245000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8r_2NJHnVJVk2LuUO5Q35KNiqOJ07xZiM3JOPab8lF7HrmnLAM1Q4UceufyRIt7g0Y_z3clsv7jpFBdmtql64mlNKyXVyqc5HRa5ZGVIDsrmy3FAcVgtpHnYHmJ_1RTRf0qRi5FhVTIT_w08454Nf_gPuQ3YeJWBR3LmnwcHhI-yrPwvSGYP3SZ5vHSEeSYWQra5XPAtt7Nz59QlpdLNCgr2dipNfmoOTHT07DL6LLXtMBw90MXOF'
  };

  const feePercentage = 10;
  const subtotal = product.price * quantity;
  const fee = subtotal * (feePercentage / 100);
  const total = subtotal + fee;

  const handleQuantityChange = (increment) => {
    setQuantity(prev => {
      const newQuantity = prev + increment;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nama.trim()) newErrors.nama = 'Nama penerima wajib diisi';
    if (!formData.telepon.trim()) {
      newErrors.telepon = 'No. telepon wajib diisi';
    } else if (!/^\d+$/.test(formData.telepon)) {
      newErrors.telepon = 'No. telepon harus berupa angka';
    }
    if (!formData.alamat.trim()) newErrors.alamat = 'Alamat wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { ...formData, quantity, total });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-primary border-b-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center px-margin h-16 w-full text-on-primary">
        <button className="mr-4 active:translate-x-[2px] active:translate-y-[2px] transition-all">
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </button>
        <h1 className="font-headline-main-mobile text-[24px] font-extrabold uppercase tracking-tight">New Order</h1>
      </header>

      <main className="mt-24 px-margin space-y-8">
        <section className="neubrutalist-shadow bg-surface border-2 border-on-background rounded-xl p-md flex gap-4 overflow-hidden">
          <div className="w-24 h-24 shrink-0 rounded-lg border-2 border-on-background overflow-hidden">
            <img className="w-full h-full object-cover" alt="Hada Labo Lotion bottle" src={product.image} />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="font-heading-card text-heading-card leading-none mb-1">{product.name}</h2>
              <p className="text-on-surface-variant font-bold">Rp{product.price.toLocaleString()}</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-secondary-container text-on-secondary-container text-xs font-bold border border-on-background rounded-full">Fee {feePercentage}%</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <button
                className="w-8 h-8 rounded-full border-2 border-on-background bg-surface-container-high flex items-center justify-center neubrutalist-shadow-sm active-press"
                onClick={() => handleQuantityChange(-1)}
              >
                <span className="material-symbols-outlined text-sm font-bold">remove</span>
              </button>
              <span className="font-label-bold text-label-bold text-lg">{quantity}</span>
              <button
                className="w-8 h-8 rounded-full border-2 border-on-background bg-primary-container flex items-center justify-center neubrutalist-shadow-sm active-press"
                onClick={() => handleQuantityChange(1)}
              >
                <span className="material-symbols-outlined text-sm font-bold">add</span>
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="font-headline-main-mobile text-[20px] font-extrabold uppercase tracking-tighter">Data Penerima</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant uppercase" htmlFor="nama">Nama Penerima</label>
              <input
                className="bg-surface border-2 border-on-background p-4 rounded-lg neubrutalist-shadow-sm transition-all focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none"
                id="nama"
                placeholder="Masukkan nama lengkap"
                type="text"
                value={formData.nama}
                onChange={handleInputChange}
              />
              {errors.nama && <p className="text-error text-sm mt-1">{errors.nama}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant uppercase" htmlFor="telepon">No. Telepon Penerima</label>
              <input
                className="bg-surface border-2 border-on-background p-4 rounded-lg neubrutalist-shadow-sm transition-all focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none"
                id="telepon"
                placeholder="0812xxxxxx"
                type="tel"
                value={formData.telepon}
                onChange={handleInputChange}
              />
              {errors.telepon && <p className="text-error text-sm mt-1">{errors.telepon}</p>}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-bold text-label-bold text-on-surface-variant uppercase" htmlFor="alamat">Alamat Lengkap</label>
              <textarea
                className="bg-surface border-2 border-on-background p-4 rounded-lg neubrutalist-shadow-sm transition-all focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none"
                id="alamat"
                placeholder="Jl. Anggrek No. 12, Jakarta Selatan..."
                rows="4"
                value={formData.alamat}
                onChange={handleInputChange}
              />
              {errors.alamat && <p className="text-error text-sm mt-1">{errors.alamat}</p>}
            </div>
          </form>
        </section>

        <section className="neubrutalist-shadow bg-surface border-2 border-on-background rounded-xl p-md space-y-4">
          <h4 className="font-label-bold text-label-bold uppercase border-b-2 border-outline-variant pb-2">Rincian Pesanan</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Subtotal Produk</span>
              <span className="font-bold">Rp{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-on-surface-variant">Fee Jastip ({feePercentage}%)</span>
              <span className="font-bold">Rp{fee.toLocaleString()}</span>
            </div>
          </div>
          <div className="bg-surface-container-low border-2 border-dashed border-on-background p-3 rounded-lg flex gap-3">
            <span className="material-symbols-outlined text-primary-container bg-on-background rounded-full p-1 text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <p className="text-[12px] leading-tight font-medium">
              Ongkir & packing akan ditambahkan di invoice final oleh admin setelah barang siap dikirim.
            </p>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 w-full z-50 bg-surface border-t-2 border-on-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)] px-margin py-4 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[12px] font-bold uppercase text-on-surface-variant leading-none">Total Estimasi</span>
          <span className="font-headline-main-mobile text-[24px] font-extrabold text-primary leading-tight">Rp{total.toLocaleString()}</span>
        </div>
        <button
          className="bg-primary-container text-on-primary-container font-label-bold text-[16px] px-8 py-4 rounded-full border-2 border-on-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider flex items-center gap-2"
          onClick={handleSubmit}
          disabled={Object.keys(errors).length > 0 || !formData.nama || !formData.telepon || !formData.alamat}
        >
          Kirim Order
          <span className="material-symbols-outlined">send</span>
        </button>
      </footer>
    </div>
  );
}
