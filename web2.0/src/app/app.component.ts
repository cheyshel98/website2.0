import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { BubbleBgComponent } from './shared/bubble-bg/bubble-bg.component';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

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

  constructor(
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event:any) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
           while (route!.firstChild) {
            route = route.firstChild;
           }
           if (route.snapshot.data['title']) {
            routeTitle = route!.snapshot.data['title'];
           }
           return routeTitle;
        })
      )
      .subscribe((title:string) => {
        if (title) {
          this.titleService.setTitle(title);
        }
      })
  }
}
