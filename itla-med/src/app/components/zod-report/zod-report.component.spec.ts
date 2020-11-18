import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodReportComponent } from './zod-report.component';

describe('ZodReportComponent', () => {
  let component: ZodReportComponent;
  let fixture: ComponentFixture<ZodReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZodReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
