//h1 {color: red} etiqueta
//.parrafito {...} clase
//·pid {...} id

const h1 = document.querySelector("h1");
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form') 

form.addEventListener('submit', sumarImputsValues);

//lo que me envia el addEventListenner es un event
 function sumarImputsValues(event){
     console.log({event});
     event.preventDefault();
     const sumaInputs = input1.value + input2.value;
     console.log(+sumaInputs);//cambia el valor a numero
     pResult.innerText = "El Resultado es: " + parseInt(sumaInputs);
 }




 