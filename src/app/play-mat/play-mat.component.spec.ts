import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMatComponent } from './play-mat.component';

describe('PlayMatComponent', () => {
  let component: PlayMatComponent;
  let fixture: ComponentFixture<PlayMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayMatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
