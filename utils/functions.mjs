import readline from "readline-sync";

export const line = '===================================================';

export function read(message) {
  return readline.question(message);
}

export function readChar(message, options) {
    return readline.keyIn(message, { limit: options });
}

export function readFloat(message) {
  return readline.questionFloat(message, { limitMessage: 'Entre com um numero valido'});
}

export function readInt(message) {
  return readline.questionInt(message, { limitMessage: 'Entre com um inteiro valido'});
}

export function readPassword(message) {
  return readline.question(message, { hideEchoBack: true });
}

export function write(message) {
  console.log(message);
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function textColor(message, color) {
  const reset = "\u001b[0m";
  if (color === "blue") {
    return "\u001b[34m" + message + reset;
  } else if (color === "red") {
    return "\u001b[31m" + message + reset;
  } else if (color === "red_background") {
    return "\u001B[41m" + message + reset;
  } else if (color === "yellow") {
    return "\u001b[33m" + message + reset;
  } else if (color === "yellow_background") {
    return "\u001B[43m" + message + reset;
  } else {
    return "\u001b[32m" + message + reset;
  }
}

export function clearScreen() {
    console.clear();
}

export async function loading(){    
  let line = '█';
  
  for (let i = 0; i <= 100; i++) {    
    console.clear();    
    write('[ Carregando ' + i + ' % ....                                                                             ]');
    write(textColor(line, 'green'));    
    line +='█';
    await  sleep(10);    
  }
}
