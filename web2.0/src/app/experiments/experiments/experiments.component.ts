import { Component} from '@angular/core';
import { SmilAnimationComponent } from '../smil-animation/smil-animation.component';

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [SmilAnimationComponent],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.scss'
})
export class ExperimentsComponent {

  config:any = {
    id: 'testSVG',
    title: 'Test SVG',
    desc: 'Test SVG for SMIL Eperiment',
    objects: [
      {
        type: 'line',
        amount: 3,
        class: ['test-global-class'],
        children: [
          {
            type: 'animate',
            amount: [3, 2, 3]
          },
          {
            type: 'animate',
            amount: [3, 2, 3]
          },
          {
            type: 'animate',
            amount: [3, 2, 3]
          }
        ]
      }
    ]
  }
}
