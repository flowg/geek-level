import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekometerComponent } from './geekometer.component';

describe('GeekometerComponent', () => {
  let component: GeekometerComponent;
  let fixture: ComponentFixture<GeekometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeekometerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
