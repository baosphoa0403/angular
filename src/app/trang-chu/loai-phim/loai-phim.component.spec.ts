import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiPhimComponent } from './loai-phim.component';

describe('LoaiPhimComponent', () => {
  let component: LoaiPhimComponent;
  let fixture: ComponentFixture<LoaiPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaiPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaiPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
