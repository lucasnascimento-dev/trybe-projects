/*
Utilize if/else para fazer um programa que retorne o maior de 
dois números. Defina, no começo do programa, duas constantes
com os valores que serão comparados.
*/

let a = 13;
let b = 21;

if (a > b) {
    console.log('o maior número é: ' + a)
}
else {
    console.log('o maior número é: ' + b)
}

/*
Utilize if/else para fazer um programa que retorne o maior de três
números. Defina, no começo do programa, três constantes com os
valores que serão comparados. 
*/

let c = 13;
let d = 21;
let e = 90;


if (c > d && c >e) {
    console.log('o maior número é: ' + c)
}
else if (d > c && d > e){
    console.log('o maior número é: ' + d)
}
else {
    console.log('o maior número é: ' + e)
}