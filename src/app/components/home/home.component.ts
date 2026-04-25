// components/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { Department, Doctor, Facility, Announcement } from '../../models/hospital.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  departments: Department[] = [];
  featuredDoctors: Doctor[] = [];
  facilities: Facility[] = [];
  announcements: Announcement[] = [];

  stats = [
    { value: '50+', label: 'Years of Service', icon: '🏥' },
    { value: '1,200+', label: 'Beds Capacity', icon: '🛏️' },
    { value: '85+', label: 'Specialist Doctors', icon: '👨‍⚕️' },
    { value: '5 Lakh+', label: 'Patients Served Yearly', icon: '🙏' }
  ];

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.getDepartments().subscribe(data => {
      this.departments = data.slice(0, 6);
    });

    this.hospitalService.getDoctors().subscribe(data => {
      this.featuredDoctors = data.slice(0, 4);
    });

    this.hospitalService.getFacilities().subscribe(data => {
      this.facilities = data;
    });

    this.hospitalService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    });
  }

  getAnnouncementBadge(type: string): string {
    const badges: Record<string, string> = {
      'event': 'Event', 'notice': 'Notice', 'holiday': 'Holiday'
    };
    return badges[type] || type;
  }
}
