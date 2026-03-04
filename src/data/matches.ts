export interface MatchStats {
  goals: number;
  yellowCards: number;
  redCards: number;
  offsides: number;
  possession: number;
  shots: number;
  corners: number;
}

export interface Match {
  id: string;
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  status: 'upcoming' | 'live' | 'completed';
  score1?: number;
  score2?: number;
  stats1?: MatchStats;
  stats2?: MatchStats;
  month: string;
  matchDay: number;
}

export const matches: Match[] = [
  // March 2026 - Month 1
  {
    id: 'match-001',
    team1: 'University of Yaoundé',
    team2: 'University of Douala',
    date: '2026-03-15',
    time: '15:00',
    venue: 'Ahmadou Ahidjo Stadium',
    city: 'Yaoundé',
    status: 'completed',
    score1: 2,
    score2: 1,
    stats1: { goals: 2, yellowCards: 2, redCards: 0, offsides: 1, possession: 52, shots: 12, corners: 5 },
    stats2: { goals: 1, yellowCards: 3, redCards: 0, offsides: 2, possession: 48, shots: 8, corners: 3 },
    month: 'March',
    matchDay: 1
  },
  {
    id: 'match-002',
    team1: 'University of Buea',
    team2: 'University of Dschang',
    date: '2026-03-15',
    time: '17:30',
    venue: 'Limbe Omnisport Stadium',
    city: 'Limbe',
    status: 'completed',
    score1: 1,
    score2: 1,
    stats1: { goals: 1, yellowCards: 1, redCards: 0, offsides: 3, possession: 45, shots: 10, corners: 4 },
    stats2: { goals: 1, yellowCards: 2, redCards: 0, offsides: 1, possession: 55, shots: 14, corners: 6 },
    month: 'March',
    matchDay: 1
  },
  {
    id: 'match-003',
    team1: 'University of Bamenda',
    team2: 'University of Maroua',
    date: '2026-03-16',
    time: '15:00',
    venue: 'Bamenda Municipal Stadium',
    city: 'Bamenda',
    status: 'completed',
    score1: 3,
    score2: 0,
    stats1: { goals: 3, yellowCards: 1, redCards: 0, offsides: 2, possession: 58, shots: 15, corners: 7 },
    stats2: { goals: 0, yellowCards: 4, redCards: 1, offsides: 1, possession: 42, shots: 6, corners: 2 },
    month: 'March',
    matchDay: 2
  },
  {
    id: 'match-004',
    team1: 'University of Yaoundé',
    team2: 'University of Buea',
    date: '2026-03-17',
    time: '17:00',
    venue: 'Ahmadou Ahidjo Stadium',
    city: 'Yaoundé',
    status: 'live',
    score1: 1,
    score2: 0,
    stats1: { goals: 1, yellowCards: 1, redCards: 0, offsides: 0, possession: 50, shots: 8, corners: 3 },
    stats2: { goals: 0, yellowCards: 2, redCards: 0, offsides: 2, possession: 50, shots: 7, corners: 2 },
    month: 'March',
    matchDay: 3
  },
  {
    id: 'match-005',
    team1: 'University of Douala',
    team2: 'University of Bamenda',
    date: '2026-03-18',
    time: '15:00',
    venue: 'Douala Japoma Stadium',
    city: 'Douala',
    status: 'upcoming',
    month: 'March',
    matchDay: 4
  },
  {
    id: 'match-006',
    team1: 'University of Dschang',
    team2: 'University of Maroua',
    date: '2026-03-18',
    time: '17:30',
    venue: 'Dschang University Stadium',
    city: 'Dschang',
    status: 'upcoming',
    month: 'March',
    matchDay: 4
  },
  {
    id: 'match-007',
    team1: 'University of Yaoundé',
    team2: 'University of Maroua',
    date: '2026-03-22',
    time: '15:00',
    venue: 'Ahmadou Ahidjo Stadium',
    city: 'Yaoundé',
    status: 'upcoming',
    month: 'March',
    matchDay: 5
  },
  {
    id: 'match-008',
    team1: 'University of Douala',
    team2: 'University of Dschang',
    date: '2026-03-22',
    time: '17:30',
    venue: 'Douala Japoma Stadium',
    city: 'Douala',
    status: 'upcoming',
    month: 'March',
    matchDay: 5
  },
  // April 2026 - Month 2
  {
    id: 'match-009',
    team1: 'University of Buea',
    team2: 'University of Bamenda',
    date: '2026-04-05',
    time: '15:00',
    venue: 'Limbe Omnisport Stadium',
    city: 'Limbe',
    status: 'upcoming',
    month: 'April',
    matchDay: 1
  },
  {
    id: 'match-010',
    team1: 'University of Maroua',
    team2: 'University of Ngaoundéré',
    date: '2026-04-05',
    time: '17:30',
    venue: 'Maroua Municipal Stadium',
    city: 'Maroua',
    status: 'upcoming',
    month: 'April',
    matchDay: 1
  },
  {
    id: 'match-011',
    team1: 'University of Yaoundé',
    team2: 'University of Bafoussam',
    date: '2026-04-06',
    time: '15:00',
    venue: 'Ahmadou Ahidjo Stadium',
    city: 'Yaoundé',
    status: 'upcoming',
    month: 'April',
    matchDay: 2
  },
  {
    id: 'match-012',
    team1: 'University of Douala',
    team2: 'University of Garoua',
    date: '2026-04-06',
    time: '17:30',
    venue: 'Douala Japoma Stadium',
    city: 'Douala',
    status: 'upcoming',
    month: 'April',
    matchDay: 2
  }
];
