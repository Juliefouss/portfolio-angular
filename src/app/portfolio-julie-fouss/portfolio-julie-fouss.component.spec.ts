import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioJulieFoussComponent } from './portfolio-julie-fouss.component';

describe('PortfolioJulieFoussComponent', () => {
  let component: PortfolioJulieFoussComponent;
  let fixture: ComponentFixture<PortfolioJulieFoussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioJulieFoussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioJulieFoussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
