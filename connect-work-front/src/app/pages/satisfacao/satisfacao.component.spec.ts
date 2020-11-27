import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatisfacaoComponent } from './satisfacao.component';

describe('SatisfacaoComponent', () => {
  let component: SatisfacaoComponent;
  let fixture: ComponentFixture<SatisfacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatisfacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatisfacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
