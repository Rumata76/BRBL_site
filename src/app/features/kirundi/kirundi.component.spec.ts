import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirundiComponent } from './kirundi.component';

describe('KirundiComponent', () => {
  let component: KirundiComponent;
  let fixture: ComponentFixture<KirundiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KirundiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KirundiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
