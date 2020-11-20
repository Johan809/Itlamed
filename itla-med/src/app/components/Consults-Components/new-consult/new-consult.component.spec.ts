import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConsultComponent } from './new-consult.component';

describe('NewConsultComponent', () => {
  let component: NewConsultComponent;
  let fixture: ComponentFixture<NewConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
