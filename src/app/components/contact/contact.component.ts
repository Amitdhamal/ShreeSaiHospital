// components/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { ContactInfo } from '../../models/hospital.models';
import emailjs from '@emailjs/browser';

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

  form = this.formBuilder.group({
    name: '',
    phone: '',
    department: '',
    date: '',
    message: ''
  });

  constructor(private hospitalService: HospitalService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.hospitalService.getContactInfo().subscribe(data => this.contactInfo = data);
    this.hospitalService.getDepartments().subscribe(data => this.departments = data);
  }

  async submitForm() {
    if (this.form.value.name && this.form.value.phone) {
      this.submitted = true;
      console.log('Appointment Request:', this.form.value);
      const templateParams = {
        from_name: this.form.value.name,
        from_phone: this.form.value.phone,
        from_department: this.form.value.department,
        from_date: this.form.value.date,
        from_message: this.form.value.message
      };
      emailjs.init('btT8uLgdctFK44YGj');
      let response = await emailjs.send('service_3tacjcw', 'template_qv1ju4s', templateParams)
        .then(response => console.log('Email sent successfully!', response))
        .catch(error => console.error('Error sending email:', error));
    }
    this.form.reset();
  }

  resetForm() {
    this.form.reset();
    this.submitted = false;
  }
}
