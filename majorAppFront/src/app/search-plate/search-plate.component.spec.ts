import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPlateComponent } from './search-plate.component';

describe('SearchPlateComponent', () => {
  let component: SearchPlateComponent;
  let fixture: ComponentFixture<SearchPlateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPlateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
