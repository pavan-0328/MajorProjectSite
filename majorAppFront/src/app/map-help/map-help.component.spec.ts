import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHelpComponent } from './map-help.component';

describe('MapHelpComponent', () => {
  let component: MapHelpComponent;
  let fixture: ComponentFixture<MapHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
