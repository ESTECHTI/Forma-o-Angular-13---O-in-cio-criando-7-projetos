import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should ...', inject([CalculadoraService],
    (service: CalculadoraService) => {
      expect(service).toBeTruthy();
    }
  ));

  /**
   * inject é um utilitário do Angular para prover uma instância por exemplo
   * do CalculadoraService
   */
  it('should guarantee that 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      // o que essa linha faz é criar uma instância da Calculadora service, para
      // disponibilizar dentro da função
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
  }));
  it('should guarantee that 1 - 4 = 3',
    inject([CalculadoraService], (service: CalculadoraService) => {
      // o que essa linha faz é criar uma instância da Calculadora service, para
      // disponibilizar dentro da função
      let soma = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
      expect(soma).toEqual(-3);
  }));
  it('should guarantee that 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      // o que essa linha faz é criar uma instância da Calculadora service, para
      // disponibilizar dentro da função
      let soma = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(soma).toEqual(0.25);
  }));
  it('should guarantee that 1 * 4 = 4',
    inject([CalculadoraService], (service: CalculadoraService) => {
      // o que essa linha faz é criar uma instância da Calculadora service, para
      // disponibilizar dentro da função
      let soma = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
      expect(soma).toEqual(4);
  }));
  it('should return for invalid operation',
    inject([CalculadoraService], (service: CalculadoraService) => {
      // o que essa linha faz é criar uma instância da Calculadora service, para
      // disponibilizar dentro da função
      let operacaoInvalida = service.calcular(1, 4, '%');
      expect(operacaoInvalida).toEqual(0);
  }));
});
