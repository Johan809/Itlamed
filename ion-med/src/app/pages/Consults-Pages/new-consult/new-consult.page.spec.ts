import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewConsultPage } from './new-consult.page';

describe('NewConsultPage', () => {
  let component: NewConsultPage;
  let fixture: ComponentFixture<NewConsultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewConsultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewConsultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
