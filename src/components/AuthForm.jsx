import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthForm({ activeTab }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.password) {
      newErrors.password = 'Kata sandi wajib diisi';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Kata sandi minimal 8 karakter';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setApiError('');

    try {
      const endpoint = activeTab === 'login' ? '/api/auth/login' : '/api/auth/register';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Terjadi kesalahan');
      }

      navigate('/dashboard');
    } catch (error) {
      setApiError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-lg" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-xs">
        <label className="font-label-bold text-label-bold text-on-surface-variant px-xs" htmlFor="email">Email</label>
        <input
          className={`w-full px-lg py-md bg-white border border-border-black rounded-xl font-body-md text-body-md placeholder:text-outline focus:ring-0 ${
            errors.email ? 'border-error' : ''
          }`}
          id="email"
          name="email"
          placeholder="nama@email.com"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-error px-xs text-sm">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-xs">
        <label className="font-label-bold text-label-bold text-on-surface-variant px-xs" htmlFor="password">Kata Sandi</label>
        <div className="relative">
          <input
            className={`w-full px-lg py-md bg-white border border-border-black rounded-xl font-body-md text-body-md placeholder:text-outline focus:ring-0 ${
              errors.password ? 'border-error' : ''
            }`}
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button className="absolute right-md top-1/2 -translate-y-1/2 text-on-surface-variant" type="button">
            <span className="material-symbols-outlined text-[20px]">visibility</span>
          </button>
        </div>
        {errors.password && <p className="text-error px-xs text-sm">{errors.password}</p>}
        <div className="flex justify-end mt-xs">
          <a className="font-label-bold text-label-bold text-secondary hover:underline" href="#">Lupa kata sandi?</a>
        </div>
      </div>

      {apiError && <p className="text-error px-xs text-sm">{apiError}</p>}

      <button
        className="w-full py-lg mt-sm bg-secondary-container text-on-secondary-container font-headline-md text-headline-md font-bold rounded-full border border-border-black active:translate-x-[2px] active:translate-y-[2px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-xs">
            <span className="material-symbols-outlined animate-spin">progress_activity</span>
            {activeTab === 'login' ? 'Memproses...' : 'Mendaftar...'}
          </span>
        ) : (
          activeTab === 'login' ? 'Masuk Sekarang' : 'Daftar Sekarang'
        )}
      </button>
    </form>
  );
}
