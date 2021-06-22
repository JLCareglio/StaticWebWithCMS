window.addEventListener("load", start);
var nom = document.getElementById("nombre");
var ape = document.getElementById("apellido");
var dni = document.getElementById("dni");
var nac = document.getElementById("nacimiento");
var alt = document.getElementById("altura");
var pes = document.getElementById("peso");
var listaPersonas = [];
var alerta = document.getElementById("alerta");
var tablaPersonas = document.getElementById("tabla");

function Persona(nombre, apellido, documento, nacimiento, altura, peso) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.documento = documento;
  this.nacimiento = nacimiento;
  this.altura = altura;
  this.peso = peso;
}
function start() {
  btnAdd = document.getElementById("btnAgregar");

  btnAdd.addEventListener("click", addPersona);
}

function addPersona() {
  if (validar()) {
    nuevaPersona = new Persona(
      nom.value,
      ape.value,
      dni.value,
      nac.value,
      alt.value,
      pes.value
    );
    listaPersonas.push(nuevaPersona);
    console.log(nuevaPersona);
    let row = tablaPersonas.insertRow(tablaPersonas.rows.length);
    let i = 0;
    for (var p in nuevaPersona) {
      // nuevaPersona.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (nuevaPersona.hasOwnProperty(p)) {
        let cell = row.insertCell(i);
        cell.innerHTML = nuevaPersona[p];
        i++;
      }
    }
  }
}

function validar() {
  if (nom.value.length < 3) {
    alert("error, ingrese un nombre de mas de 2 caracteres");
    nom.style.backgroundColor = "red";
    return false;
  }

  for (let i = 0; i < nom.value.length; i++) {
    const caracter = nom.value[i];
    if (!isNaN(caracter)) {
      alert("error el nombre solo puede contener letras A-Z");
      nom.style.backgroundColor = "red";
      return false;
    }
  }
  if (nom.value.includes("@")) {
    //Si tiene arroba se ejecuta esto
    alert("El nombre tiene un arroba... saca ese arroba");
    return false;
  }

  // Validamos el nacimiento
  let fechaActual = new Date();
  let fechaNac = new Date(nac.value);
  if (fechaNac > fechaActual) {
    alert("la fecha no puede ser una del FUTURO");
    return false;
  }
  return true;
}
