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

  socials: SocialLink[] = [
    { icon: this.icons.github, url: 'https://github.com/mesmine2', label: 'GitHub' },
    { icon: this.icons.whatsapp, url: 'https://wa.me/237688095737', label: 'WhatsApp' },
    { icon: this.icons.telegram, url: 'https://t.me/237688095737', label: 'Telegram' },
  ];

  onSubmit() {
    console.log(this.form);
  }
}