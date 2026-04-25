// services/hospital.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department, Doctor, Facility, Announcement, ContactInfo } from '../models/hospital.models';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  private departments: Department[] = [
    {
      id: 1,
      name: 'Cardiology',
      icon: '🫀',
      description: 'Advanced cardiac care with state-of-the-art diagnostics and treatment for all heart-related ailments.',
      services: ['ECG & Echo', 'Angiography', 'Cardiac Surgery', 'Pacemaker Implant', 'Heart Failure Management'],
      color: '#c0392b'
    },
    {
      id: 2,
      name: 'Orthopaedics',
      icon: '🦴',
      description: 'Comprehensive bone, joint and spine care offering surgical and non-surgical treatments.',
      services: ['Joint Replacement', 'Spine Surgery', 'Arthroscopy', 'Sports Injuries', 'Fracture Care'],
      color: '#2980b9'
    },
    {
      id: 3,
      name: 'Neurology',
      icon: '🧠',
      description: 'Expert neurological care for brain, spine and nervous system disorders.',
      services: ['Stroke Management', 'Epilepsy Clinic', 'Migraine Treatment', 'Parkinson\'s Care', 'EEG'],
      color: '#8e44ad'
    },
    {
      id: 4,
      name: 'Paediatrics',
      icon: '👶',
      description: 'Dedicated child healthcare from newborns to adolescents with compassionate care.',
      services: ['NICU', 'Vaccination', 'Child Development', 'Paediatric Surgery', 'Growth Monitoring'],
      color: '#27ae60'
    },
    {
      id: 5,
      name: 'Gynaecology & Obstetrics',
      icon: '🌸',
      description: 'Complete women\'s health services including maternity, fertility and gynaecological care.',
      services: ['Antenatal Care', 'Normal & C-Section Delivery', 'Laparoscopy', 'Fertility Clinic', 'Menopause Management'],
      color: '#e91e8c'
    },
    {
      id: 6,
      name: 'Ophthalmology',
      icon: '👁️',
      description: 'Advanced eye care for all visual disorders with laser and surgical options.',
      services: ['Cataract Surgery', 'LASIK', 'Retina Care', 'Glaucoma', 'Paediatric Eye Care'],
      color: '#16a085'
    },
    {
      id: 7,
      name: 'General Medicine',
      icon: '🩺',
      description: 'Holistic general health services for diagnosis and treatment of all common illnesses.',
      services: ['OPD Consultations', 'Diabetes Management', 'Hypertension', 'Fever & Infections', 'Health Checkups'],
      color: '#d35400'
    },
    {
      id: 8,
      name: 'Ayurveda & Naturopathy',
      icon: '🌿',
      description: 'Traditional Indian healing blended with modern wellness for holistic health.',
      services: ['Panchakarma', 'Herbal Therapy', 'Yoga Therapy', 'Diet Counselling', 'Stress Management'],
      color: '#6d9e3f'
    }
  ];

  private doctors: Doctor[] = [
    {
      id: 1, name: 'Dr. Ramakrishna Deshmukh', designation: 'Chief Cardiologist',
      department: 'Cardiology', departmentId: 1, qualification: 'MBBS, MD, DM (Cardiology)',
      experience: 22, availability: 'Mon–Sat, 10AM–2PM', imageInitials: 'RD',
      languages: ['Marathi', 'Hindi', 'English']
    },
    {
      id: 2, name: 'Dr. Sunita Kulkarni', designation: 'Senior Cardiologist',
      department: 'Cardiology', departmentId: 1, qualification: 'MBBS, MD, DNB (Cardiology)',
      experience: 15, availability: 'Mon–Fri, 4PM–7PM', imageInitials: 'SK',
      languages: ['Marathi', 'Hindi']
    },
    {
      id: 3, name: 'Dr. Prashant Joshi', designation: 'HOD Orthopaedics',
      department: 'Orthopaedics', departmentId: 2, qualification: 'MBBS, MS (Ortho), Fellowship Joint Replacement',
      experience: 18, availability: 'Mon–Sat, 9AM–1PM', imageInitials: 'PJ',
      languages: ['Marathi', 'Hindi', 'English']
    },
    {
      id: 4, name: 'Dr. Anjali Patil', designation: 'Orthopaedic Surgeon',
      department: 'Orthopaedics', departmentId: 2, qualification: 'MBBS, MS (Ortho)',
      experience: 10, availability: 'Tue–Sun, 3PM–6PM', imageInitials: 'AP',
      languages: ['Marathi', 'Hindi']
    },
    {
      id: 5, name: 'Dr. Vivek Shankar Rao', designation: 'Chief Neurologist',
      department: 'Neurology', departmentId: 3, qualification: 'MBBS, MD, DM (Neurology)',
      experience: 20, availability: 'Mon–Fri, 11AM–3PM', imageInitials: 'VS',
      languages: ['Marathi', 'Hindi', 'Telugu', 'English']
    },
    {
      id: 6, name: 'Dr. Meera Iyer', designation: 'Paediatric Specialist',
      department: 'Paediatrics', departmentId: 4, qualification: 'MBBS, MD (Paediatrics), Fellowship NICU',
      experience: 14, availability: 'Mon–Sat, 9AM–12PM & 5PM–8PM', imageInitials: 'MI',
      languages: ['Marathi', 'Hindi', 'Kannada', 'English']
    },
    {
      id: 7, name: 'Dr. Kavita Sawant', designation: 'Gynaecologist & Obstetrician',
      department: 'Gynaecology & Obstetrics', departmentId: 5, qualification: 'MBBS, MS (OBG)',
      experience: 16, availability: 'Mon–Sat, 10AM–1PM & 5PM–7PM', imageInitials: 'KS',
      languages: ['Marathi', 'Hindi', 'English']
    },
    {
      id: 8, name: 'Dr. Deepak Mahajan', designation: 'Eye Surgeon',
      department: 'Ophthalmology', departmentId: 6, qualification: 'MBBS, MS (Ophthalmology), FRCS',
      experience: 12, availability: 'Mon–Sat, 9AM–2PM', imageInitials: 'DM',
      languages: ['Marathi', 'Hindi', 'English']
    },
    {
      id: 9, name: 'Dr. Shobha Nair', designation: 'General Physician',
      department: 'General Medicine', departmentId: 7, qualification: 'MBBS, MD (General Medicine)',
      experience: 9, availability: 'Daily, 8AM–8PM', imageInitials: 'SN',
      languages: ['Marathi', 'Hindi', 'Malayalam', 'English']
    },
    {
      id: 10, name: 'Dr. Swami Prasad Deshpande', designation: 'Ayurvedic Physician',
      department: 'Ayurveda & Naturopathy', departmentId: 8, qualification: 'BAMS, MD (Ayurveda)',
      experience: 25, availability: 'Mon–Sat, 8AM–11AM & 4PM–7PM', imageInitials: 'SP',
      languages: ['Marathi', 'Hindi', 'Sanskrit']
    }
  ];

  private facilities: Facility[] = [
    { id: 1, name: '24/7 Emergency', icon: '🚨', description: 'Round-the-clock emergency services with trained trauma team and ambulance facility.' },
    { id: 2, name: 'Pathology Lab', icon: '🔬', description: 'NABL-accredited laboratory for all diagnostic tests with same-day results.' },
    { id: 3, name: 'Digital Radiology', icon: '🩻', description: 'Advanced X-Ray, CT Scan, MRI and Ultrasound services with instant digital reports.' },
    { id: 4, name: 'Pharmacy', icon: '💊', description: 'Well-stocked in-house pharmacy open 24 hours providing all medications at subsidised rates.' },
    { id: 5, name: 'Blood Bank', icon: '🩸', description: 'Licensed blood bank with all blood groups and components available round the clock.' },
    { id: 6, name: 'ICU & CCU', icon: '🏥', description: 'Fully equipped Intensive Care and Cardiac Care Units with experienced nursing staff.' }
  ];

  private announcements: Announcement[] = [
    {
      id: 1, title: 'Free Health Camp – Sai Baba Jayanti', date: '28 Sep 2025', type: 'event',
      description: 'Free general health checkup camp on the occasion of Shri Sai Baba Jayanti. Open to all pilgrims and devotees.'
    },
    {
      id: 2, title: 'New Ayurveda Wing Inaugurated', date: '15 Sep 2025', type: 'notice',
      description: 'We are pleased to announce the inauguration of our expanded Ayurveda & Naturopathy wing with Panchakarma facilities.'
    },
    {
      id: 3, title: 'Diwali Holiday Notice', date: '10 Oct 2025', type: 'holiday',
      description: 'Emergency services will remain operational. OPD will remain closed on 20–21 October for Diwali. Happy Diwali to all.'
    },
    {
      id: 4, title: 'Blood Donation Drive', date: '01 Oct 2025', type: 'event',
      description: 'Join us for a voluntary blood donation camp in collaboration with the Shirdi Sai Seva Trust. All donors will receive blessings.'
    }
  ];

  private contactInfo: ContactInfo = {
    address: 'Shirdi Devasthan Hospital, Near Sai Baba Mandir, Shirdi – 423109, Ahmednagar District, Maharashtra',
    phone: ['+91 2423 258 500', '+91 2423 258 501'],
    email: 'hospital@shirdidevastan.org',
    emergencyNumber: '+91 2423 258 999',
    timings: [
      { day: 'Monday – Saturday', hours: '8:00 AM – 8:00 PM' },
      { day: 'Sunday', hours: '9:00 AM – 1:00 PM' },
      { day: 'Emergency', hours: '24 × 7 Always Open' }
    ]
  };

  constructor() {}

  getDepartments(): Observable<Department[]> {
    return of(this.departments);
  }

  getDepartmentById(id: number): Observable<Department | undefined> {
    return of(this.departments.find(d => d.id === id));
  }

  getDoctors(): Observable<Doctor[]> {
    return of(this.doctors);
  }

  getDoctorsByDepartment(departmentId: number): Observable<Doctor[]> {
    return of(this.doctors.filter(d => d.departmentId === departmentId));
  }

  getFacilities(): Observable<Facility[]> {
    return of(this.facilities);
  }

  getAnnouncements(): Observable<Announcement[]> {
    return of(this.announcements);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }
}
