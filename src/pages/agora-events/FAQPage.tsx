import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

export function FAQPage() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: t('agora_events.faq_q1'),
      a: t('agora_events.faq_a1')
    },
    {
      q: t('agora_events.faq_q2'),
      a: t('agora_events.faq_a2')
    },
    {
      q: t('agora_events.faq_q3'),
      a: t('agora_events.faq_a3')
    },
    {
      q: t('agora_events.faq_q4'),
      a: t('agora_events.faq_a4')
    },
    {
      q: t('agora_events.faq_q5'),
      a: t('agora_events.faq_a5')
    },
    {
      q: t('agora_events.faq_q6'),
      a: t('agora_events.faq_a6')
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <h1 className="text-5xl font-bold mb-4">{t('agora_events.faq_title')}</h1>
          <p className="text-xl opacity-90">Find answers to common questions about AGORA Events</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-base max-w-2xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-base overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between hover:bg-agora-light transition-colors"
                >
                  <h3 className="text-lg font-bold text-left text-gray-900">{faq.q}</h3>
                  <ChevronDown
                    size={24}
                    className={`text-agora-purple flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help */}
      <section className="bg-agora-light section-padding">
        <div className="container-base text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Didn't find your answer?</h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help. Contact us directly for personalized assistance.
          </p>
          <button className="btn-primary">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
