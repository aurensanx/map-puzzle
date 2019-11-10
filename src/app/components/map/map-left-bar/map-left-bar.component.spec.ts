import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLeftBarComponent } from './map-left-bar.component';

describe('MapLeftBarComponent', () => {
  let component: MapLeftBarComponent;
  let fixture: ComponentFixture<MapLeftBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLeftBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
