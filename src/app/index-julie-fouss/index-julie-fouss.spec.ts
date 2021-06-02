import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexJulieFoussComponent } from './index -julie-fouss.component';

describe('IndexJulieFoussComponent', () => {
  let component: IndexJulieFoussComponent;
  let fixture: ComponentFixture<IndexJulieFoussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexJulieFoussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexJulieFoussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
