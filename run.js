import {  clearScreen, line, loading, readChar, systemName, textColor, top, write } from "./utils/functions.mjs";
import { login } from './login/login.mjs'
import { calc } from './calculadora/calc.mjs';
import { media } from './media/media.mjs'
import { numeros } from "./number/numbers.mjs";




function menu(){
  let key = ''  
  while  (key != '0') {
    clearScreen();
    top();
    write(textColor('1', 'yellow') + ' - Programa de Soma');
    write(textColor('2', 'yellow') + ' - Programa de Média');
    write(textColor('3', 'yellow') + ' - Numeros Lotofacil');
    write(textColor('0', 'yellow') + ' - Finalizar Programa');
    write('');
    key = readChar('Escolha sua opcao: ', '$1$2$3$0');

    if (key === '1') {
       calc();
    } else if (key === '2') {
      media();
     } else if (key === '3') {
    numeros();
 }
  }
}


async function program() {  
  let user = login(systemName);
  if (user != "") {
    menu();
  } 
}
// await loading(); // aqui chamo o carregando
program(); // aqui chamo meu programa

