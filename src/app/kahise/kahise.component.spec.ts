import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KahiseComponent } from './kahise.component';

describe('KahiseComponent', () => {
  let component: KahiseComponent;
  let fixture: ComponentFixture<KahiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KahiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KahiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
