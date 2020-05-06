import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageairportComponent } from './manageairport.component';

describe('ManageairportComponent', () => {
  let component: ManageairportComponent;
  let fixture: ComponentFixture<ManageairportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageairportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageairportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
