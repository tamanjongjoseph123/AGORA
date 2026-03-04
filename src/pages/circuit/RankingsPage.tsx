import { useTranslation } from 'react-i18next';
import { rankings } from '../../data/rankings';
import { Trophy, Medal, TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function RankingsPage() {
  const { t } = useTranslation();

  const getMedalIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return rank;
  };

  const getFormIcon = (result: string) => {
    switch (result) {
      case 'W':
        return <div className="w-6 h-6 bg-green-500 text-white rounded text-xs flex items-center justify-center font-bold">W</div>;
      case 'D':
        return <div className="w-6 h-6 bg-yellow-500 text-white rounded text-xs flex items-center justify-center font-bold">D</div>;
      case 'L':
        return <div className="w-6 h-6 bg-red-500 text-white rounded text-xs flex items-center justify-center font-bold">L</div>;
      default:
        return null;
    }
  };

  const getFormTrend = (form: string[]) => {
    const recent = form.slice(0, 3);
    const points = recent.reduce((acc, result) => {
      return acc + (result === 'W' ? 3 : result === 'D' ? 1 : 0);
    }, 0);
    
    if (points >= 7) return <TrendingUp className="text-green-500" size={16} />;
    if (points <= 3) return <TrendingDown className="text-red-500" size={16} />;
    return <Minus className="text-yellow-500" size={16} />;
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <Trophy size={64} className="mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Season Rankings</h1>
          <p className="text-xl opacity-90">AGORA University Circuit 2026 - Current Standings</p>
          <p className="text-md opacity-75 mt-2">Season rankings are updated after each Monthly Final</p>
        </div>
      </section>

      {/* Rankings Info */}
      <section className="bg-agora-light section-padding">
        <div className="container-base">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-agora-purple">Total Teams</h3>
              <p className="text-2xl font-bold">{rankings.length}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-agora-orange">Matches Played</h3>
              <p className="text-2xl font-bold">{rankings.reduce((acc, r) => acc + r.matchesPlayed, 0)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-agora-red">Goals Scored</h3>
              <p className="text-2xl font-bold">{rankings.reduce((acc, r) => acc + r.goalsFor, 0)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-bold text-agora-purple">Qualification Spot</h3>
              <p className="text-2xl font-bold">Top 8</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="section-padding bg-white">
        <div className="container-base">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[rankings[1], rankings[0], rankings[2]].map((ranking, idx) => {
              const order = idx === 0 ? 2 : idx === 1 ? 1 : 3;
              return (
                <div
                  key={ranking.rank}
                  className={`card-base p-6 text-center border-t-4 ${
                    order === 1 ? 'border-yellow-400 shadow-xl' : 
                    order === 2 ? 'border-gray-400 shadow-lg' : 
                    'border-orange-600 shadow-md'
                  }`}
                >
                  <div className="text-6xl mb-4">
                    {order === 1 ? '🥇' : order === 2 ? '🥈' : '🥉'}
                  </div>
                  <h3 className="text-xl font-bold mb-1 gradient-text">{ranking.team}</h3>
                  <p className="text-sm text-gray-600 mb-4">{ranking.university}</p>
                  <div className="bg-gradient-to-r from-agora-purple/10 to-agora-orange/10 rounded-lg p-4 mb-4">
                    <div className="text-3xl font-bold text-agora-purple">{ranking.seasonPoints}</div>
                    <p className="text-gray-600 text-sm">Season Points</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm mb-4">
                    <div>
                      <p className="font-bold text-green-600">{ranking.wins}</p>
                      <p className="text-gray-500">W</p>
                    </div>
                    <div>
                      <p className="font-bold text-yellow-600">{ranking.draws}</p>
                      <p className="text-gray-500">D</p>
                    </div>
                    <div>
                      <p className="font-bold text-red-600">{ranking.losses}</p>
                      <p className="text-gray-500">L</p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-1">
                    {ranking.form.slice(0, 5).map((result, i) => (
                      <div key={i}>{getFormIcon(result)}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Rankings Table */}
          <div className="card-base overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-agora-purple to-agora-orange text-white">
              <h2 className="text-xl font-bold">Complete Season Standings</h2>
              <p className="text-sm opacity-90">Top 8 teams qualify for Grand Final Showdown</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rank</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Team</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">P</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">W</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">D</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">L</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">GD</th>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">Form</th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Points</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rankings.map((ranking, index) => (
                    <tr
                      key={ranking.rank}
                      className={`hover:bg-gray-50 transition-colors ${
                        index < 8 ? 'bg-green-50' : ''
                      } ${index < 3 ? 'border-l-4 border-agora-purple' : ''}`}
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getMedalIcon(ranking.rank)}</span>
                          <span className="font-bold text-agora-purple">#{ranking.rank}</span>
                          {index < 8 && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Qualified</span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div>
                          <div className="font-semibold text-gray-900">{ranking.team}</div>
                          <div className="text-sm text-gray-500">{ranking.university}</div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-center text-sm">{ranking.matchesPlayed}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-green-600">{ranking.wins}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-yellow-600">{ranking.draws}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold text-red-600">{ranking.losses}</td>
                      <td className="px-4 py-4 text-center text-sm">
                        <span className={`font-semibold ${
                          ranking.goalDifference > 0 ? 'text-green-600' : 
                          ranking.goalDifference < 0 ? 'text-red-600' : 
                          'text-gray-600'
                        }`}>
                          {ranking.goalDifference > 0 ? '+' : ''}{ranking.goalDifference}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-1 justify-center">
                          {getFormTrend(ranking.form)}
                          <div className="flex gap-1">
                            {ranking.form.slice(0, 3).map((result, i) => (
                              <div key={i} className="scale-75">
                                {getFormIcon(result)}
                              </div>
                            ))}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-agora-orange text-white">
                          {ranking.seasonPoints}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="bg-gray-50 section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Points System</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-base p-6 text-center">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="font-bold mb-2 text-agora-purple">Monthly Champion</h3>
              <p className="text-2xl font-bold text-agora-purple mb-2">100 Points</p>
              <p className="text-sm text-gray-600">Winner of each monthly tournament</p>
            </div>
            <div className="card-base p-6 text-center">
              <div className="text-4xl mb-2">🥈</div>
              <h3 className="font-bold mb-2 text-agora-orange">Runner-up</h3>
              <p className="text-2xl font-bold text-agora-orange mb-2">70 Points</p>
              <p className="text-sm text-gray-600">Second place in monthly tournament</p>
            </div>
            <div className="card-base p-6 text-center">
              <div className="text-4xl mb-2">🥉</div>
              <h3 className="font-bold mb-2 text-agora-red">Third Place</h3>
              <p className="text-2xl font-bold text-agora-red mb-2">50 Points</p>
              <p className="text-sm text-gray-600">Third place in monthly tournament</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Season points accumulate throughout the year. Top 8 teams qualify for the Grand Final Showdown.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-agora-gradient text-white section-padding">
        <div className="container-base text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Climb the Rankings?</h2>
          <p className="text-lg mb-8 opacity-90">
            Register your team and compete for the championship title
          </p>
          <a href="/circuit/register" className="btn-primary bg-white text-agora-purple hover:text-agora-purple">
            Register Your Team Now
          </a>
        </div>
      </section>
    </div>
  );
}
