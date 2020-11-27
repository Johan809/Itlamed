import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultsPage } from './consults.page';

describe('ConsultsPage', () => {
  let component: ConsultsPage;
  let fixture: ComponentFixture<ConsultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
