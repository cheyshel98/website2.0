import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleBgComponent } from './bubble-bg.component';

describe('BubbleBgComponent', () => {
  let component: BubbleBgComponent;
  let fixture: ComponentFixture<BubbleBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BubbleBgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
