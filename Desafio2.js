//Função que entrega troco com o mínimo de notaas possível e entrega a quantidade de cada nota utilizada
function gerarnotas(valor){
    let n100;
    let n50;
    let n20;
    let n10;
    let n5;
    let n2;
    let n1;
    n100 = Math.floor(valor / 100);
    valor = valor % 100;

    n50 = Math.floor(valor / 50);
    valor = valor % 50; 

    n20 = Math.floor(valor / 20);
    valor = valor % 20;

    n10 = Math.floor(valor / 10);
    valor = valor % 10;

    n5 = Math.floor(valor / 5);
    valor = valor % 5;

    n2 = Math.floor(valor / 2);
    valor = valor % 2;

    n1 = valor

    console.log(`${n100} notas de R$100`);
    console.log(`${n50} notas de R$50`);
    console.log(`${n20} notas de R$20`);
    console.log(`${n10} notas de R$10`);
    console.log(`${n5} notas de R$5`);
    console.log(`${n2} notas de R$2`);
    console.log(`${n1} notas de R$1`);
}
gerarnotas(1158);
