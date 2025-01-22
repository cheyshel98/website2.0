import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-ui-ux',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.scss'
})
export class UiUxComponent {

}
