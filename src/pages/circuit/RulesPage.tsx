import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';

export function RulesPage() {
  const { t } = useTranslation();

  const rules = [
    {
      title: 'Monthly Format',
      content: 'Teams compete in monthly tournaments. Top performers earn points towards the season total.',
      icon: '📅'
    },
    {
      title: 'Points System',
      content: 'Win = 3 points, Draw = 1 point, Loss = 0 points. Additional bonus points for performance metrics.',
      icon: '⭐'
    },
    {
      title: 'Team Eligibility',
      content: 'Teams must register prior to competition. Minimum 11 players and maximum 15 for squad size.',
      icon: '👥'
    },
    {
      title: 'Match Duration',
      content: 'Standard match format: 90 minutes of play divided into two 45-minute halves with 15-minute break.',
      icon: '⏱️'
    },
    {
      title: 'Fair Play',
      content: 'Zero tolerance for unsportsmanlike conduct. Referees have final authority on all decisions.',
      icon: '⚖️'
    },
    {
      title: 'Grand Showdown',
      content: 'Top 4 teams from all monthly tournaments advance to the Grand Final competition.',
      icon: '🏆'
    }
  ];

  const regulations = [
    {
      title: 'Player Registration',
      items: [
        'All players must be registered before match day',
        'Valid ID required for verification',
        'Players cannot represent multiple teams in same month',
        'Substitutions allowed up to 3 per match'
      ]
    },
    {
      title: 'Match Rules',
      items: [
        'FIFA rules apply with AGORA modifications',
        'Referee decision is final',
        'Minimum 7 players per team to start match',
        'Maximum 1 yellow card warning before substitution'
      ]
    },
    {
      title: 'Code of Conduct',
      items: [
        'Respect for opponents, referees, and spectators',
        'No abusive language or gestures',
        'No violence or aggressive behavior',
        'Compliance with all COVID-19 safety protocols'
      ]
    },
    {
      title: 'Disciplinary Actions',
      items: [
        'Yellow card: Official warning',
        'Red card: Immediate ejection from match',
        'Suspension: Up to 3 matches for serious misconduct',
        'Ban: Permanent removal for extreme violations'
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <BookOpen size={64} className="mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">{t('circuit.rules_title')}</h1>
          <p className="text-xl opacity-90">{t('circuit.rules_subtitle')}</p>
        </div>
      </section>

      {/* Quick Rules */}
      <section className="section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Core Rules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rules.map((rule, index) => (
              <div key={index} className="card-base p-8 text-center hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{rule.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-agora-purple">{rule.title}</h3>
                <p className="text-gray-600">{rule.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Regulations */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-12 text-center gradient-text">Detailed Regulations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {regulations.map((section, index) => (
              <div key={index} className="card-base p-8">
                <h3 className="text-2xl font-bold mb-6 text-agora-purple border-b-2 border-agora-orange pb-3">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-3">
                      <span className="text-agora-orange font-bold flex-shrink-0">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="section-padding">
        <div className="container-base max-w-3xl">
          <div className="card-base p-8 border-l-4 border-agora-orange">
            <h2 className="text-2xl font-bold mb-4 text-agora-purple">Important Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These rules and regulations are designed to ensure fair play, safety, and an enjoyable experience for all
              participants. AGORA Events reserves the right to modify these rules with 14 days' notice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By participating in AGORA University Circuit, you agree to abide by all stated rules and regulations.
              Non-compliance may result in disqualification from the competition and forfeiture of prizes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-agora-light section-padding">
        <div className="container-base max-w-2xl">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Can I join mid-season?',
                a: 'Yes! New teams can register for upcoming monthly tournaments. Points are calculated from registration date onward.'
              },
              {
                q: 'What happens if we win the Grand Showdown?',
                a: 'Winners receive the championship title, trophy, cash prize, and invitations to special events throughout the year.'
              },
              {
                q: 'Are there age restrictions?',
                a: 'The circuit is open to university-affiliated players aged 18+. Some events may have specific age categories.'
              },
              {
                q: 'Can we appeal referee decisions?',
                a: 'Formal appeals can be submitted within 24 hours of match completion to our disciplinary committee.'
              }
            ].map((item, index) => (
              <div key={index} className="card-base p-6">
                <h3 className="font-bold text-lg text-agora-purple mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
