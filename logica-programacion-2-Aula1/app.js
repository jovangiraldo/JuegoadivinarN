/* -----> PRACTICA #3 <-----
function IMC(estatura,kg){

    const estaturaEnMetros = estatura / 100;

   
    const imc = kg / (estaturaEnMetros ** 2);

    console.log(`El IMC es: ${imc.toFixed(2)}`);

}

IMC(1.75,78);



function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact *= i;
    }

    console.log(`El factorial es: ${fact}`);
}

factorial(4);

*/
/* ----> PRACTICA #1
boton1.addEventListener('click',()=>{
   let ciudad =prompt('nombre de una ciudad en colombia');
    alert(`Estuve en ${ciudad} y me acordé de ti.`)

}); 

boton2.addEventListener('click', ()=>{
    let numero = parseInt(prompt('ingresa el primer numero'));
    let numero1 = parseInt(prompt('ingresa el segundo numero'));

    alert(`la suma de los numero es: ${numero+numero1}`)
})

boton2.removeAttribute('disabled');



function intentos(){

    while(NumeroUs<5){
    
        if(NumeroUs === NumberA){
            alert('Felicidades adivinaste el numero');
            break;
        }
    
        else if(NumeroUs > NumberA){
        alert('el numero es mayor al aleatorio');
        }
        else if(NumeroUs < NumberA){
            alert('el numero es menor al aleatorio');
            }
           NumeroUs++
    } 
    if(NumeroUs === 5){
       alert('Se acabaron los intentos');
    
    }
    
}
*/
/* --->PRACTICA #2 FUNCIONES 
function hola(){
    console.log("¡Hola, mundo!" );
    
}


function Usu(name){
    console.log(`¡Hola, ${name}!`) ;
    
}
Usu('jovan')

function Doble(number){
    console.log(`El doble es: ${number*2}`) ;
    
}
Doble(2);

function Prom(one,two,three){
    console.log(`El promedio es: ${(one+two+three)/3}`) ;
    
}
Prom(2,3,4)


function mayor(one,two){
    if(one>two){
       console.log(`El mayor es:${one}`);
    }
    else{
        console.log(`El mayor es:${two}`)
    }
    
}
mayor(4,5)

function multi(one){
    console.log(`resultado multi por si mismo :${one*one}`)
    
}

multi(100)<----*/

const boton1 = document.querySelector('button');
const boton2 = document.querySelector('#reiniciar')
let intentos = 0;
let lista = [];
let numMax = 10;
const NumberA = NumeroAleatorio();


function NumeroAleatorio() {
    let aleatorio = Math.floor(Math.random() * numMax + 1);
    if(lista.length == numMax){
   AsignarElemento('p','Ya se sortearon los numeros')
    }else{
    if (lista.includes(aleatorio)) {
        return NumeroAleatorio();
    }
    else {
        lista.push(aleatorio);
        return aleatorio;
    }

}
}
console.log(NumeroAleatorio)
console.log(lista)

function AsignarElemento(elemento, texto) {
    const ElementoHTML = document.querySelector(elemento);
    ElementoHTML.textContent = texto;
}
AsignarElemento('h1', 'game guees number')
AsignarElemento('p', 'ingresa un numero del 1 al 10')


function VerificarIntento() {
    let NumeroUsuario = parseInt(document.getElementById('Numero').value);
    if (NumeroUsuario === NumberA) {
        AsignarElemento('p', ` Felicidades Acertaste ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`)
        HabilitarBoton();
    }
    else {
        if (NumeroUsuario > NumberA) {
            AsignarElemento('p', 'El numero aleatorio es menor')
        }
        else {
            AsignarElemento('p', 'El numero aleatorio es mayor')
        }
        intentos++

        limpiarCampo();
    }
    
}

function HabilitarBoton() {
    let boton2 = document.querySelector('#reiniciar');
    boton2.removeAttribute('disabled');

}

function limpiarCampo() {
    let valorCampo = document.querySelector('#Numero');
    valorCampo.value = '';
}

boton1.addEventListener('click', () => {

    NumeroAleatorio();
    VerificarIntento()

});


boton2.addEventListener('click', () => {
    window.location.reload();
});




