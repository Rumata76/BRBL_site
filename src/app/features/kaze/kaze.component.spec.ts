import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazeComponent } from './kaze.component';

describe('KazeComponent', () => {
  let component: KazeComponent;
  let fixture: ComponentFixture<KazeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KazeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KazeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
