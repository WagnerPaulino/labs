import { TestBed, inject } from '@angular/core/testing';

import { BuscadorService } from './buscador.service';

describe('BuscadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscadorService]
    });
  });

  it('should ...', inject([BuscadorService], (service: BuscadorService) => {
    expect(service).toBeTruthy();
  }));
});
