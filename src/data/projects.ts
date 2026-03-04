export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  year: number;
  status: 'ongoing' | 'completed';
  impact: string;
  location: string;
  type: 'sports' | 'community' | 'corporate' | 'youth';
  websiteUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'circuit-2026',
    title: 'AGORA University Circuit 2026',
    description: 'Multi-month competitive football platform designed for university teams with monthly tournaments and cumulative season rankings leading to Grand Final Showdown.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop',
    year: 2026,
    status: 'ongoing',
    impact: '16+ universities, 500+ athletes, 1M+ FCFA prize pool',
    location: 'Central Africa Region',
    type: 'sports',
    websiteUrl: '/circuit'
  },
  {
    id: 'monthly-sale-2025',
    title: 'AGORA Monthly Series 2025',
    description: 'Monthly competitive football tournaments featuring university teams with cash prizes and qualification points for the University Circuit.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
    year: 2025,
    status: 'ongoing',
    impact: 'Monthly tournaments, 200+ participants per event',
    location: 'University Stadiums',
    type: 'sports'
  },
  {
    id: 'campus-fest-2024',
    title: 'AGORA Campus Invitational',
    description: 'Large-scale university festival combining sports competitions, cultural activities, and networking opportunities for students.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
    year: 2024,
    status: 'completed',
    impact: '5,000+ attendees, 50+ universities represented',
    location: 'National Sports Complex',
    type: 'community'
  },
  {
    id: 'youth-dev-2024',
    title: 'Youth Football Development Program',
    description: 'Comprehensive youth development initiative focusing on talent identification, training, and academic support for young athletes.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dab16e884?w=500&h=300&fit=crop',
    year: 2024,
    status: 'ongoing',
    impact: '200+ youth athletes, 10 training centers',
    location: 'National Reach',
    type: 'youth'
  },
  {
    id: 'corporate-cup-2023',
    title: 'Corporate Football Cup',
    description: 'Premier corporate football tournament bringing together companies for team building and friendly competition.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=300&fit=crop',
    year: 2023,
    status: 'completed',
    impact: '40+ corporate teams, 800+ participants',
    location: 'Business District Sports Center',
    type: 'corporate'
  },
  {
    id: 'esports-championship-2023',
    title: 'Virtual Football Championship',
    description: 'Innovative esports tournament combining virtual and real football experiences for tech-savvy youth.',
    image: 'https://images.unsplash.com/photo-1538481143235-62a8fbe8cc65?w=500&h=300&fit=crop',
    year: 2023,
    status: 'completed',
    impact: '1,000+ gamers, 50K+ online viewers',
    location: 'Hybrid Event - Online & Venue',
    type: 'sports'
  }
];
