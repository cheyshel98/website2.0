import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {

  scrollToTop(event:any) {
    event.currentTarget.blur();
    window.scrollTo({top: 0, behavior: 'smooth'});    
  }
}
