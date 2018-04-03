import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAddComponent } from './bank-add.component';

describe('BankAddComponent', () => {
  let component: BankAddComponent;
  let fixture: ComponentFixture<BankAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
