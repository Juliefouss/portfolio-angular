import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationJulieFoussComponent } from './navigation-julie-fouss.component';

describe('NavigationJulieFoussComponent', () => {
  let component: NavigationJulieFoussComponent;
  let fixture: ComponentFixture<NavigationJulieFoussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationJulieFoussComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationJulieFoussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
