// components/departments/departments.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { Department, Doctor } from '../../models/hospital.models';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: Department[] = [];
  doctors: Doctor[] = [];

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.getDepartments().subscribe(data => this.departments = data);
    this.hospitalService.getDoctors().subscribe(data => this.doctors = data);
  }

  getDoctorsForDept(deptId: number): Doctor[] {
    return this.doctors.filter(d => d.departmentId === deptId);
  }
}
