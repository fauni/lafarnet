import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformsComponent } from './proforms.component';

describe('ProformsComponent', () => {
  let component: ProformsComponent;
  let fixture: ComponentFixture<ProformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
