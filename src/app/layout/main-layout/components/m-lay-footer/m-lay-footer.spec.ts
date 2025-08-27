import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLayFooter } from './m-lay-footer';

describe('MLayFooter', () => {
  let component: MLayFooter;
  let fixture: ComponentFixture<MLayFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MLayFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLayFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
