import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificativaComponent } from './justificativa.component';

describe('JustificativaComponent', () => {
  let component: JustificativaComponent;
  let fixture: ComponentFixture<JustificativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustificativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
