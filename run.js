import {  clearScreen, line, loading, readChar, systemName, textColor, top, write } from "./utils/functions.mjs";
import { login } from './login/login.mjs'
import { calc } from './calculadora/calc.mjs';
import { media } from './media/media.mjs'
import { numeros } from "./number/numbers.mjs";
import { saques } from "./banco/saque.mjs";


const opcao = {
  soma      : '1',
  media     : '2',
  lotofacil : '3',
  saques    : '4',
  sair      : '0'
}

async function menu(){
  let key = ''  
  while  (key != '0') {
    clearScreen();
    top();
    write(textColor(opcao.soma, 'yellow') + ' - Programa de Soma');
    write(textColor(opcao.media, 'yellow') + ' - Programa de Média');
    write(textColor(opcao.lotofacil, 'yellow') + ' - Numeros Lotofacil');
    write(textColor(opcao.saques, 'yellow') + ' - Saque');
    write('');
    write(textColor(opcao.sair, 'yellow') + ' - Finalizar Programa');
    write('');
    key = readChar('Escolha sua opcao: ', '$1$2$3$4$0');

    if (key === opcao.soma) {
       calc();
    } else if (key === opcao.media) {
      media();
     } else if (key === opcao.lotofacil) {
      numeros();
    } else if (key === opcao.saques) {
      // await loading();
      saques();
     }

  }
}


async function program() {  
  // let user = login(systemName);
  // if (user != "") {
  //   menu();
  // } 
  menu();
}
// await loading(); // aqui chamo o carregando
program(); // aqui chamo meu programa

