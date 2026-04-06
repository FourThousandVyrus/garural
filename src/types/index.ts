export interface NavLink {
  label: string;
  href: string;
}

export interface AccountType {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
}

export interface Branch {
  name: string;
  address: string;
  phone: string;
  hours: string;
  isHeadOffice: boolean;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  color: string;
}
