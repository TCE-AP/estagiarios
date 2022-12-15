import { clearScreen, write, read, readPassword, line,textColor}  from '../utils/functions.mjs';

const password = "senha";

export function login(systemName) {
    let pass = "";
    let user = "";
    let cont = 0;
    while (pass != password) {
      clearScreen();
      write(line);
      write(" Bem vindo ao " + textColor(systemName, "yellow"));
      write(line);
      write("");
  
      if (pass != "") {
        write(textColor("Login /ou/ Senha invalidos", "red"));
        write("");
        cont++;
      }
  
      user = read("Login: ");
      pass = readPassword("Senha: ");
      if (cont === 2) {
        write("");
        write("Numeros de tentativas excedidas.. programa sera finalizado");                
        return "";
      }
    }
    return user;
  }