function novoSalario(salario, plano){
    if (plano == "A" ){
        return salario + (salario * 0.10);
    }
    else if (plano == "B"){
        return salario + (salario * 0.15);
    }
    else if (plano == "C"){
        return salario + (salario * 0.20);
    }
    else {
        console.log("Plano inválido");
        return;
    }
}

console.log(novoSalario(2000, "A"));
console.log(novoSalario(3130, "B"));
console.log(novoSalario(4900, "D"));
