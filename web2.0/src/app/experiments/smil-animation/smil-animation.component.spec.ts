import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmilAnimationComponent } from './smil-animation.component';

describe('SmilAnimationComponent', () => {
  let component: SmilAnimationComponent;
  let fixture: ComponentFixture<SmilAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmilAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmilAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
