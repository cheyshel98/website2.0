import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { ImagePopupComponent } from './image-popup/image-popup.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterLink, RouterModule, ImagePopupComponent],
  exports: [CommonModule, RouterLink, RouterModule, ImagePopupComponent]
})
export class SharedModule { }
