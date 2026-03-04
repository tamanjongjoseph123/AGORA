export interface Ranking {
  rank: number;
  team: string;
  university: string;
  appearances: number;
  seasonPoints: number;
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  form: string[];
}

export const rankings: Ranking[] = [
  {
    rank: 1,
    team: 'University of Yaoundé',
    university: 'UY1 Lions',
    appearances: 3,
    seasonPoints: 100,
    matchesPlayed: 8,
    wins: 6,
    draws: 1,
    losses: 1,
    goalsFor: 18,
    goalsAgainst: 8,
    goalDifference: 10,
    form: ['W', 'W', 'D', 'W', 'L']
  },
  {
    rank: 2,
    team: 'University of Douala',
    university: 'UD Sharks',
    appearances: 3,
    seasonPoints: 70,
    matchesPlayed: 8,
    wins: 5,
    draws: 2,
    losses: 1,
    goalsFor: 15,
    goalsAgainst: 9,
    goalDifference: 6,
    form: ['W', 'D', 'W', 'W', 'D']
  },
  {
    rank: 3,
    team: 'University of Buea',
    university: 'UB Mountaineers',
    appearances: 2,
    seasonPoints: 50,
    matchesPlayed: 7,
    wins: 4,
    draws: 1,
    losses: 2,
    goalsFor: 12,
    goalsAgainst: 10,
    goalDifference: 2,
    form: ['L', 'W', 'W', 'D', 'W']
  },
  {
    rank: 4,
    team: 'University of Dschang',
    university: 'UDS Eagles',
    appearances: 2,
    seasonPoints: 45,
    matchesPlayed: 7,
    wins: 3,
    draws: 3,
    losses: 1,
    goalsFor: 11,
    goalsAgainst: 8,
    goalDifference: 3,
    form: ['D', 'W', 'D', 'W', 'L']
  },
  {
    rank: 5,
    team: 'University of Bamenda',
    university: 'UBa Warriors',
    appearances: 2,
    seasonPoints: 35,
    matchesPlayed: 6,
    wins: 3,
    draws: 1,
    losses: 2,
    goalsFor: 10,
    goalsAgainst: 9,
    goalDifference: 1,
    form: ['W', 'L', 'D', 'W', 'L']
  },
  {
    rank: 6,
    team: 'University of Maroua',
    university: 'UM Desert Foxes',
    appearances: 2,
    seasonPoints: 30,
    matchesPlayed: 6,
    wins: 2,
    draws: 2,
    losses: 2,
    goalsFor: 8,
    goalsAgainst: 8,
    goalDifference: 0,
    form: ['D', 'L', 'W', 'D', 'L']
  },
  {
    rank: 7,
    team: 'University of Ngaoundéré',
    university: 'UN Gazelles',
    appearances: 1,
    seasonPoints: 20,
    matchesPlayed: 5,
    wins: 1,
    draws: 2,
    losses: 2,
    goalsFor: 6,
    goalsAgainst: 9,
    goalDifference: -3,
    form: ['L', 'D', 'L', 'W', 'D']
  },
  {
    rank: 8,
    team: 'University of Bafoussam',
    university: 'UBaf Titans',
    appearances: 1,
    seasonPoints: 15,
    matchesPlayed: 5,
    wins: 1,
    draws: 1,
    losses: 3,
    goalsFor: 5,
    goalsAgainst: 11,
    goalDifference: -6,
    form: ['L', 'L', 'D', 'L', 'W']
  },
  {
    rank: 9,
    team: 'University of Garoua',
    university: 'UG Crocodiles',
    appearances: 1,
    seasonPoints: 10,
    matchesPlayed: 4,
    wins: 0,
    draws: 1,
    losses: 3,
    goalsFor: 3,
    goalsAgainst: 10,
    goalDifference: -7,
    form: ['L', 'L', 'D', 'L']
  },
  {
    rank: 10,
    team: 'University of Bertoua',
    university: 'UBert Panthers',
    appearances: 1,
    seasonPoints: 5,
    matchesPlayed: 4,
    wins: 0,
    draws: 0,
    losses: 4,
    goalsFor: 2,
    goalsAgainst: 12,
    goalDifference: -10,
    form: ['L', 'L', 'L', 'L']
  }
];
