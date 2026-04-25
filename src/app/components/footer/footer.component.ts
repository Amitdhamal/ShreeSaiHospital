// components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<footer class="site-footer">
  <div class="footer-devotional">
    <div class="container">
      <p class="footer-mantra">॥ सबका मालिक एक ॥</p>
      <p class="footer-subtitle">Serving Humanity in the Name of Shri Sai Baba</p>
    </div>
  </div>

  <div class="footer-main">
    <div class="container footer-grid">

      <div class="footer-col">
        <div class="footer-logo">
          <span class="f-diya">🪔</span>
          <div>
            <p class="f-name">Shirdi Devasthan Hospital</p>
            <p class="f-trust">Sai Baba Sansthan Trust</p>
          </div>
        </div>
        <p class="footer-about">
          Established under the blessing of Shri Sai Baba, we provide compassionate, 
          affordable healthcare to pilgrims, devotees and the community of Shirdi.
        </p>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul class="footer-links">
          <li><a routerLink="/">🏠 Home</a></li>
          <li><a routerLink="/departments">🏥 Departments</a></li>
          <li><a routerLink="/doctors">👨‍⚕️ Our Doctors</a></li>
          <li><a routerLink="/contact">📞 Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">Contact</h4>
        <ul class="footer-contact-list">
          <li>📍 Near Sai Baba Mandir, Shirdi – 423109</li>
          <li>📞 +91 2423 258 500</li>
          <li>🚨 Emergency: +91 2423 258 999</li>
          <li>✉️ hospital&#64;shirdidevastan.org</li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">OPD Timings</h4>
        <ul class="footer-timings">
          <li><span>Mon – Sat</span><span>8 AM – 8 PM</span></li>
          <li><span>Sunday</span><span>9 AM – 1 PM</span></li>
          <li class="emergency-timing"><span>Emergency</span><span>24 × 7</span></li>
        </ul>
      </div>

    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>© {{ currentYear }} Shirdi Devasthan Hospital. All Rights Reserved.</p>
      <p class="footer-blessing">🙏 श्री साई बाबा आपको आरोग्य और सुख दें 🙏</p>
    </div>
  </div>
</footer>
  `,
  styles: [`
    .site-footer { background: var(--maroon-dark); color: #e8d5b7; }

    .footer-devotional {
      background: linear-gradient(90deg, var(--maroon), var(--saffron-dark), var(--maroon));
      text-align: center;
      padding: 16px 0;
      border-bottom: 2px solid var(--gold);
    }

    .footer-mantra {
      font-family: 'Tiro Devanagari Sanskrit', Georgia, serif;
      font-size: 1.5rem; color: var(--gold); margin: 0; font-weight: 700;
      text-shadow: 0 0 20px rgba(255,215,0,0.5);
    }

    .footer-subtitle { color: #fff3cd; margin: 4px 0 0; font-size: 0.85rem; }

    .footer-main { padding: 48px 0 32px; }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
      gap: 40px;
    }

    .footer-logo { display: flex; align-items: center; gap: 12px; margin-bottom: 14px; }
    .f-diya { font-size: 2rem; }
    .f-name { font-size: 1rem; font-weight: 700; color: var(--gold); margin: 0; }
    .f-trust { font-size: 0.72rem; color: #bbb; margin: 0; }

    .footer-about { font-size: 0.83rem; line-height: 1.7; color: #c5a882; }

    .footer-heading {
      font-size: 0.95rem; font-weight: 700; color: var(--gold);
      margin: 0 0 16px; padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 153, 0, 0.3);
      letter-spacing: 0.05em; text-transform: uppercase;
    }

    .footer-links { list-style: none; padding: 0; margin: 0; }
    .footer-links li { margin-bottom: 10px; }
    .footer-links a { color: #c5a882; text-decoration: none; font-size: 0.88rem; transition: color 0.2s; }
    .footer-links a:hover { color: var(--gold); }

    .footer-contact-list { list-style: none; padding: 0; margin: 0; }
    .footer-contact-list li { font-size: 0.83rem; color: #c5a882; margin-bottom: 10px; line-height: 1.5; }

    .footer-timings { list-style: none; padding: 0; margin: 0; }
    .footer-timings li {
      display: flex; justify-content: space-between;
      font-size: 0.83rem; color: #c5a882;
      padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .footer-timings li span:last-child { color: #e8d5b7; font-weight: 600; }
    .emergency-timing span { color: #ff6b6b !important; }

    .footer-bottom {
      border-top: 1px solid rgba(255, 153, 0, 0.2);
      padding: 16px 0;
      background: rgba(0,0,0,0.25);
    }

    .footer-bottom-inner {
      display: flex; justify-content: space-between; align-items: center;
      font-size: 0.78rem; color: #9a7c5c;
      flex-wrap: wrap; gap: 8px;
    }

    .footer-blessing { color: var(--gold); opacity: 0.8; font-style: italic; }

    @media (max-width: 900px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 540px) {
      .footer-grid { grid-template-columns: 1fr; }
      .footer-bottom-inner { justify-content: center; text-align: center; }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
