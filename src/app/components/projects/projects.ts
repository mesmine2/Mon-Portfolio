import { Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { ICONS } from '../../shared/icons';
import { getTechIcon } from '../../shared/tech-icons';
import { SafeHtmlPipe } from '../../shared/safe-html.pipe';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;
  icons = ICONS;
  getTechIcon = getTechIcon;
}