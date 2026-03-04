export interface Team {
  id: string;
  name: string;
  logo?: string;
  description: string;
  founded?: number;
  city: string;
}

export const teams: Team[] = [
  {
    id: '1',
    name: 'Phoenix Rising',
    description: 'Dynamic and energetic team known for aggressive play',
    city: 'Phoenix',
    founded: 2020
  },
  {
    id: '2',
    name: 'Elite Warriors',
    description: 'Disciplined team with excellent defensive strategies',
    city: 'Boston',
    founded: 2019
  },
  {
    id: '3',
    name: 'Thunder Strikers',
    description: 'Fast-paced team with exceptional offensive skills',
    city: 'Denver',
    founded: 2021
  },
  {
    id: '4',
    name: 'Victory United',
    description: 'Balanced team with strong teamwork and coordination',
    city: 'Chicago',
    founded: 2020
  },
  {
    id: '5',
    name: 'Dragon Force',
    description: 'Tactical team known for strategic gameplay',
    city: 'San Francisco',
    founded: 2018
  },
  {
    id: '6',
    name: 'Titan Academy',
    description: 'Young, promising team with high potential',
    city: 'Austin',
    founded: 2022
  },
  {
    id: '7',
    name: 'Shadow Kings',
    description: 'Veteran team with years of competitive experience',
    city: 'Los Angeles',
    founded: 2015
  },
  {
    id: '8',
    name: 'Nexus Elite',
    description: 'Tech-forward team with innovative tactics',
    city: 'Seattle',
    founded: 2021
  }
];
