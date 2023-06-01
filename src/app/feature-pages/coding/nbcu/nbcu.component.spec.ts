import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbcuComponent } from './nbcu.component';

describe('NbcuComponent', () => {
  let component: NbcuComponent;
  let fixture: ComponentFixture<NbcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NbcuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NbcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
