// components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { ContactInfo } from '../../models/hospital.models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo | null = null;
  departments: any[] = [];
  submitted = false;

  form = { name: '', phone: '', department: '', date: '', message: '' };

  constructor(private hospitalService: HospitalService) {}

  ngOnInit(): void {
    this.hospitalService.getContactInfo().subscribe(data => this.contactInfo = data);
    this.hospitalService.getDepartments().subscribe(data => this.departments = data);
  }

  submitForm() {
    if (this.form.name && this.form.phone) {
      this.submitted = true;
    }
  }

  resetForm() {
    this.form = { name: '', phone: '', department: '', date: '', message: '' };
  }
}
