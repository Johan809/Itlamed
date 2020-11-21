import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZodReportPage } from './zod-report.page';

describe('ZodReportPage', () => {
  let component: ZodReportPage;
  let fixture: ComponentFixture<ZodReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZodReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZodReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
