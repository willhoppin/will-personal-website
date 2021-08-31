import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FauxFeatureComponent } from './faux-feature.component';

describe('FauxFeatureComponent', () => {
  let component: FauxFeatureComponent;
  let fixture: ComponentFixture<FauxFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FauxFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FauxFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
