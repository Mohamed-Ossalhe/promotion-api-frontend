import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KPICardComponent } from './kpicard.component';

describe('KPICardComponent', () => {
  let component: KPICardComponent;
  let fixture: ComponentFixture<KPICardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KPICardComponent]
    });
    fixture = TestBed.createComponent(KPICardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
