import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const partnerSchema = z.object({
  companyName: z.string().min(3, 'Company name is required'),
  contactName: z.string().min(2, 'Contact name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Phone number is required'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type PartnerForm = z.infer<typeof partnerSchema>;

export function PartnersPage() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnerForm>({
    resolver: zodResolver(partnerSchema)
  });

  const partners = [
    'TechCorp Industries',
    'Global Sports Network',
    'Innovation Hub',
    'Community Leaders',
    'Green Future Foundation',
    'Digital Pioneers',
    'Elite Sponsors',
    'Worldwide Partners'
  ];

  const onSubmit = (data: PartnerForm) => {
    console.log('Partnership Inquiry:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <h1 className="text-5xl font-bold mb-4">{t('agora_events.partners_title')}</h1>
          <p className="text-xl opacity-90">{t('agora_events.partners_subtitle')}</p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            {t('agora_events.why_partner')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('agora_events.partner_benefit_1'), icon: '👥', desc: 'Connect with thousands of engaged participants' },
              { title: t('agora_events.partner_benefit_2'), icon: '📈', desc: 'Increase brand visibility and customer loyalty' },
              { title: t('agora_events.partner_benefit_3'), icon: '🤝', desc: 'Access exclusive networking opportunities' }
            ].map((benefit, index) => (
              <div key={index} className="card-base p-8 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-agora-purple">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            Our Trusted Partners
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="card-base p-8 flex items-center justify-center bg-white text-center hover:shadow-lg transition-all">
                <div>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-agora-purple to-agora-orange bg-clip-text mb-2">
                    {partner.charAt(0)}
                  </div>
                  <p className="font-semibold text-gray-700 text-sm">{partner}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-base max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            {t('agora_events.partner_inquiry')}
          </h2>

          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
              Thank you! We'll review your inquiry and get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Company Name
                </label>
                <input
                  {...register('companyName')}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                  placeholder="Your company name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Contact Name
                </label>
                <input
                  {...register('contactName')}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                  placeholder="Your name"
                />
                {errors.contactName && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactName.message}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Email
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

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Phone
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
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                Message
              </label>
              <textarea
                {...register('message')}
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-agora-purple"
                placeholder="Tell us about your partnership opportunity..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={20} />
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
