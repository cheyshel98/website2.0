import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  links:any = [
    {
      name: 'Home',
      url: 'home'
    },
    {
      name: 'Portfolio',
      url: 'portfolio'
    },
    {
      name: 'Resume',
      url: 'resume'
    },
    // {
    //   name: 'Contact',
    //   url: 'contact'
    // }
  ];
  test:any = 'test'
}
