import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodformComponent } from './codform.component';

describe('CodformComponent', () => {
  let component: CodformComponent;
  let fixture: ComponentFixture<CodformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
