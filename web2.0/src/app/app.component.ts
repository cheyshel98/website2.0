import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { BubbleBgComponent } from './shared/bubble-bg/bubble-bg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavigationComponent, 
    FooterComponent, 
    CommonModule, 
    RouterLink, 
    RouterLinkActive,
    BubbleBgComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles.scss']
})
export class AppComponent {
  title = 'Home';
}
