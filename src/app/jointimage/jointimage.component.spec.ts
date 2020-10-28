import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointimageComponent } from './jointimage.component';

describe('JointimageComponent', () => {
  let component: JointimageComponent;
  let fixture: ComponentFixture<JointimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JointimageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JointimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
