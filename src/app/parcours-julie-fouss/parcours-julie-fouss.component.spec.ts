import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcoursJulieFoussComponent } from './parcours-julie-fouss.component';

describe('ParcoursJulieFoussComponent', () => {
  let component: ParcoursJulieFoussComponent;
  let fixture: ComponentFixture<ParcoursJulieFoussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcoursJulieFoussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcoursJulieFoussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
