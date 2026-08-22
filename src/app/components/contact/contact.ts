import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICONS } from '../../shared/icons';

interface SocialLink { icon: string; url: string; label: string; }

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact{
  icons = ICONS;
  form = { name: '', email: '', message: '' };

  socials: SocialLink[] = [
    { icon: this.icons.github, url: 'https://github.com/TON-USER', label: 'GitHub' },
    { icon: this.icons.whatsapp, url: 'https://wa.me/237XXXXXXXXX', label: 'WhatsApp' },
    { icon: this.icons.telegram, url: 'https://t.me/TON-USER', label: 'Telegram' },
  ];

  onSubmit() {
    console.log(this.form);
  }
}