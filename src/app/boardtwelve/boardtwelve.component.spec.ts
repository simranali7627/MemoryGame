import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardtwelveComponent } from './boardtwelve.component';

describe('BoardtwelveComponent', () => {
  let component: BoardtwelveComponent;
  let fixture: ComponentFixture<BoardtwelveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardtwelveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardtwelveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
