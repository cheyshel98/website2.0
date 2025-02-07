import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-popup.component.html',
  styleUrl: './image-popup.component.scss'
})
export class ImagePopupComponent {
  @Input() src:string = '';
  @Input() alt:string = '';

  popup:boolean = false;

  imgPopup(open = false) {
    this.popup = open;
    const body = document.getElementsByTagName('body')[0];
    if (open) {
      body.classList.add('rm-scroll');
    } else {
      body.classList.remove('rm-scroll');
    }
  }

  initTrapFocus(e:any, id:string) {
    return this.trapFocus(e, id);
  }

  trapFocus(e:any, modalId:string) {
    const isTabPressed = e.key === `Tab` || e.keyCode === 9;
  
    if (!isTabPressed) {
      return;
    }
    const focusableElements = `button, input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])`;
    const modal = document.getElementById(modalId) as HTMLElement;
  
    // get focusable elements in modal
    const firstFocusableElement = modal.querySelectorAll(focusableElements)[0] as HTMLElement;
    const focusableContent = modal.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1] as HTMLElement;

    if (e.key == 'Shift') {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      e.preventDefault();
    } else if (e.key == 'Enter') {
      return;
    }
  }

}
