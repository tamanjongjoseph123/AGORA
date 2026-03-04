import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import QRCode from 'qrcode.react';
import { Smartphone, Users, Trophy, Building, ShoppingBag } from 'lucide-react';

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

export function QRLandingPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState<string>('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = (data: RegisterForm) => {
    const id = `AGORA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    setRegistrationId(id);
    console.log('QR Registration Data:', { ...data, registrationId: id });
    
    // Store in localStorage for demo
    const registrations = JSON.parse(localStorage.getItem('agoraRegistrations') || '[]');
    registrations.push({ ...data, registrationId: id, date: new Date().toISOString() });
    localStorage.setItem('agoraRegistrations', JSON.stringify(registrations));
    
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
      navigate('/circuit');
    }, 5000);
  };

  const categories = [
    {
      value: 'player',
      title: 'Player',
      description: 'Register as a player for your university team',
      icon: <Trophy className="text-agora-purple" size={32} />,
      color: 'from-agora-purple to-agora-orange'
    },
    {
      value: 'fan',
      title: 'Fan',
      description: 'Join the community and support your team',
      icon: <Users className="text-agora-orange" size={32} />,
      color: 'from-agora-orange to-agora-red'
    },
    {
      value: 'sponsor',
      title: 'Sponsor',
      description: 'Partner with us and support youth talent',
      icon: <Building className="text-agora-purple" size={32} />,
      color: 'from-agora-purple to-agora-red'
    },
    {
      value: 'seller',
      title: 'Seller',
      description: 'Sell merchandise and products at events',
      icon: <ShoppingBag className="text-agora-orange" size={32} />,
      color: 'from-agora-orange to-agora-purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-agora-purple/10 to-agora-orange/10">
      {/* Header */}
      <div className="bg-agora-gradient text-white p-6">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Trophy size={32} className="mr-2" />
            <h1 className="text-2xl font-bold">AGORA Circuit</h1>
          </div>
          <p className="text-sm opacity-90">Welcome to the University Football Circuit</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto p-6">
        {!selectedCategory ? (
          /* Category Selection */
          <div>
            <h2 className="text-xl font-bold mb-6 text-center text-agora-dark">
              Who are you?
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Select your category to continue with registration
            </p>
            
            <div className="space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className="w-full bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-agora-purple"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${cat.color} text-white`}>
                      {cat.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg text-agora-dark">{cat.title}</h3>
                      <p className="text-sm text-gray-600">{cat.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/circuit')}
                className="text-agora-purple font-semibold text-sm"
              >
                ← Back to Circuit Website
              </button>
            </div>
          </div>
        ) : (
          /* Registration Form */
          <div>
            <button
              onClick={() => setSelectedCategory('')}
              className="mb-6 text-agora-purple font-semibold text-sm flex items-center gap-1"
            >
              ← Change Category
            </button>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${categories.find(c => c.value === selectedCategory)?.color} text-white`}>
                  {categories.find(c => c.value === selectedCategory)?.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-agora-dark">
                    Register as {categories.find(c => c.value === selectedCategory)?.title}
                  </h2>
                  <p className="text-sm text-gray-600">Fill in your details to join</p>
                </div>
              </div>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                  <p className="font-bold">Registration Successful!</p>
                  <p className="text-sm mt-1">ID: {registrationId}</p>
                  <p className="text-xs mt-2">Redirecting to circuit website...</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                  {...register('category')}
                  type="hidden"
                  value={selectedCategory}
                />

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="+237 XXX XXX XXX"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {selectedCategory === 'player' && (
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">
                      University Team
                    </label>
                    <input
                      {...register('team')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                      placeholder="Your university team name"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-agora-purple to-agora-orange text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all"
                >
                  Complete Registration
                </button>
              </form>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By registering, you agree to participate in the AGORA University Circuit
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
