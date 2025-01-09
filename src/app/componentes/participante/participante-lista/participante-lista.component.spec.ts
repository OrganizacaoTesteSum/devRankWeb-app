import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteListaComponent } from './participante-lista.component';

describe('ParticipanteListaComponent', () => {
  let component: ParticipanteListaComponent;
  let fixture: ComponentFixture<ParticipanteListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipanteListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipanteListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
