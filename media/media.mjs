import { clearScreen, read, readInt, textColor, top, write } from "../utils/functions.mjs";

function header() {
  clearScreen();
  top();
}
function view(total, media) {
    header()  
    write(' Modulo de Media de Idade  ');
    write('Entrevistados: [' + textColor(total, 'yellow_background') +'] ');
    write('');    
    write('Digite ' + textColor('0','yellow') + ' para finalizar as entrevistas');
    write('');    
}
export function media(){
    let age = '';
    let counter = 0;
    let sum = 0;
    while(age != '0') {
      view(counter)
      age = readInt('Digite a idade do entrevistado: ');
      if (age != 0) {
        counter++;
      }
      sum += age;
    }
    clearScreen();
    header()
    sum = sum / counter;
    write('Voce entrevistou => ' + textColor(counter,'yellow_background'));
    write('A media de idade calculada foi de [ ' + textColor(sum,'yellow_background') + ' ]');
    write('');
    read('Pressione ' + textColor('ENTER', 'yellow') + ' para voltar ao menur');
}