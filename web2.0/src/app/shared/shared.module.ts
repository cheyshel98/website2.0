import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterLink, RouterModule],
  exports: [CommonModule, RouterLink, RouterModule]
})
export class SharedModule { }
