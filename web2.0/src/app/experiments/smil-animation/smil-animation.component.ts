import { Component, Input, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-smil-animation',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './smil-animation.component.html',
  styleUrl: './smil-animation.component.scss'
})
export class SmilAnimationComponent {

@Input() svgConfig = {
    id: '',
    title: '',
    desc: '',
    objects: [
      {
        type: '',
        amount: 0,
        class: [], //type classnames in preferred order ["classA", '', "classB"], type only one class to use for all in group
        children: [ //used for animation
          { 
            type: '',
            amount: [0], //type number in preferred order, type only one to add children equally
            class: []
          }
        ]
      }
    ]
  };

  svgShown:any;
  svgChildren:any;


  ngOnInit() {
    this.displayCode();
  }

  displayCode() {
    const svg = document.getElementById(this.svgConfig.id) as HTMLElement;
    const svgChildren = svg?.childNodes as NodeList;
    console.log(svg);
    console.log(svg?.childNodes);
    let markupArr = Array.from(svgChildren);
    console.log(markupArr);
    this.svgShown = svg.outerHTML;
    this.svgChildren = svgChildren;
  }
}
