import { Component, OnInit, HostListener } from '@angular/core';
import { SharedModule } from '../shared.module';
import { Observable } from 'rxjs';

@Component({
  selector: 'bubble-bg',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './bubble-bg.component.html',
  styleUrl: './bubble-bg.component.scss'
})
export class BubbleBgComponent {



  bubbleConfig:any = [
    {
      bubbleAmount: 30,
      sizeMax: 48,
      sizeMin: 20,
      bubbles: []
    },
    {
      bubbleAmount: 15,
      sizeMax: 18,
      sizeMin: 7,
      bubbles: []
    },
    {
      bubbleAmount: 7,
      sizeMax: 15,
      sizeMin: 5,
      bubbles: []
    }
  ];

  ngOnInit():void {
    this.bubbleConfig
      this.createBubbles();
  }

  @HostListener('mousemove', ['$event'])
  mousemove(event: any) {
    //console.log(event.clientX, event.clientY);
  }

  createBubbles() {
    this.bubbleConfig.forEach((layer:any) => {
      console.log(layer);
      for (let i = 0; i < layer.bubbleAmount; i ++) {
        const bubbleSize = this.getRandomIntegerInclusive(layer.sizeMin, layer.sizeMax);
        const bubblePosX = this.getRandomIntegerInclusive(0 , 1000);
        const bubblePosY = this.getRandomIntegerInclusive(0 , 400);
        layer.bubbles.push({
          size: bubbleSize, 
          pos: 
          {x: bubblePosX,
           y: bubblePosY
          }
        });
      }
    });
    //console.log(this.bubbleConfig);
  }

  getRandomIntegerInclusive(min:number, max:number) {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  
  
}
