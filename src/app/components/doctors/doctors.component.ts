// components/doctors/doctors.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { Doctor, Department } from '../../models/hospital.models';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];
  departments: Department[] = [];
  selectedDept = 0;
  searchQuery = '';

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.getDoctors().subscribe(data => {
      this.doctors = data;
      this.filteredDoctors = data;
    });
    this.hospitalService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  selectDept(deptId: number) {
    this.selectedDept = deptId;
    this.applyFilter();
  }

  applyFilter() {
    this.filteredDoctors = this.doctors.filter(doc => {
      const matchDept = this.selectedDept === 0 || doc.departmentId === this.selectedDept;
      const matchSearch = !this.searchQuery || doc.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchDept && matchSearch;
    });
  }
}
