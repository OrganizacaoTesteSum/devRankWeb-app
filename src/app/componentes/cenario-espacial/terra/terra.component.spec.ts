import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerraComponent } from './terra.component';

describe('TerraComponent', () => {
  let component: TerraComponent;
  let fixture: ComponentFixture<TerraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
