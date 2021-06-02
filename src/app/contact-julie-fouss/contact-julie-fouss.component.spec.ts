import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactJulieFoussComponent } from './contact-julie-fouss.component';

describe('ContactJulieFoussComponent', () => {
  let component: ContactJulieFoussComponent;
  let fixture: ComponentFixture<ContactJulieFoussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactJulieFoussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactJulieFoussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
