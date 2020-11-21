import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CantReportPage } from './cant-report.page';

describe('CantReportPage', () => {
  let component: CantReportPage;
  let fixture: ComponentFixture<CantReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CantReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
