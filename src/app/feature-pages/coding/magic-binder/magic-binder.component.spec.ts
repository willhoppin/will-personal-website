import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheeseComponent } from './cheese.component';

describe('CheeseComponent', () => {
  let component: CheeseComponent;
  let fixture: ComponentFixture<CheeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheeseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
