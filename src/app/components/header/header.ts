import { Component, signal, AfterViewInit, OnDestroy } from '@angular/core';
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
export class Header implements AfterViewInit, OnDestroy {
  icons = ICONS;
  menuOpen = signal(false);
  activeSection = signal('about');

  private observer?: IntersectionObserver;
  private sectionIds = ['about', 'skills', 'projects'];

  constructor(public themeService: ThemeService) {}

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        // on garde la section dont l'intersection est la plus grande à l'écran
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          this.activeSection.set(id);
        }
      },
      {
        root: null,
        rootMargin: '-100px 0px -60% 0px', // déclenche un peu avant que la section arrive en haut
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    this.sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}