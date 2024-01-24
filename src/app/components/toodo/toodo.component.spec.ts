import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToodoComponent } from './toodo.component';

describe('ToodoComponent', () => {
  let component: ToodoComponent;
  let fixture: ComponentFixture<ToodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
