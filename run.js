import {
    clearScreen,
    line,
    loading,
    read, readPassword,
    textColor,
    write
} from "./utils/functions.mjs";


const password = "senha";
const systemName = "Sistema ESTAGIARIOS";


function login() {
  let pass = "";
  let login = "";
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

    login = read("Login: ");
    pass = readPassword("Senha: ");
    if (cont === 2) {
      write("");
      write("Numeros de tentativas excedidas.. programa sera finalizado");
      write("Pressione ENTER para finalizar");
      read("");
      return "";
    }
  }
  return login;
}

async function program() {
  let user = login();

  if (user != "") {
    clearScreen();
    write(user + "  seja bem vindo!!!!");
    write("Aqui faria meu programa");
  } else {
    write("Voce teve o acesso negado");
    write("Acabou meu programa");
  }
}

await loading(); // aqui chamo o carregando
program(); // aqui chamo meu programa
