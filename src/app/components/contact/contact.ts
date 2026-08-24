import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICONS } from '../../shared/icons';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';

interface SocialLink { icon: string; url: string; label: string; }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SafeHtmlPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  icons = ICONS;
  form = { name: '', email: '', message: '' };

  private readonly MY_EMAIL = 'mesminekamtcha@gmail.com';

  socials: SocialLink[] = [
  { icon: this.icons.github, url: 'https://github.com/mesmine2', label: 'GitHub' },
  { icon: this.icons.whatsapp, url: 'https://wa.me/237688095737', label: 'WhatsApp' },
  { icon: this.icons.linkedin, url: 'www.linkedin.com/in/mesmine-kamtcha', label: 'LinkedIn' },
];

  onSubmit() {
    const subject = encodeURIComponent(`Message de ${this.form.name} — Portfolio`);
    const body = encodeURIComponent(
      `Nom : ${this.form.name}\nEmail : ${this.form.email}\n\nMessage :\n${this.form.message}`
    );
    // ouvre directement le client mail du visiteur, comme wa.me pour WhatsApp
    window.location.href = `mailto:${this.MY_EMAIL}?subject=${subject}&body=${body}`;
  }
}