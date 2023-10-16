/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout // processo de leitura 
});

rl.question('Informe o valor que queira; ', (valorDinheiro) => {
    let numero = parseInt(valorDinheiro);

    let notaDe100 = Math.floor(numero/100); // quociente
    numero = numero % 100;
    let notaDe50 = Math.floor(numero/50);
    numero = numero % 50;
    let notaDe10 = Math.floor(numero/10);
    numero = numero % 10;
    let notaDe5 = Math.floor(numero/5);
    numero = numero % 5; // a nova quantidade do dinheiro que tem que fazer as operações depois
    let notaDe1 = Math.floor(numero/1); // quantas notas serão necessárias em cada situação
    numero = numero % 1;

    if(notaDe100 > 0){
        console.log(`São ${notaDe100} notas de 100! `);

    }

    if (notaDe50 > 0 ){
        console.log(`São ${notaDe50} notas de 50! `);

    }

    if (notaDe10 > 0){
        console.log(`São ${notaDe10} notas de 10! `);


    }

    if (notaDe5 > 0 ){
        console.log(`São ${notaDe5} notas de 5! `);

    }

    if (notaDe1 > 0){
        console.log(`São ${notaDe1} notas de 1! `);


    }

    rl.close();
})