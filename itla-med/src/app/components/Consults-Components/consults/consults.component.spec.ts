import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultsComponent } from './consults.component';

describe('ConsultsComponent', () => {
  let component: ConsultsComponent;
  let fixture: ComponentFixture<ConsultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
