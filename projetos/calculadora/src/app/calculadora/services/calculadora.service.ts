/**
 * Serviço responsável por executar as oprações da calculadora
 *
 * @autor Elisandro <contato@test.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

// através da anotação Injectable, a classe CalculadoraService fica disponível para as outras
// classe de forma automática.
@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /**
   * Define as contantes utilizadas para identificar as operações de cálculo
   */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  /**
   * Constructor é um método default do TypeScript, ele é utilizado como membro uma class e
   * nós possibilita trabalhar com Injeção de Dependência (DI).
   * O constructor é o primeiro método a ser carregado quando nós instanciamos uma class,
   * no Angular nos podemos inicializar variáveis, e DI
   */
  constructor() { }

  /**
   * Método que calcula uma operação matemática dado
   * dois números.
   * Suporta as operções soma, subtração, divisão
   * e multiplicação
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operacao a ser executada
   * @returns number Resultado da operação
   */

  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operação

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
