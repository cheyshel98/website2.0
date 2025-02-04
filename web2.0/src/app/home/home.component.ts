import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  socialLinks:any = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cheyenne-shelton',
      img: 'linkedin'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/cheyshel98/website2.0.git',
      img: 'github'
    },
    {
      name: 'PDF Resume',
      url: '',
      img: 'file-text'
    }
  ];
}
