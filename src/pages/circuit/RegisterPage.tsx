import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import QRCode from 'qrcode.react';
import { Send } from 'lucide-react';
import { BASE_URL } from '../../config/api';

const registerSchema = z.object({
  category: z.enum(['player', 'fan', 'sponsor', 'seller'], {
    errorMap: () => ({ message: 'Please select a category' })
  }),
  full_name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone_number: z.string().min(1, 'Phone number is required'),
  team_name: z.string().min(1, 'Team/School selection is required'),
  customTeam: z.string().optional()
});

type RegisterForm = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [registrationId, setRegistrationId] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string>('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema)
  });

  const teams = [
    'IME',
    'Polytech',
    'Fomic',
    'IUT',
    'SIU',
    'Rousseau',
    'CIUB',
    'AIMT',
    'St. Bernard',
    'JFN',
    'Universite des valeurs et de la mentalite',
    'luget',
    'Saint Jerome',
    'Keyce',
    'luc',
    'De la salle',
    'The brains',
    'UCAC icam',
    'Other'
  ];

  const categories = [
    { value: 'player', label: 'Player' },
    { value: 'fan', label: 'Fan' },
    { value: 'sponsor', label: 'Sponsor' },
    { value: 'seller', label: 'Seller' }
  ];

  const onSubmit = async (data: RegisterForm) => {
    console.log('Form submitted with data:', data);
    setApiError(''); // Clear previous errors
    
    try {
      setIsLoading(true);
      console.log('Sending request to API...');
      const response = await fetch(`${BASE_URL}api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: data.category,
          full_name: data.full_name,
          email: data.email,
          phone_number: data.phone_number,
          team_name: data.team_name || data.customTeam
        }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        
        // Show detailed error to user
        let errorMessage = 'Registration failed';
        if (errorData.detail) {
          errorMessage = errorData.detail;
        } else if (errorData.message) {
          errorMessage = errorData.message;
        } else if (typeof errorData === 'string') {
          errorMessage = errorData;
        } else {
          errorMessage = JSON.stringify(errorData);
        }
        
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log('API Success:', result);
      setRegistrationId(result.id || `AGORA-${Date.now()}`);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setApiError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <h1 className="text-5xl font-bold mb-4">Event Registration</h1>
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
                Register via QR Code
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
                Manual Registration
              </h2>

              {submitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                  <p className="font-bold">Registration Successful!</p>
                  <p className="text-sm mt-2">
                    Your registration has been submitted successfully: <span className="font-bold">{registrationId}</span>
                  </p>
                </div>
              )}

              {/* Form Validation Errors */}
              {apiError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  <p className="font-semibold">Registration Error</p>
                  <p className="text-sm">{apiError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-gray-700">
                    Registration Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat) => (
                      <label key={cat.value} className="flex items-center cursor-pointer">
                        <input
                          {...register('category')}
                          type="radio"
                          value={cat.value}
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

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Full Name
                  </label>
                  <input
                    {...register('full_name')}
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="Enter your full name"
                  />
                  {errors.full_name && (
                    <p className="text-red-500 text-sm mt-1">{errors.full_name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Email Address
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

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Phone Number
                  </label>
                  <input
                    {...register('phone_number')}
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                    placeholder="+237 694 895 224"
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone_number.message}</p>
                  )}
                </div>

                {/* Team Selection */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Team/School
                  </label>
                  <select
                    {...register('team_name')}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple ${
                      errors.team_name ? 'border-red-300' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your team/school *</option>
                    {teams.map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                  </select>
                  
                  {/* Custom team input for "Other" option */}
                  {selectedTeam === 'Other' && (
                    <div className="mt-3">
                      <label className="block text-sm font-semibold mb-2 text-gray-700">
                        Enter your school name
                      </label>
                      <input
                        {...register('customTeam')}
                        type="text"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple ${
                          errors.customTeam ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Enter your school name"
                      />
                      {errors.customTeam && (
                        <p className="text-red-500 text-sm mt-1">{errors.customTeam.message}</p>
                      )}
                    </div>
                  )}
                  {errors.team_name && (
                    <p className="text-red-500 text-sm mt-1">{errors.team_name.message}</p>
                  )}
                </div>

                <button type="submit" disabled={isLoading} className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Submit Registration
                    </>
                  )}
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
