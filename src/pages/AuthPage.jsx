import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login, register: registerUser } = useAuth();

  const onSubmit = async (data) => {
    if (activeTab === 'login') {
      await login(data.email, data.password);
    } else {
      await registerUser(data.email, data.password);
    }
    navigate('/dashboard');
  };

  return (
    <main className="w-full max-w-[400px] flex flex-col gap-2xl">
      <header className="flex flex-col items-center text-center gap-md">
        <div className="w-16 h-16 bg-accent-yellow border border-border-black rounded-xl flex items-center justify-center transform -rotate-3">
          <span className="material-symbols-outlined text-[40px] text-border-black">shopping_bag</span>
        </div>
        <div className="mt-sm">
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">JastipBuddy</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-xs">Selamat Datang di JastipApp</p>
        </div>
      </header>

      <div className="flex p-xs bg-surface border border-border-black rounded-full w-full">
        <button
          className={`flex-1 py-sm font-label-bold text-label-bold rounded-full border border-border-black transition-all ${activeTab === 'login' ? 'bg-primary-container text-on-primary-container' : 'border-transparent text-on-surface-variant hover:bg-surface-container'}`}
          onClick={() => setActiveTab('login')}
        >
          Masuk
        </button>
        <button
          className={`flex-1 py-sm font-label-bold text-label-bold rounded-full border border-transparent text-on-surface-variant hover:bg-surface-container transition-all ${activeTab === 'register' ? 'bg-primary-container text-on-primary-container' : ''}`}
          onClick={() => setActiveTab('register')}
        >
          Daftar
        </button>
      </div>

      <form className="flex flex-col gap-lg" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-xs">
          <label className="font-label-bold text-label-bold text-on-surface-variant px-xs" htmlFor="email">Email</label>
          <input
            className="w-full px-lg py-md bg-white border border-border-black rounded-xl font-body-md text-body-md placeholder:text-outline focus:ring-0"
            id="email"
            placeholder="nama@email.com"
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-error text-xs px-xs">Email wajib diisi</span>}
        </div>

        <div className="flex flex-col gap-xs">
          <label className="font-label-bold text-label-bold text-on-surface-variant px-xs" htmlFor="password">Kata Sandi</label>
          <div className="relative">
            <input
              className="w-full px-lg py-md bg-white border border-border-black rounded-xl font-body-md text-body-md placeholder:text-outline focus:ring-0"
              id="password"
              placeholder="••••••••"
              type="password"
              {...register('password', { required: true })}
            />
            <button className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>
          {errors.password && <span className="text-error text-xs px-xs">Kata sandi wajib diisi</span>}
          {activeTab === 'login' && (
            <div className="flex justify-end mt-xs">
              <button className="font-label-bold text-label-bold text-secondary hover:underline" type="button">
                Lupa kata sandi?
              </button>
            </div>
          )}
        </div>

        <button
          className="w-full py-lg mt-sm bg-secondary-container text-on-secondary-container font-headline-md text-headline-md font-bold rounded-full border border-border-black active:translate-x-[2px] active:translate-y-[2px] transition-all"
          type="submit"
        >
          {activeTab === 'login' ? 'Masuk Sekarang' : 'Daftar Sekarang'}
        </button>
      </form>

      <div className="flex items-center gap-md">
        <div className="flex-1 h-[1px] bg-outline-variant"></div>
        <span className="font-label-caps text-label-caps text-outline">ATAU</span>
        <div className="flex-1 h-[1px] bg-outline-variant"></div>
      </div>

      <footer className="text-center">
        <p className="font-body-md text-body-md text-on-surface-variant">
          {activeTab === 'login' ? 'Belum punya akun?' : 'Sudah punya akun?'}
          <button
            className="font-label-bold text-label-bold text-primary hover:underline ml-xs"
            type="button"
            onClick={() => setActiveTab(activeTab === 'login' ? 'register' : 'login')}
          >
            {activeTab === 'login' ? 'Daftar' : 'Masuk'}
          </button>
        </p>
      </footer>
    </main>
  );
}
