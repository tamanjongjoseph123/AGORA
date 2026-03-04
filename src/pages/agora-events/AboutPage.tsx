import { useTranslation } from 'react-i18next';
import { CheckCircle } from 'lucide-react';

export function AboutPage() {
  const { t } = useTranslation();

  const values = [
    {
      key: 'excellence',
      icon: '✨',
      title: t('agora_events.value_excellence'),
      description: t('agora_events.value_excellence_desc')
    },
    {
      key: 'transparency',
      icon: '🔍',
      title: t('agora_events.value_transparency'),
      description: t('agora_events.value_transparency_desc')
    },
    {
      key: 'innovation',
      icon: '💡',
      title: t('agora_events.value_innovation'),
      description: t('agora_events.value_innovation_desc')
    },
    {
      key: 'fairplay',
      icon: '⚖️',
      title: t('agora_events.value_fairplay'),
      description: t('agora_events.value_fairplay_desc')
    },
    {
      key: 'community',
      icon: '🌍',
      title: t('agora_events.value_community'),
      description: t('agora_events.value_community_desc')
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <h1 className="text-5xl font-bold mb-4">{t('agora_events.title')}</h1>
          <p className="text-xl opacity-90">{t('agora_events.about_desc')}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 gradient-text">{t('agora_events.about_title')}</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {t('agora_events.about_desc')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in event management, we have successfully organized hundreds of events
                ranging from intimate corporate gatherings to large-scale international conferences.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="About AGORA"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card-base p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">{t('agora_events.vision')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('agora_events.vision_desc')}
              </p>
            </div>
            <div className="card-base p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">{t('agora_events.mission')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t('agora_events.mission_desc')}
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
              {t('agora_events.values')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={value.key} className="card-base p-8 text-center animate-slideInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-agora-purple">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">
            Why Choose AGORA Events?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Professional team with decades of combined experience',
              'State-of-the-art event management technology',
              'Proven track record of successful events',
              'Personalized service and attention to detail',
              'Comprehensive support from planning to execution',
              'Extensive network of trusted vendors and partners'
            ].map((reason, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle size={24} className="text-agora-orange flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-base text-center">
          <h2 className="text-3xl font-bold mb-4 gradient-text">Meet Our Team</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our talented team brings diverse expertise and passion for creating memorable events
          </p>
          {/* Placeholder for team members */}
          <div className="bg-agora-light rounded-xl p-12">
            <p className="text-gray-500">Our team members will be featured here</p>
          </div>
        </div>
      </section>
    </div>
  );
}
