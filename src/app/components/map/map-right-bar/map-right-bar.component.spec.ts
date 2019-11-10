import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapRightBarComponent } from './map-right-bar.component';

describe('MapRightBarComponent', () => {
  let component: MapRightBarComponent;
  let fixture: ComponentFixture<MapRightBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapRightBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapRightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
