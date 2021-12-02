import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaDetalleUsuarioComponent } from './ruta-detalle-usuario.component';

describe('RutaDetalleUsuarioComponent', () => {
  let component: RutaDetalleUsuarioComponent;
  let fixture: ComponentFixture<RutaDetalleUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaDetalleUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaDetalleUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
