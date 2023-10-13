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
export function numeros(){
    let dia = readInt("Dia que nasceu: ");
    let mes = readInt("Mês do seu nascimento: ");
    let ano = readInt("Ano do seu nascimento: ");
    
    while (dia > 25) {
      dia -= 25;
    }

    while (ano > 25) {
      ano -= 25;
    }

    clearScreen();
    header()    
    write('Numeros gerados  => ' + textColor(dia,'yellow') + ', ' +textColor(mes,'yellow') +', ' + textColor(ano,'yellow'));
    
    write('');
    read('Pressione ' + textColor('ENTER', 'yellow') + ' para voltar ao menur');
}