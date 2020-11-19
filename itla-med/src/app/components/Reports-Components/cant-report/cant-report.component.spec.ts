import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantReportComponent } from './cant-report.component';

describe('CantReportComponent', () => {
  let component: CantReportComponent;
  let fixture: ComponentFixture<CantReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
