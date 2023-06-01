import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarpaComponent } from './darpa.component';

describe('DarpaComponent', () => {
  let component: DarpaComponent;
  let fixture: ComponentFixture<DarpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarpaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
