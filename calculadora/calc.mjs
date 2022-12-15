import { clearScreen, read, textColor, top, write } from "../utils/functions.mjs";

function header() {
  clearScreen();
  top();
}
function view(total) {
    header()  
    write(' Modulo de Calculadora    Total: [' + textColor(total, 'yellow_background') +']');
    write('');
    write(textColor('=','yellow') + ' para finalizar a soma');
    write('');
}
export function calc(){
    let value = '';
    let sum = 0;
    while(value != '=') {
      view(sum)
      value = read('Entre com o Valor: ');
      if (value != '=')  {
        sum += parseFloat(value)
      }
    }
    clearScreen();
    header()
    write('TOTAL => ' + textColor(sum,'yellow_background'));
    read('Pressione ' + textColor('ENTER', 'yellow') + ' para voltar ao menur');
}