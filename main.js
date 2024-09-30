var título = document.querySelector(".título");
título.textContent = "Wendel Nutrição";

var pacientes = document.querySelector("#paciente");
for (var i = 0; i < 5; i++) {
  var tdPeso = paciente[i].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = pacientes[i].querySelector(".info-imc");

var pesoVal = true;
var alturaVal =true;

if (peso < 0 || peso > 600) {

  tdImc.textContent = "peso inválido";
  pesoVal = false;
  pacientes [i].style.color = "orange";

}

if (altura < 0 || altura > 2.80) {

  tdImc.textContent = "altura não existente"
  alturaVal =false;
}

if (pesoVal && alturaVal) {

  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}
}
