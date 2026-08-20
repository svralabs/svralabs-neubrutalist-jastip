import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Auth() {
  const [activeTab, setActiveTab] = useState('masuk');
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    registerName: '',
    registerEmail: '',
    registerPhone: '',
    registerAddress: '',
    registerPassword: ''
  });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(formData.loginEmail)) {
      newErrors.loginEmail = 'Email tidak valid';
    }

    if (!validatePassword(formData.loginPassword)) {
      newErrors.loginPassword = 'Password minimal 8 karakter';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    login(formData.loginEmail);
    navigate('/');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration validation and logic here
    console.log('Register form submitted');
  };

  return (
    <>
      <header className="w-full top-0 sticky bg-primary dark:bg-primary z-50 border-b-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between px-margin py-sm">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
          <h1 className="font-headline-main-mobile text-headline-main-mobile text-on-primary uppercase tracking-tighter" style={{ fontSize: '24px' }}>TITIPIN</h1>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-on-primary">menu</span>
        </div>
      </header>
      <main className="px-margin py-xl flex flex-col items-center">
        <div className="w-full max-w-md mb-lg">
          <h2 className="font-headline-main-mobile text-headline-main-mobile text-on-background mb-xs">Halo!</h2>
          <p className="text-on-surface-variant font-body-md">Titip belanja dari mana saja jadi makin mudah dan aman.</p>
        </div>
        <div className="w-full max-w-md neubrutal-card bg-surface p-md rounded-xl">
          <div className="flex border-2 border-black rounded-lg mb-lg overflow-hidden">
            <button
              className={`flex-1 py-sm font-label-bold text-label-bold ${activeTab === 'masuk' ? 'tab-active' : 'hover:bg-surface-container'} transition-all duration-200`}
              onClick={() => setActiveTab('masuk')}
            >
              Masuk
            </button>
            <button
              className={`flex-1 py-sm font-label-bold text-label-bold ${activeTab === 'daftar' ? 'tab-active' : 'hover:bg-surface-container'} transition-all duration-200`}
              onClick={() => setActiveTab('daftar')}
            >
              Daftar
            </button>
          </div>
          {activeTab === 'masuk' ? (
            <form className="space-y-md" onSubmit={handleLogin}>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Email</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-primary-container/10"
                  placeholder="nama@email.com"
                  type="email"
                  name="loginEmail"
                  value={formData.loginEmail}
                  onChange={handleChange}
                />
                {errors.loginEmail && <p className="text-error text-sm">{errors.loginEmail}</p>}
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Password</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-primary-container/10"
                  placeholder="••••••••"
                  type="password"
                  name="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleChange}
                />
                {errors.loginPassword && <p className="text-error text-sm">{errors.loginPassword}</p>}
                <div className="text-right">
                  <a className="text-secondary font-label-bold text-label-bold hover:underline" href="#">Lupa password?</a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-md bg-primary-container text-on-primary-fixed-variant font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md"
              >
                Masuk
              </button>
              <p className="text-center text-on-surface-variant font-body-md text-sm mt-md">
                Login menggunakan otentikasi email.
              </p>
            </form>
          ) : (
            <form className="space-y-md" onSubmit={handleRegister}>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Nama Lengkap</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="Budi Santoso"
                  type="text"
                  name="registerName"
                  value={formData.registerName}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Email</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="budi@email.com"
                  type="email"
                  name="registerEmail"
                  value={formData.registerEmail}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">No. Telepon</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="08123456789"
                  type="tel"
                  name="registerPhone"
                  value={formData.registerPhone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Alamat</label>
                <textarea
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="Jl. Mawar No. 123, Jakarta"
                  rows="3"
                  name="registerAddress"
                  value={formData.registerAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-sm">
                <label className="font-label-bold text-label-bold block">Password</label>
                <input
                  className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
                  placeholder="Minimal 8 karakter"
                  type="password"
                  name="registerPassword"
                  value={formData.registerPassword}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full py-md bg-secondary-container text-on-secondary-container font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md"
              >
                Daftar
              </button>
            </form>
          )}
        </div>
        <div className="mt-xl w-full max-w-md overflow-hidden rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <img
            className="w-full h-48 object-cover"
            alt="A vibrant neubrutalist illustration of a young person holding multiple shopping bags and a smartphone. The background is a bold yellow and the style features heavy black outlines and flat high-contrast colors, matching a modern Indonesian tech app vibe. The lighting is flat and energetic."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdqRmzikApM6UBVfmlzTFtngXWZiqGVxUR1pXozs4GgRKy0KgroyIxxRnOgOltY888ImuExPQvpdJ8nDHczT9penhlAgshZjoN-BdFAe0V8icjF5eqGKNsEUyO9IMtOH5R460cwCSU3pJwAqoyWNQK1zIM3_t0EayLO_Yl81I4rzZ6EtXWksJfxXjWiYyxrEHOFigMxuHHfrwPKrpoVnJwg12aYhnRPnIBROqK4zHnD6euPntL3K53"
          />
        </div>
      </main>
      <div className="h-xl"></div>
    </>
  );
}
