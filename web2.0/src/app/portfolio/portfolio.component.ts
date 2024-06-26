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
      name: 'UI/UX',
      url: ''
    },
    {
      name: 'Web Design',
      url: ''
    },
    {
      name: 'Graphic Design',
      url: ''
    },
    {
      name: 'Motion Graphics',
      url: ''
    }
  ]

}
