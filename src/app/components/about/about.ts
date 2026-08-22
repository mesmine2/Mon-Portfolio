import { Component } from '@angular/core';
import { ICONS } from '../../shared/icons';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';

interface Highlight { label: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  icons = ICONS;
  highlights: Highlight[] = [
    { label: 'Développement Web avec Angular' },
    { label: 'TypeScript & JavaScript' },
    { label: 'Interfaces Web Responsives' },
    { label: 'Performance & Web Vitals (90+)' },
  ];
}