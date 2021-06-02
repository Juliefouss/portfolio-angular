import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenceJulieFoussComponent } from './competence-julie-fouss.component';

describe('CompetenceJulieFoussComponent', () => {
  let component: CompetenceJulieFoussComponent;
  let fixture: ComponentFixture<CompetenceJulieFoussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenceJulieFoussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenceJulieFoussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
