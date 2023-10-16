//Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true


function divisivelPor3(numero){
    if (numero % 3 == 0){
        return true;
    }

    return false;
}

console.log(divisivelPor3(9));
console.log(divisivelPor3(7));