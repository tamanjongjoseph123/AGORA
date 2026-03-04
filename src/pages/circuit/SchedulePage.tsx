import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { matches } from '../../data/matches';
import { Calendar, ChevronDown, MapPin, Clock, Eye } from 'lucide-react';

export function SchedulePage() {
  const { t } = useTranslation();
  const [expandedMatch, setExpandedMatch] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'live' | 'completed'>('all');

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'bg-blue-100 text-blue-700';
    if (status === 'live') return 'bg-red-100 text-red-700 animate-pulse';
    return 'bg-yellow-100 text-yellow-700';
  };

  const getStatusLabel = (status: string) => {
    if (status === 'completed') return 'COMPLETED';
    if (status === 'live') return 'LIVE';
    return 'UPCOMING';
  };

  const filteredMatches = matches.filter(match => 
    filter === 'all' ? true : match.status === filter
  );

  const groupedMatches = filteredMatches.reduce((acc, match) => {
    if (!acc[match.month]) {
      acc[match.month] = [];
    }
    acc[match.month].push(match);
    return acc;
  }, {} as Record<string, typeof matches>);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-agora-purple to-agora-orange text-white section-padding">
        <div className="container-base text-center">
          <Calendar size={64} className="mx-auto mb-4 opacity-90" />
          <h1 className="text-5xl font-bold mb-4">Match Schedule</h1>
          <p className="text-xl opacity-90">Complete fixture list with venues and times</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="flex flex-wrap gap-3 justify-center">
            {['all', 'upcoming', 'live', 'completed'].map(status => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === status
                    ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.toUpperCase()} 
                {status !== 'all' && ` (${matches.filter(m => m.status === status).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container-base max-w-4xl mx-auto">
          {Object.entries(groupedMatches).map(([month, monthMatches]) => (
            <div key={month} className="mb-12">
              {/* Month Header */}
              <div className="bg-gradient-to-r from-agora-purple to-agora-orange text-white p-4 rounded-t-lg mb-4">
                <h2 className="text-2xl font-bold">{month} 2026</h2>
                <p className="text-sm opacity-90">Month {monthMatches[0]?.matchDay ? Math.ceil(monthMatches[0].matchDay / 2) : 1} Tournament</p>
              </div>

              {/* Matches for this month */}
              <div className="space-y-4">
                {monthMatches.map((match) => (
                  <div key={match.id} className="card-base overflow-hidden hover:shadow-lg transition-all">
                    <button
                      onClick={() => setExpandedMatch(expandedMatch === match.id ? null : match.id)}
                      className="w-full p-6 hover:bg-agora-light transition-colors"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                        {/* Date & Time */}
                        <div className="md:col-span-2 text-left">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                            <Calendar size={14} />
                            {new Date(match.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </div>
                          <div className="flex items-center gap-2 font-semibold text-agora-purple">
                            <Clock size={16} />
                            {match.time}
                          </div>
                        </div>

                        {/* Venue */}
                        <div className="md:col-span-3 text-left">
                          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                            <MapPin size={14} />
                            {match.city}
                          </div>
                          <div className="text-sm font-medium text-gray-700">{match.venue}</div>
                        </div>

                        {/* Teams */}
                        <div className="md:col-span-4 text-center">
                          <div className="flex items-center justify-between gap-4">
                            <div className="text-right flex-1">
                              <p className="font-bold text-gray-900">{match.team1}</p>
                            </div>
                            <div className="px-3">
                              {match.status === 'completed' && match.score1 !== undefined ? (
                                <div className="text-center">
                                  <p className="text-2xl font-bold gradient-text">
                                    {match.score1} - {match.score2}
                                  </p>
                                </div>
                              ) : (
                                <div className="text-center text-gray-400">
                                  <p className="text-lg">VS</p>
                                </div>
                              )}
                            </div>
                            <div className="text-left flex-1">
                              <p className="font-bold text-gray-900">{match.team2}</p>
                            </div>
                          </div>
                        </div>

                        {/* Status & Actions */}
                        <div className="md:col-span-3 flex items-center justify-end gap-3">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${getStatusColor(match.status)}`}>
                            {getStatusLabel(match.status)}
                          </span>
                          {match.status === 'live' && (
                            <div className="flex items-center gap-1 text-red-500">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <span className="text-xs font-bold">LIVE</span>
                            </div>
                          )}
                          <ChevronDown
                            size={20}
                            className={`text-agora-purple transition-transform ${
                              expandedMatch === match.id ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>
                    </button>

                    {/* Expanded Details */}
                    {expandedMatch === match.id && match.stats1 && (
                      <div className="px-6 pb-6 border-t border-gray-200 pt-6 bg-agora-light">
                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Team 1 Stats */}
                          <div>
                            <h3 className="font-bold text-lg mb-4 text-agora-purple">{match.team1}</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Goals</span>
                                <span className="text-2xl font-bold text-agora-orange">{match.stats1.goals}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Possession</span>
                                <span className="text-lg font-bold text-agora-purple">{match.stats1.possession}%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Shots</span>
                                <span className="text-lg font-bold text-agora-purple">{match.stats1.shots}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Corners</span>
                                <span className="text-lg font-bold text-agora-purple">{match.stats1.corners}</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="text-xs text-gray-600">YC</span>
                                  <span className="text-sm font-bold text-yellow-500">{match.stats1.yellowCards}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="text-xs text-gray-600">RC</span>
                                  <span className="text-sm font-bold text-red-500">{match.stats1.redCards}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="text-xs text-gray-600">OFF</span>
                                  <span className="text-sm font-bold text-agora-purple">{match.stats1.offsides}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Team 2 Stats */}
                          <div>
                            <h3 className="font-bold text-lg mb-4 text-agora-purple">{match.team2}</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Goals</span>
                                <span className="text-2xl font-bold text-agora-orange">{match.stats2.goals}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Possession</span>
                                <span className="text-lg font-bold text-agora-purple">{match.stats2.possession}%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Shots</span>
                                <span className="text-lg font-bold text-agora-purple">{match.stats2.shots}</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                <span className="text-gray-700">Corners</span>
                                <span className="text-lg font-bold text-agora-purple">{match.stats2.corners}</span>
                              </div>
                              <div className="grid grid-cols-3 gap-2">
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="text-xs text-gray-600">YC</span>
                                  <span className="text-sm font-bold text-yellow-500">{match.stats2.yellowCards}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="text-xs text-gray-600">RC</span>
                                  <span className="text-sm font-bold text-red-500">{match.stats2.redCards}</span>
                                </div>
                                <div className="flex justify-between items-center p-2 bg-white rounded">
                                  <span className="text-xs text-gray-600">OFF</span>
                                  <span className="text-sm font-bold text-agora-purple">{match.stats2.offsides}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Venue Information */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Tournament Venues</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-purple">Ahmadou Ahidjo Stadium</h3>
              <p className="text-gray-600 mb-2">Yaoundé</p>
              <p className="text-sm text-gray-500">Capacity: 40,000 • Main venue for major matches</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-orange">Douala Japoma Stadium</h3>
              <p className="text-gray-600 mb-2">Douala</p>
              <p className="text-sm text-gray-500">Capacity: 50,000 • Modern facility with all amenities</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-red">Limbe Omnisport Stadium</h3>
              <p className="text-gray-600 mb-2">Limbe</p>
              <p className="text-sm text-gray-500">Capacity: 20,000 • Coastal venue with great atmosphere</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-purple">Bamenda Municipal Stadium</h3>
              <p className="text-gray-600 mb-2">Bamenda</p>
              <p className="text-sm text-gray-500">Capacity: 15,000 • Northwest region hub</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-orange">Dschang University Stadium</h3>
              <p className="text-gray-600 mb-2">Dschang</p>
              <p className="text-sm text-gray-500">Capacity: 8,000 • University venue with student support</p>
            </div>
            <div className="card-base p-6">
              <h3 className="font-bold text-lg mb-2 text-agora-red">Maroua Municipal Stadium</h3>
              <p className="text-gray-600 mb-2">Maroua</p>
              <p className="text-sm text-gray-500">Capacity: 10,000 • Northern region facility</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
