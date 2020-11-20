import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultComponent } from './edit-consult.component';

describe('EditConsultComponent', () => {
  let component: EditConsultComponent;
  let fixture: ComponentFixture<EditConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
