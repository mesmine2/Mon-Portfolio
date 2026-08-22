import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/skills';
import { getTechIcon } from '../../shared/tech-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  groups = SKILL_GROUPS;
  getTechIcon = getTechIcon;
}