// components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HospitalService } from 'src/app/services/hospital.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl:'./footer.component.html',
  styleUrls: [ './footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  contactInfo: any = null;
  constructor(private hospitalService: HospitalService) {}
  ngOnInit(): void {
     this.hospitalService.getContactInfo().subscribe(data => this.contactInfo = data);
  }
}
