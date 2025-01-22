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
      url: 'portfolio/web-design'
    },
    {
      name: 'Graphic Design',
      url: 'portfolio/graphic-design'
    },
    {
      name: 'UI/UX',
      url: 'portfolio/ui-ux'
    },
    {
      name: 'Motion Graphics',
      url: 'portfolio/motion-graphics'
    }
  ]

}
