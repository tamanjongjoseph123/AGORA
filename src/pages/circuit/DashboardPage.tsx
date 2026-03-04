import { useState, useEffect } from 'react';
import { Users, Trophy, Calendar, TrendingUp, Eye, Edit, Trash2 } from 'lucide-react';

interface Registration {
  id: string;
  registrationId: string;
  category: 'player' | 'fan' | 'sponsor' | 'seller';
  name: string;
  email: string;
  phone: string;
  team?: string;
  date: string;
}

interface Match {
  id: string;
  team1: string;
  team2: string;
  score1: number;
  score2: number;
  time: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  date: string;
}

export function DashboardPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [matches, setMatches] = useState<Match[]>([]);
  const [activeTab, setActiveTab] = useState<'registrations' | 'matches' | 'rankings'>('registrations');
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    // Load registrations from localStorage
    const storedRegistrations = JSON.parse(localStorage.getItem('agoraRegistrations') || '[]');
    setRegistrations(storedRegistrations);

    // Sample matches data
    const sampleMatches: Match[] = [
      {
        id: '1',
        team1: 'University of Yaoundé',
        team2: 'University of Douala',
        score1: 2,
        score2: 1,
        time: '15:30',
        venue: 'Yaoundé Stadium',
        status: 'completed',
        date: '2024-03-15'
      },
      {
        id: '2',
        team1: 'University of Buea',
        team2: 'University of Dschang',
        score1: 0,
        score2: 0,
        time: '17:00',
        venue: 'Buea Sports Complex',
        status: 'live',
        date: '2024-03-15'
      },
      {
        id: '3',
        team1: 'University of Bamenda',
        team2: 'University of Maroua',
        score1: 0,
        score2: 0,
        time: '19:00',
        venue: 'Bamenda Stadium',
        status: 'upcoming',
        date: '2024-03-16'
      }
    ];
    setMatches(sampleMatches);
  }, []);

  const filteredRegistrations = registrations.filter(reg => 
    filter === 'all' ? true : reg.category === filter
  );

  const categoryStats = {
    player: registrations.filter(r => r.category === 'player').length,
    fan: registrations.filter(r => r.category === 'fan').length,
    sponsor: registrations.filter(r => r.category === 'sponsor').length,
    seller: registrations.filter(r => r.category === 'seller').length,
  };

  const updateMatchScore = (matchId: string, score1: number, score2: number) => {
    setMatches(prev => prev.map(match => 
      match.id === matchId ? { ...match, score1, score2 } : match
    ));
  };

  const updateMatchStatus = (matchId: string, status: 'upcoming' | 'live' | 'completed') => {
    setMatches(prev => prev.map(match => 
      match.id === matchId ? { ...match, status } : match
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-agora-gradient text-white section-padding">
        <div className="container-base">
          <h1 className="text-4xl font-bold mb-4">Circuit Dashboard</h1>
          <p className="text-lg opacity-90">Manage registrations, matches, and rankings in real-time</p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section-padding">
        <div className="container-base">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-base p-6 text-center">
              <Users className="text-agora-purple mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-agora-dark">{registrations.length}</h3>
              <p className="text-gray-600">Total Registrations</p>
            </div>
            <div className="card-base p-6 text-center">
              <Trophy className="text-agora-orange mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-agora-dark">{matches.filter(m => m.status === 'completed').length}</h3>
              <p className="text-gray-600">Completed Matches</p>
            </div>
            <div className="card-base p-6 text-center">
              <Calendar className="text-agora-red mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-agora-dark">{matches.filter(m => m.status === 'live').length}</h3>
              <p className="text-gray-600">Live Matches</p>
            </div>
            <div className="card-base p-6 text-center">
              <TrendingUp className="text-agora-purple mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-bold text-agora-dark">{categoryStats.player}</h3>
              <p className="text-gray-600">Registered Players</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white section-padding">
        <div className="container-base">
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveTab('registrations')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'registrations'
                  ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Registrations ({registrations.length})
            </button>
            <button
              onClick={() => setActiveTab('matches')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'matches'
                  ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Matches ({matches.length})
            </button>
            <button
              onClick={() => setActiveTab('rankings')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'rankings'
                  ? 'bg-gradient-to-r from-agora-purple to-agora-orange text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Rankings
            </button>
          </div>

          {/* Registrations Tab */}
          {activeTab === 'registrations' && (
            <div>
              {/* Category Filter */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['all', 'player', 'fan', 'sponsor', 'seller'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      filter === cat
                        ? 'bg-agora-purple text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)} 
                    {cat !== 'all' && ` (${categoryStats[cat as keyof typeof categoryStats]})`}
                  </button>
                ))}
              </div>

              {/* Registrations Table */}
              <div className="card-base overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Registration ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contact
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredRegistrations.map((reg) => (
                        <tr key={reg.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {reg.registrationId}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {reg.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              reg.category === 'player' ? 'bg-green-100 text-green-800' :
                              reg.category === 'fan' ? 'bg-blue-100 text-blue-800' :
                              reg.category === 'sponsor' ? 'bg-purple-100 text-purple-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {reg.category}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reg.email}<br/>{reg.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reg.team || '-'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {new Date(reg.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex gap-2">
                              <button className="text-agora-purple hover:text-agora-orange">
                                <Eye size={16} />
                              </button>
                              <button className="text-agora-purple hover:text-agora-orange">
                                <Edit size={16} />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Matches Tab */}
          {activeTab === 'matches' && (
            <div className="space-y-6">
              {matches.map((match) => (
                <div key={match.id} className="card-base p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        match.status === 'live' ? 'bg-red-100 text-red-700 animate-pulse' :
                        match.status === 'completed' ? 'bg-gray-100 text-gray-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {match.status.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">{match.date} • {match.time}</span>
                      <span className="text-sm text-gray-500">{match.venue}</span>
                    </div>
                    <div className="flex gap-2">
                      {match.status !== 'completed' && (
                        <button
                          onClick={() => updateMatchStatus(match.id, match.status === 'upcoming' ? 'live' : 'completed')}
                          className="btn-primary text-sm py-2 px-4"
                        >
                          {match.status === 'upcoming' ? 'Start Match' : 'End Match'}
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center">
                      <h3 className="font-bold text-lg">{match.team1}</h3>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4">
                        <div className="text-center">
                          <input
                            type="number"
                            value={match.score1}
                            onChange={(e) => updateMatchScore(match.id, parseInt(e.target.value) || 0, match.score2)}
                            className="w-16 h-16 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg"
                            disabled={match.status === 'completed'}
                          />
                        </div>
                        <span className="text-2xl font-bold text-gray-400">-</span>
                        <div className="text-center">
                          <input
                            type="number"
                            value={match.score2}
                            onChange={(e) => updateMatchScore(match.id, match.score1, parseInt(e.target.value) || 0)}
                            className="w-16 h-16 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg"
                            disabled={match.status === 'completed'}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-lg">{match.team2}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Rankings Tab */}
          {activeTab === 'rankings' && (
            <div className="card-base overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Season Rankings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rank
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Team
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Played
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Won
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Drawn
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Lost
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Points
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {[
                        { rank: 1, team: 'University of Yaoundé', played: 3, won: 2, drawn: 1, lost: 0, points: 7 },
                        { rank: 2, team: 'University of Douala', played: 3, won: 2, drawn: 0, lost: 1, points: 6 },
                        { rank: 3, team: 'University of Buea', played: 3, won: 1, drawn: 1, lost: 1, points: 4 },
                        { rank: 4, team: 'University of Dschang', played: 3, won: 1, drawn: 0, lost: 2, points: 3 },
                        { rank: 5, team: 'University of Bamenda', played: 2, won: 0, drawn: 1, lost: 1, points: 1 },
                        { rank: 6, team: 'University of Maroua', played: 2, won: 0, drawn: 0, lost: 2, points: 0 },
                      ].map((team) => (
                        <tr key={team.rank} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold ${
                              team.rank <= 3 ? 'bg-agora-purple text-white' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {team.rank}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {team.team}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {team.played}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {team.won}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {team.drawn}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {team.lost}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-agora-orange text-white">
                              {team.points}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
