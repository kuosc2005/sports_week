import { GameView } from './GameView';

const defaultTeams = (names: string[]) => names.map((name, i) => ({
  name,
  seed: `#${i + 1}`,
  contact: '+977-98XXXXXXXX',
  members: ['Player One', 'Player Two', 'Player Three'],
}));

const defaultBracket = (teams: string[]) => [
  { round: 'semi', team1: teams[0] || 'Team A', team2: teams[1] || 'Team B' },
  { round: 'semi', team1: teams[2] || 'Team C', team2: teams[3] || 'Team D' },
  { round: 'final', team1: 'TBD (Semi 1 Winner)', team2: 'TBD (Semi 2 Winner)' },
];

export const FootballView = () => (
  <GameView config={{
    name: 'Football',
    date: 'May 2, 2026 | 8:00 AM',
    venue: 'KU Football Ground',
    heroImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9f4iv2zpc7UPBmkwM26vUHtK9gR417MVVmGJgHNTWbiYk8GU2l76mDnOxzgJMV0EnE5II8h5C7bjSU-XcRs70aAsJQqNr3Mni_2L0b-J6E6N9vp9_lMBvZpTOzEIHjJfqBNua4ILGZFQAr_TmG54HzNMwqWBaeS87s4xH3_rvtP1-kW18zS4Zld--DOYOb6Zc34xoQs8Vwoy9DDW2-zHoy7JOVjIx02J4VWBmG63H8caJZ268CmKbwUBPQmLl9HH_JdsURlxaetPf',
    regulations: [
      { title: 'Match Duration', desc: 'Two halves of 20 minutes each with a 5-minute break.' },
      { title: 'Squad Size', desc: 'Each team must field exactly 5 players. No substitutions after second half starts.' },
      { title: 'Standard Rules', desc: 'FIFA 5-a-side rules apply. No slide tackling.' },
      { title: 'Tiebreaker', desc: 'Penalty shootout if scores are level at full time.' },
      { title: 'Eligibility', desc: 'Only KUCC registered students are allowed to participate.' },
      { title: 'Equipment', desc: 'Shin guards are mandatory. Proper football boots required.' },
    ],
    teams: defaultTeams(['Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta', 'Team Epsilon', 'Team Zeta']),
    bracket: defaultBracket(['Team Alpha', 'Team Beta', 'Team Gamma', 'Team Delta']),
    formLink: 'https://forms.gle/placeholder-football',
  }} />
);

export const BasketballView = () => (
  <GameView config={{
    name: 'Basketball',
    date: 'May 2, 2026 | 9:00 AM',
    venue: 'KU Basketball Court',
    heroImg: 'https://picsum.photos/seed/basketball2026/1200/600',
    regulations: [
      { title: 'Game Duration', desc: 'Four 8-minute quarters with standard FIBA timing rules.' },
      { title: 'Team Size', desc: '5 players on court. Max 10 per squad.' },
      { title: 'Fouls', desc: '5 personal fouls disqualify a player.' },
      { title: 'Tiebreaker', desc: 'Overtime of 5 minutes if tied at end of regulation.' },
      { title: 'Eligibility', desc: 'KUCC students only.' },
      { title: 'Equipment', desc: 'Sports shoes mandatory. No jewelry.' },
    ],
    teams: defaultTeams(['Dunkers FC', 'Rim Rockers', 'Court Kings', 'Slam Squad']),
    bracket: defaultBracket(['Dunkers FC', 'Rim Rockers', 'Court Kings', 'Slam Squad']),
    formLink: 'https://forms.gle/placeholder-basketball',
  }} />
);

export const CricketView = () => (
  <GameView config={{
    name: 'Cricket',
    date: 'May 2, 2026 | 7:00 AM',
    venue: 'KU Cricket Ground',
    heroImg: 'https://picsum.photos/seed/cricket2026/1200/600',
    regulations: [
      { title: 'Format', desc: 'T10 format — 10 overs per side.' },
      { title: 'Team Size', desc: '11 players per team. 3 substitutes allowed.' },
      { title: 'Batting', desc: 'Power play of 3 overs. Helmet mandatory for batsman.' },
      { title: 'Tiebreaker', desc: 'Super over if scores are tied.' },
      { title: 'Eligibility', desc: 'KUCC students only. One faculty member allowed.' },
      { title: 'Equipment', desc: 'KUCC provides the ball. Teams bring their own bats.' },
    ],
    teams: defaultTeams(['Team Sixer', 'Wicket Warriors', 'Boundary Boys', 'Spin Masters']),
    bracket: defaultBracket(['Team Sixer', 'Wicket Warriors', 'Boundary Boys', 'Spin Masters']),
    formLink: 'https://forms.gle/placeholder-cricket',
  }} />
);

export const TableTennisView = () => (
  <GameView config={{
    name: 'Table Tennis',
    date: 'May 2, 2026 | 10:00 AM',
    venue: 'KU Indoor Hall',
    heroImg: 'https://picsum.photos/seed/tabletennis2026/1200/600',
    regulations: [
      { title: 'Format', desc: 'Best of 5 sets. First to 11 points wins a set.' },
      { title: 'Singles', desc: 'Individual singles competition.' },
      { title: 'Service', desc: 'Alternate service every 2 points.' },
      { title: 'Tiebreaker', desc: 'Deuce at 10-10. Must win by 2.' },
      { title: 'Eligibility', desc: 'KUCC students only.' },
      { title: 'Equipment', desc: 'KUCC provides paddles and balls.' },
    ],
    teams: defaultTeams(['Smash Kings', 'Ping Masters', 'Spin Force', 'Rally Pro']),
    bracket: defaultBracket(['Smash Kings', 'Ping Masters', 'Spin Force', 'Rally Pro']),
    formLink: 'https://forms.gle/placeholder-tabletennis',
  }} />
);

export const BadmintonView = () => (
  <GameView config={{
    name: 'Badminton',
    date: 'May 2, 2026 | 11:00 AM',
    venue: 'KU Badminton Court',
    heroImg: 'https://picsum.photos/seed/badminton2026/1200/600',
    regulations: [
      { title: 'Format', desc: 'Best of 3 games to 21 points.' },
      { title: 'Category', desc: 'Singles and doubles both.' },
      { title: 'Service', desc: 'Service rotates per BWF rules.' },
      { title: 'Tiebreaker', desc: 'Set at 20-all. Win by 2. Cap at 30.' },
      { title: 'Eligibility', desc: 'KUCC students only.' },
      { title: 'Equipment', desc: 'Players bring own rackets. Shuttles provided.' },
    ],
    teams: defaultTeams(['Shuttle Hawks', 'Drop Shot', 'Net Ninjas', 'Smash Bros']),
    bracket: defaultBracket(['Shuttle Hawks', 'Drop Shot', 'Net Ninjas', 'Smash Bros']),
    formLink: 'https://forms.gle/placeholder-badminton',
  }} />
);

export const ChessView = () => (
  <GameView config={{
    name: 'Chess',
    date: 'May 2, 2026 | 12:00 PM',
    venue: 'KU Conference Room',
    heroImg: 'https://picsum.photos/seed/chess2026/1200/600',
    regulations: [
      { title: 'Format', desc: 'Swiss system. 5 rounds. 10+5 time control.' },
      { title: 'Eligibility', desc: 'KUCC students only.' },
      { title: 'Time Control', desc: '10 minutes per player with 5-second increment.' },
      { title: 'Tiebreaker', desc: 'Buchholz score breaks ties.' },
      { title: 'Touch Move', desc: 'Touch-move rule strictly enforced.' },
      { title: 'Equipment', desc: 'KUCC provides boards and clocks.' },
    ],
    teams: defaultTeams(['Grandmaster A', 'Bishop B', 'Knight C', 'Rook D', 'Pawn E', 'Queen F']),
    bracket: [
      { round: 'semi', team1: 'Grandmaster A', team2: 'Knight C' },
      { round: 'semi', team1: 'Bishop B', team2: 'Rook D' },
      { round: 'final', team1: 'TBD (Semi 1 Winner)', team2: 'TBD (Semi 2 Winner)' },
    ],
    formLink: 'https://forms.gle/placeholder-chess',
  }} />
);

export const VolleyballView = () => (
  <GameView config={{
    name: 'Volleyball',
    date: 'May 2, 2026 | 1:00 PM',
    venue: 'KU Volleyball Court',
    heroImg: 'https://picsum.photos/seed/volleyball2026/1200/600',
    regulations: [
      { title: 'Format', desc: 'Best of 3 sets to 25 points.' },
      { title: 'Team Size', desc: '6 players on court. Max 12 per squad.' },
      { title: 'Rotation', desc: 'Standard FIVB rotation rules apply.' },
      { title: 'Tiebreaker', desc: 'Third set to 15 if tied at 1-1.' },
      { title: 'Eligibility', desc: 'KUCC students only.' },
      { title: 'Equipment', desc: 'KUCC provides the ball and net.' },
    ],
    teams: defaultTeams(['Spike Force', 'Block Party', 'Ace Squad', 'Set Masters']),
    bracket: defaultBracket(['Spike Force', 'Block Party', 'Ace Squad', 'Set Masters']),
    formLink: 'https://forms.gle/placeholder-volleyball',
  }} />
);

export const FutsalView = () => (
  <GameView config={{
    name: 'Futsal',
    date: 'May 2, 2026 | 2:00 PM',
    venue: 'KU Indoor Futsal Court',
    heroImg: 'https://picsum.photos/seed/futsal2026/1200/600',
    regulations: [
      { title: 'Match Duration', desc: 'Two halves of 20 minutes. Running clock.' },
      { title: 'Team Size', desc: '5 players on court including goalkeeper.' },
      { title: 'Substitutions', desc: 'Unlimited flying substitutions allowed.' },
      { title: 'Tiebreaker', desc: 'Penalty shootout if tied at full time.' },
      { title: 'Eligibility', desc: 'KUCC students only.' },
      { title: 'Equipment', desc: 'Indoor shoes mandatory. No studs.' },
    ],
    teams: defaultTeams(['Street Kings', 'Indoor FC', 'Quick Pass', 'Goal Rush']),
    bracket: defaultBracket(['Street Kings', 'Indoor FC', 'Quick Pass', 'Goal Rush']),
    formLink: 'https://forms.gle/placeholder-futsal',
  }} />
);
