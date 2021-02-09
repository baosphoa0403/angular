import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinLienHeComponent } from './thong-tin-lien-he.component';

describe('ThongTinLienHeComponent', () => {
  let component: ThongTinLienHeComponent;
  let fixture: ComponentFixture<ThongTinLienHeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThongTinLienHeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinLienHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
