import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeLatestNewsComponent } from './three-latest-news.component';

describe('ThreeLatestNewsComponent', () => {
  let component: ThreeLatestNewsComponent;
  let fixture: ComponentFixture<ThreeLatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeLatestNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeLatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
