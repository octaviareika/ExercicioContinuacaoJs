const nomes = [];

const p = new Promise(function (cumprePromessa){
    cumprePromessa(nomes.push('Ana'), nomes.push('Clara'));
}).then(resposta => console.log(resposta)); 

setTimeout(() => {//callback
    console.log(nomes); // ['Ana', 'Clara']
}, 1000)