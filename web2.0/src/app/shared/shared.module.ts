import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ImagePopupComponent } from './image-popup/image-popup.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterLink, RouterModule, ImagePopupComponent, ScrollToTopComponent],
  exports: [CommonModule, RouterLink, RouterModule, ImagePopupComponent, ScrollToTopComponent]
})
export class SharedModule { }
