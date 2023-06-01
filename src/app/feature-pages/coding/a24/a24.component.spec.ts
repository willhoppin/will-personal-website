import { ComponentFixture, TestBed } from '@angular/core/testing';

import { A24Component } from './a24.component';

describe('A24Component', () => {
  let component: A24Component;
  let fixture: ComponentFixture<A24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ A24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(A24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
