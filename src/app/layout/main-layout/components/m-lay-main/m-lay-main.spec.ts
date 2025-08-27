import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MLayMain } from './m-lay-main';

describe('MLayMain', () => {
  let component: MLayMain;
  let fixture: ComponentFixture<MLayMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MLayMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MLayMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
