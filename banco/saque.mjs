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
export function saques(){
  header();
    let valor = readInt("Valor do saque: ");

    // console.log(calcularNotasNecessarias(valor, 0, {notas: {}}));
    console.log(calcularNotasNecessarias(valor, 0, {}));
    
    
    write('');
    read('Pressione ' + textColor('ENTER', 'yellow') + ' para voltar ao menur');
}


function calcularNotasNecessarias(valor, tentativa, resultado) {
  const  notasDisponiveis = [200, 100, 50, 20, 10, 5, 2];

  if (notasDisponiveis[tentativa] === undefined) {    
    return resultado;
  }

  let divisao = ~~(valor / notasDisponiveis[tentativa]);
  let resto = valor - divisao * notasDisponiveis[tentativa];

  if ([1,3].includes(resto)) divisao -= 1;
  

  if (divisao > 0) {
    valor -= divisao * notasDisponiveis[tentativa];
    resultado += `\n Nota ${notasDisponiveis[tentativa]}  ${textColor(divisao, 'yellow')} `;
    // resultado.notas[notasDisponiveis[tentativa]] = divisao;
  }

  return calcularNotasNecessarias(valor, ++tentativa, resultado);
}