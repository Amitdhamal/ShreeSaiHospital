// models/hospital.models.ts

export interface Department {
  id: number;
  name: string;
  icon: string;
  description: string;
  services: string[];
  color: string;
}

export interface Doctor {
  id: number;
  name: string;
  designation: string;
  department: string;
  departmentId: number;
  qualification: string;
  experience: number;
  availability: string;
  imageInitials: string;
  languages: string[];
}

export interface Facility {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface Announcement {
  id: number;
  title: string;
  date: string;
  type: 'notice' | 'event' | 'holiday';
  description: string;
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string;
  emergencyNumber: string;
  timings: { day: string; hours: string }[];
}
