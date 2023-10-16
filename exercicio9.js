const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Informe o primeiro valor: ', (valor1) => {
  rl.question('Informe o segundo valor: ', (valor2) => {
    const numero1 = parseFloat(valor1);
    const numero2 = parseFloat(valor2);
    const soma = numero1 + numero2;

    console.log(`A soma de ${numero1} e ${numero2} é igual a ${soma}`);
    rl.close();
  });
});
//Este código usa o módulo readline no Node.js para ler as entradas do usuário e realizar a soma. Certifique-se de que você tenha o Node.js instalado e execute o código no ambiente do Node.js.





