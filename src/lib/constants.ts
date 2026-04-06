export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Accounts', href: '#accounts' },
  { label: 'Loans', href: '#loans' },
  { label: 'Mobile Banking', href: '#mobile-banking' },
  { label: 'About', href: '#about' },
  { label: 'Branches', href: '#branches' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SITE_CONFIG = {
  name: 'GA Rural Bank PLC',
  tagline: 'Community banking with mobile access for everyday Ghana',
  phone: '0302 900 120',
  altPhone: '0302 901 014–16',
  email: 'info@garuralbank.com',
  address: 'P.O. Box AM 70, Amasaman, Accra, Ghana',
  hours: 'Monday–Friday, 8:00 AM – 5:00 PM',
  established: 1984,
  mobileBankingCode: '*365*212#',
} as const;
