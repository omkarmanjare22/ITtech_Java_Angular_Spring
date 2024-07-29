import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FresherEmploymentComponent } from './fresher-employment.component';

describe('FresherEmploymentComponent', () => {
  let component: FresherEmploymentComponent;
  let fixture: ComponentFixture<FresherEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FresherEmploymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FresherEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
