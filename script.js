function encriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById("resultado").value = resultado;
    document.getElementById("texto").value = ""; 
    document.getElementById("resultado").style.backgroundImage="none"; 
  }
  
  function desencriptar() {
    var texto = document.getElementById("texto").value;
    var resultado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("resultado").value = resultado;
    document.getElementById("texto").value = "";
    document.getElementById("resultado").style.backgroundImage="none";
  }
  
  function copiar() {
    var resultado = document.getElementById("resultado");
    resultado.select();
    document.execCommand("copy");
    alert("¡Texto copiado al portapapeles!");
  }
  