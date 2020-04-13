import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDirectiveComponent } from './item-directive.component';

describe('ItemDirectiveComponent', () => {
  let component: ItemDirectiveComponent;
  let fixture: ComponentFixture<ItemDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
