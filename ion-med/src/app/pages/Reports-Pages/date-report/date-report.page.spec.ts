import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DateReportPage } from './date-report.page';

describe('DateReportPage', () => {
  let component: DateReportPage;
  let fixture: ComponentFixture<DateReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DateReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
