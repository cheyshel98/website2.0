import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  subPageLinks = [
    {
      name: 'Web Design',
      url: 'portfolio/projects/web-design'
    },
    {
      name: 'Graphic Design',
      url: 'portfolio/projects/graphic-design'
    },
    {
      name: 'UI/UX',
      url: 'portfolio/projects/ui-ux'
    },
    {
      name: 'Motion Graphics',
      url: 'portfolio/projects/motion-graphics'
    }
  ]

}
