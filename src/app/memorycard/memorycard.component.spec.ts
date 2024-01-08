import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorycardComponent } from './memorycard.component';

describe('MemorycardComponent', () => {
  let component: MemorycardComponent;
  let fixture: ComponentFixture<MemorycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemorycardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
