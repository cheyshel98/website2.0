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



}
