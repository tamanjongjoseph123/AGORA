import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import QRCode from 'qrcode.react';
import { Send } from 'lucide-react';

const registerSchema = z.object({
  category: z.enum(['player', 'fan', 'sponsor', 'seller'], {
    errorMap: () => ({ message: 'Please select a category' })
  }),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  team: z.string().optional()
});

type RegisterForm = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterForm) => {
    const id = `AGORA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setRegistrationId(id);
    console.log('Registration Data:', { ...data, registrationId: id });
    
    // Store in localStorage for demo
    const registrations = JSON.parse(localStorage.getItem('agoraRegistrations') || '[]');
    registrations.push({ ...data, registrationId: id, date: new Date().toISOString() });
    localStorage.setItem('agoraRegistrations', JSON.stringify(registrations));
    
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <h1 className="text-5xl font-bold mb-4">{t('circuit.registration_title')}</h1>
          <p className="text-xl opacity-90">Join the competition and register today</p>
        </div>
      </section>

      {/* Registration Section */}
      <section className="section-padding">
        <div className="container-base max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* QR Code Section */}
            <div className="card-base p-8 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-6 text-center gradient-text">
                {t('circuit.registration_qr')}
              </h2>
              <div className="bg-white p-6 rounded-lg border-4 border-agora-light mb-6">
                <QRCode
                  value={`${window.location.origin}/circuit/qr`}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-center text-gray-600 text-sm">
                Scan this QR code with your phone to register quickly
              </p>
            </div>

            {/* Registration Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 gradient-text">
                {t('circuit.registration_manual')}
              </h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                  <p className="font-bold">{t('circuit.success')}</p>
                  <p className="text-sm mt-2">
                    {t('circuit.success_message')}: <span className="font-bold">{registrationId}</span>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    {t('circuit.category')}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'player', label: t('circuit.category_player') },
                      { value: 'fan', label: t('circuit.category_fan') },
                      { value: 'sponsor', label: t('circuit.category_sponsor') },
                      { value: 'seller', label: t('circuit.category_seller') }
                    ].map((cat) => (
                      <label key={cat.value} className="flex items-center cursor-pointer">
                        <input
                          {...register('category')}
                          type="radio"
                          value={cat.value}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="ml-2 text-sm font-medium text-gray-700">{cat.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.category && (
                    <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>
                  )}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {t('circuit.name')}
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="Full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {t('circuit.email')}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    {t('circuit.phone')}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="+1 (234) 567-890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Team (optional, for players) */}
                {selectedCategory === 'player' && (
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      {t('circuit.team')}
                    </label>
                    <input
                      {...register('team')}
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                      placeholder="Your team name"
                    />
                  </div>
                )}

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  <Send size={20} />
                  {t('circuit.submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Registration Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-purple">⚽ Player</h3>
              <p className="text-gray-600 text-sm">Compete on behalf of your team</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-purple">👥 Fan</h3>
              <p className="text-gray-600 text-sm">Watch and support the action</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-purple">🏢 Sponsor</h3>
              <p className="text-gray-600 text-sm">Partner with AGORA Events</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-purple">🛍️ Seller</h3>
              <p className="text-gray-600 text-sm">Sell merchandise and goods</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
