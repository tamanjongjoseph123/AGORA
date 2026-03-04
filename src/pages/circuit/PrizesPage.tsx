import { useTranslation } from 'react-i18next';
import { Trophy } from 'lucide-react';

export function PrizesPage() {
  const { t } = useTranslation();

  const monthlyPrizes = [
    { position: '🥇 1st Place', prize: '$5,000 + 100 points' },
    { position: '🥈 2nd Place', prize: '$3,000 + 75 points' },
    { position: '🥉 3rd Place', prize: '$1,500 + 50 points' },
  ];

  const grandFinalPrizes = [
    { position: '🏆 Champion', prize: '$25,000 + Trophy + Sponsorship Deal' },
    { position: '🥈 Runner-up', prize: '$15,000 + Trophy' },
    { position: '🥉 Third Place', prize: '$10,000 + Trophy' },
  ];

  const prizePool = [
    { category: 'Monthly Tournaments (6 months)', amount: '$108,000' },
    { category: 'Grand Final Prizes', amount: '$50,000' },
    { category: 'Special Awards', amount: '$42,000' },
    { category: 'Total Prize Pool', amount: '$200,000', highlight: true }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <Trophy size={64} className="mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">{t('circuit.prizes_title')}</h1>
          <p className="text-xl opacity-90">Over $200,000 in prizes awaits</p>
        </div>
      </section>

      {/* Prize Pool Overview */}
      <section className="section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Total Prize Pool: $200,000</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prizePool.map((item, index) => (
              <div
                key={index}
                className={`card-base p-8 text-center ${
                  item.highlight
                    ? 'border-2 border-agora-orange bg-gradient-to-br from-agora-light to-white'
                    : ''
                }`}
              >
                <p className="text-gray-600 mb-2">{item.category}</p>
                <p className={`text-3xl font-bold ${item.highlight ? 'gradient-text' : 'text-agora-purple'}`}>
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Prizes */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            {t('circuit.monthly_prizes')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('circuit.monthly_prizes_desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {monthlyPrizes.map((prize, index) => (
              <div key={index} className="card-base p-8 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{prize.position.split(' ')[0]}</div>
                <h3 className="text-xl font-bold mb-4 text-agora-purple">{prize.position.split(' ')[1]}</h3>
                <div className="bg-gradient-to-r from-agora-purple to-agora-orange rounded-lg p-4 text-white">
                  <p className="font-bold text-lg">{prize.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grand Final Prizes */}
      <section className="section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">
            {t('circuit.grand_final')}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('circuit.grand_final_desc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {grandFinalPrizes.map((prize, index) => (
              <div
                key={index}
                className={`card-base p-8 text-center transition-all ${
                  index === 0 ? 'border-2 border-gold hover:shadow-2xl md:scale-105' : 'hover:shadow-lg'
                }`}
              >
                <div className="text-6xl mb-4">{prize.position.split(' ')[0]}</div>
                <h3 className="text-xl font-bold mb-4 text-agora-purple">{prize.position.split(' ')[1]}</h3>
                <div className={`rounded-lg p-4 text-white ${
                  index === 0
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    : index === 1
                    ? 'bg-gradient-to-r from-gray-400 to-gray-600'
                    : 'bg-gradient-to-r from-orange-600 to-orange-800'
                }`}>
                  <p className="font-bold text-lg">{prize.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Prizes */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Special Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚽', title: 'Top Scorer', prize: '$2,000 + Recognition' },
              { icon: '🧤', title: 'Best Goalkeeper', prize: '$2,000 + Recognition' },
              { icon: '🛡️', title: 'Best Defender', prize: '$2,000 + Recognition' },
              { icon: '🎯', title: 'Fair Play Award', prize: '$2,000 + Recognition' },
              { icon: '🔥', title: 'Most Improved Team', prize: '$3,000 + Sponsorship' },
              { icon: '👑', title: 'Fan\'s Choice', prize: '$2,500 + Recognition' },
              { icon: '🌟', title: 'Rookie of the Year', prize: '$3,000 + Development Program' },
              { icon: '💪', title: 'Team Spirit Award', prize: '$2,500 + Experience Package' }
            ].map((award, index) => (
              <div key={index} className="card-base p-6 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{award.icon}</div>
                <h3 className="font-bold text-lg text-agora-purple mb-2">{award.title}</h3>
                <p className="text-sm text-gray-600">{award.prize}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="section-padding">
        <div className="container-base max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-agora-purple">Important Information</h2>
          <div className="space-y-4">
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-orange">Prize Variations</h3>
              <p className="text-gray-700">
                Some prizes may vary based on sponsor availability and regional regulations. AGORA Events reserves the
                right to substitute prizes of equivalent value.
              </p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-orange">Payment & Timeline</h3>
              <p className="text-gray-700">
                Prize payments are made within 14 days of competition completion. Winners must provide valid identification
                and tax information for verification.
              </p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-orange">Terms & Conditions</h3>
              <p className="text-gray-700">
                By participating in AGORA University Circuit, you agree to all terms and conditions. Prizes are non-transferable
                and cannot be exchanged for cash equivalents unless specified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-agora-gradient text-white section-padding">
        <div className="container-base text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Compete for Great Prizes?</h2>
          <p className="text-lg mb-8 opacity-90">
            Register your team and start your journey to the top
          </p>
          <button className="btn-primary bg-white text-agora-purple hover:text-agora-purple">
            Register Now
          </button>
        </div>
      </section>
    </div>
  );
}
