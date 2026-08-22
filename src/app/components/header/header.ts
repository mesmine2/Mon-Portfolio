import { Component, signal, HostListener } from '@angular/core';
import { ThemeService } from '../../core/theme.service';
import { ICONS } from '../../shared/icons';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  icons = ICONS;
  menuOpen = signal(false);
  activeSection = signal('about');

  constructor(public themeService: ThemeService) {}

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['about', 'skills', 'projects'];
    const scrollPos = window.scrollY + 120;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          this.activeSection.set(id);
          break;
        }
      }
    }
  }
}