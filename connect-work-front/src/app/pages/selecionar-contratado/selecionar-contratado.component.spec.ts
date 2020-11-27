import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarContratadoComponent } from './selecionar-contratado.component';

describe('SelecionarContratadoComponent', () => {
  let component: SelecionarContratadoComponent;
  let fixture: ComponentFixture<SelecionarContratadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionarContratadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarContratadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
