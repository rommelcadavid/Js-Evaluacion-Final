
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
  var resultado = document.getElementById('display');

  sign.addEventListener(  "click",function(){animar(sign);})
  raiz.addEventListener("click",function(){animar(raiz);})
  dividido.addEventListener("click",function(){animar(dividido);})
  por.addEventListener("click",function(){animar(por);})
  menos.addEventListener("click",function(){animar(menos);})
  punto.addEventListener("click",function(){animar(punto);})
  igual.addEventListener("click",function(){animar(igual);})
  mas.addEventListener("click",function(){animar(mas);})
  cero.addEventListener("click",function(){animar(cero);})
  uno.addEventListener("click",function(){animar(uno);})
  dos.addEventListener("click",function(){animar(dos);})
  tres.addEventListener("click",function(){animar(tres);})
  cuatro.addEventListener("click",function(){animar(cuatro);})
  cinco.addEventListener("click",function(){animar(cinco);})
  seis.addEventListener("click",function(){animar(seis);})
  siete.addEventListener("click",function(){animar(siete);})
  ocho.addEventListener("click",function(){animar(ocho);})
  nueve.addEventListener("click",function(){animar(nueve);})



  function animar(btn){
  btn.style.transform="scale(0.9)";
  setTimeout(function () {
  btn.style.transform="scale(1)";
  }, 200);
  }

  window.onload = function () {
      var eqCtl = document.getElementById('eq');
      var currNumberCtl = document.getElementById('display');
      calculator.init(eqCtl, currNumberCtl);
  };

  var calculator = function() {
    var eqCtl,
        currNumberCtl,
        operator,
        operatorSet = false,
        equalsPressed = false,
        lastNumber = null,

        init = function(equals, currNumber) {
            eqCtl = equals;
            currNumberCtl = currNumber;
        },

        add = function(x, y) {
           return x + y;
        },

        subtract = function(x, y) {
            return x - y;
        };
        return {
            init: init
        };
  }();

  numberClick = function(e) {
      var button = (e.target) ? e.target : e.srcElement;
      alert(button.innerHTML);
  }


  on.onclick = function(e){
      resultado.textContent = resultado.textContent  + "1";
}

on.onmousedown = function(e){
    on.style.height="60px";
}

on.onmouseup = function(e){
    on.style.height="63px";
}
