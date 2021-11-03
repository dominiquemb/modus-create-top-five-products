import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveProductsComponent } from './top-five-products.component';

describe('TopFiveProductsComponent', () => {
  let component: TopFiveProductsComponent;
  let fixture: ComponentFixture<TopFiveProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFiveProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
