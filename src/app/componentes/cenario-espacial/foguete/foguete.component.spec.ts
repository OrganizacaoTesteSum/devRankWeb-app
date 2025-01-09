import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogueteComponent } from './foguete.component';

describe('FogueteComponent', () => {
  let component: FogueteComponent;
  let fixture: ComponentFixture<FogueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FogueteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FogueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
