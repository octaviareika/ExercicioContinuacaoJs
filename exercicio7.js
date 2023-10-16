
// intercalar vetor 
let vetorA = [2, 4, 6, 8, 10];
let vetorB = [1, 3, 5, 7, 9];

let vetorC = [];
let j = 0;
let h = 0;
for (let i = 0; i < 5; i++){
        vetorC[j++] = vetorB[i]
        vetorC[j++] = vetorA[i];
    
}

console.log(vetorC);