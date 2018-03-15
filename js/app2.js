
var display = document.getElementById("display")
var signoPress = false
var operandos = {
            operador: "",
            operadorAnt: "",
            numAnt: 0,
            x: 0,
            y: 0,
            total: 0
        }

var calculadora = {
  init: function(){
      var self = this
      var on = document.getElementById('on');
      var sign = document.getElementById('sign');
      var raiz = document.getElementById('raiz');
      var dividido = document.getElementById('dividido');
      var por = document.getElementById('por');
      var menos = document.getElementById('menos');
      var punto = document.getElementById('punto');
      var igual = document.getElementById('igual');
      var mas = document.getElementById('mas');
      var cero = document.getElementById('0');
      var uno = document.getElementById('1');
      var dos = document.getElementById('2');
      var tres = document.getElementById('3');
      var cuatro = document.getElementById('4');
      var cinco = document.getElementById('5');
      var seis = document.getElementById('6');
      var siete = document.getElementById('7');
      var ocho = document.getElementById('8');
      var nueve = document.getElementById('9');

      sign.addEventListener(  "click",function(){animar(sign);self.signo();})
      dividido.addEventListener("click",function(){animar(dividido);self.operandos("/");})
      por.addEventListener("click",function(){animar(por);self.operandos("*");})
      menos.addEventListener("click",function(){animar(menos);self.operandos("-");})
      punto.addEventListener("click",function(){animar(punto);self.numero(".");})
      igual.addEventListener("click",function(){animar(igual);self.operandos("=");})
      mas.addEventListener("click",function(){animar(mas);self.operandos("+");})
      cero.addEventListener("click",function(){animar(cero);self.numero("0");})
      uno.addEventListener("click",function(){animar(uno);self.numero("1");})
      dos.addEventListener("click",function(){animar(dos);self.numero("2");})
      tres.addEventListener("click",function(){animar(tres);self.numero("3");})
      cuatro.addEventListener("click",function(){animar(cuatro);self.numero("4");})
      cinco.addEventListener("click",function(){animar(cinco);self.numero("5");})
      seis.addEventListener("click",function(){animar(seis);self.numero("6");})
      siete.addEventListener("click",function(){animar(siete);self.numero("7");})
      ocho.addEventListener("click",function(){animar(ocho);self.numero("8");})
      nueve.addEventListener("click",function(){animar(nueve);self.numero("9");})
      on.addEventListener("click",function(){animar(on);self.teclaON();
      })
      raiz.addEventListener("click",function(){animar(raiz);
        display.innerHTML= Math.sqrt(parseFloat(display.innerHTML))
        acomodarDisplay()
      })
      function formatoNumero(numero){
            var redondeo = 0
        }
      },
//Crea los métodos que sean necesarios para que al presionar una tecla numérica,
//se muestre el número correspondiente en la pantalla
  numero: function(n){
         var num = display.innerHTML
         var self = this
         var limite = 8
// si hay un putno decimal en la cadena el limite será de 9 digitos
         if(num.indexOf(".") != -1){
          if (n =="."){
              n = ""
          }
          limite = 9
         }
// Si el número actual en pantalla es cero y el número digitado es diferente del punto decimal
//Debes verificar si en la pantalla se encuentra sólo el número cero,
//que no se puedan agregar más números cero. Además debes hacer que si en pantalla
// está sólo el cero, al presionar otro número diferente, éste debe reemplazar al cero inicial.
         if (num=="0" && n != "."){
             num = ""
         }
         if (operandos.operador.length > 0){
             num = ""
             operandos.operadorAnt = operandos.operador
             operandos.numAnt = parseFloat(display.innerHTML)
             operandos.operador = ""
         }
//Realiza una validación para la pantalla, en la que sólo se puedan mostrar 8 dígitos. Si el número digitado,
//o el resultado de una operación posee un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.
         if (display.innerHTML.length < limite) {
             display.innerHTML = num + n
         }


      },
// Debes crear un método que añada el signo negativo al presionar la tecla +/- a un número en pantalla.
//Si el número sólo es un cero, no se debe agregar el signo, además debes verificar que si el signo menos
// ya está en pantalla, al presionar la tecla se borre.
   teclaON: function (){
     display.innerHTML = "0"
     operandos.numAnt = 0
     operandos.operador = ""
     operandos.operadorAnt = ""
   },
   signo: function (){
     var num = display.innerHTML
     var self = this
     if(num.indexOf("-") == -1 ){
      if (num != "0") {
       num = "-" + display.innerHTML
       display.innerHTML = num
      }
     }
     else {
       num = num.substr(1)
       display.innerHTML = num
     }

   },
//El objeto Calculadora debe implementar las cuatro operaciones matemáticas básicas, de tal manera que al
//presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en
//medio de una operación. Posteriormente se muestra el segundo número de la operación en pantalla.
//Para realizar la operación, debes asignar los métodos necesarios para que al presionar el botón igual,
//se ejecute el procedimiento correspondiente. Debes realizar métodos que reciban parámetros y retornan valores
   operandos: function(operacion){
       if (signoPress) {
         operandos.y = parseFloat(display.innerHTML)
         switch (operandos.operadorAnt) {
           case '+':
              operandos.total = operandos.x + operandos.y
              break;
           case '-':
              operandos.total = operandos.x - operandos.y
              break;
           case '*':
              operandos.total = operandos.x * operandos.y
              break;
          case '/':
             operandos.total = operandos.x / operandos.y
             break;

         }
         operandos.x = operandos.total
       }
       if (operacion == "=") {
         display.innerHTML = operandos.total
         acomodarDisplay()
         signoPress = false
         operandos.x = operandos.total
         operandos.y = 0
       }
       else {
           if (signoPress) {
             operandos.x = operandos.total
             display.innerHTML = ""
           }
           else {
             operandos.x = parseFloat(display.innerHTML)
             display.innerHTML = ""
             signoPress = true
           }
       }
     operandos.operadorAnt = operacion
   }
  }

  function acomodarDisplay(){
    var cadena = display.innerHTML
    var numero = parseFloat(cadena)
    limite = 8
    if (cadena.indexOf(".") != -1){
        limite++
    }
    if (cadena.indexOf("-")!= -1){
        limite++
    }

    if (cadena.length > limite){
        if (numero - numero.toFixed(0) == 0){
            display.innerHTML = numero
        }
         else {
             display.innerHTML = parseFloat(cadena).toPrecision(8)
         }

    }
}

function animar(btn){
btn.style.transform="scale(0.9)";
setTimeout(function () {
btn.style.transform="scale(1)";
}, 200);
}

calculadora.init()
