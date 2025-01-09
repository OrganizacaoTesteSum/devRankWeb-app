import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteCardComponent } from './participante-card.component';

describe('ParticipanteCardComponent', () => {
  let component: ParticipanteCardComponent;
  let fixture: ComponentFixture<ParticipanteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipanteCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipanteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
