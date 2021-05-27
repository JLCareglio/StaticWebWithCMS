/* Script encargado de construir la pagina usando como base de datos
una Hoja de Calculo de Google externa */

// Permite el uso de $ como abreviación a document.getElementById
var $ = function (id) {
  return document.getElementById(id);
};

// Esta es la referencia a la Hoja de Calculo de Google externa
const SPREADSHEET =
  "https://spreadsheets.google.com/feeds/list/1CqMc1KeVl39WRYyrYeszZu1EQVoUB7Lxprroi2iSsc0";

// En la hoja Secciones vemos cuales estan para mostrar luego se actualizan y se muestran.
fetchSecciones();
async function fetchSecciones() {
  const response = await fetch(SPREADSHEET + "/of7ss6r/public/values?alt=json");
  let json_secciones = await response.json();
  json_secciones = json_secciones.feed.entry;

  // Actualizar los contenidos de secciones uno a uno 😎:
  json_secciones[0].gsx$mostrar.$t === "TRUE"
    ? await UpdateIntro()
    : ($("placeholder_sintro").style.display = "none");
  json_secciones[1].gsx$mostrar.$t === "TRUE"
    ? await UpdateCitas()
    : ($("placeholder_scita").style.display = "none");
  json_secciones[2].gsx$mostrar.$t === "TRUE"
    ? await UpdateRecursos()
    : ($("placeholder_srecursos").style.display = "none");
  json_secciones[3].gsx$mostrar.$t === "TRUE"
    ? await UpdateImagenes()
    : ($("placeholder_simagen").style.display = "none");
  json_secciones[4].gsx$mostrar.$t === "TRUE" ? RunTopSecret() : null;

  // Actualizar los contenidos de seciones de forma simultanea 👩‍💻:
  /*   json_secciones[0].gsx$mostrar.$t === "TRUE" ? UpdateIntro() : ($("placeholder_sintro").style.display = "none");
  json_secciones[1].gsx$mostrar.$t === "TRUE" ? UpdateCitas() : ($("placeholder_scita").style.display = "none");
  json_secciones[2].gsx$mostrar.$t === "TRUE" ? UpdateRecursos() : ($("placeholder_srecursos").style.display = "none");
  json_secciones[3].gsx$mostrar.$t === "TRUE" ? UpdateImagenes() : ($("placeholder_simagen").style.display = "none");
  json_secciones[4].gsx$mostrar.$t === "TRUE" ? RunTopSecret() : null; */
  return;
}

// Update & show: 😎 Introducción 📄
async function UpdateIntro() {
  $("placeholder_sintro").style.display = "none";
  $("seccion_introduccion").style.display = "inline";
  await fetch(SPREADSHEET + "/otao8gj/public/values?alt=json")
    .then((resp) => resp.json())
    .then((main) => {
      document.querySelector("#texto1").innerHTML =
        main.feed.entry[0].gsx$contenido.$t;
      document.querySelector("#texto2").innerHTML =
        main.feed.entry[1].gsx$contenido.$t;
    });
  $("placeholder_intro").style.display = "none";
  return;
}

// Update & show: 🤯 Cita Informática Aleatoria 🎲
async function UpdateCitas() {
  $("placeholder_scita").style.display = "none";
  $("seccion_cita").style.display = "inline";
  await fetch(SPREADSHEET + "/od6/public/values?alt=json")
    .then((resp) => resp.json())
    .then((citas) => {
      const r_citas = citas.feed.entry;
      const random = Math.floor(Math.random() * r_citas.length);
      document.querySelector("#cita").innerHTML =
        r_citas[random].gsx$citas.$t +
        "<br><strong>Autor:" +
        r_citas[random].gsx$autores.$t +
        "</strong>";
    });
  $("placeholder_cita").style.display = "none";
  return;
}

// Update & show: 💡 Recursos (Aprende) 💡
async function UpdateRecursos() {
  $("placeholder_srecursos").style.display = "none";
  $("seccion_recursos").style.display = "inline";
  await fetch(SPREADSHEET + "/oq6pdsq/public/values?alt=json")
    .then((resp) => resp.json())
    .then((materiales) => {
      const r_materiales = materiales.feed.entry;
      r_materiales
        .filter((m) => m.gsx$mostrar.$t === "TRUE")
        .forEach((m) => {
          let link = document.createElement("a");
          if (m.gsx$enlace.$t != "") {
            link.setAttribute("href", `${m.gsx$enlace.$t}`);
            link.setAttribute("target", "_blank");
          }
          link.appendChild(document.createTextNode(`${m.gsx$nombre.$t}`));

          let list = document.createElement("li");
          list.appendChild(link);

          $("recursos").appendChild(list);
        });
    });
  $("placeholder_recursos").style.display = "none";
  return;
}

// Update & show: 📷 Imagen Aleatoria 🎲
async function UpdateImagenes() {
  $("placeholder_simagen").style.display = "none";
  $("seccion_imagen").style.display = "inline";
  let random = Math.floor(Math.random() * 100);
  await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + random + "/photos"
  )
    .then((resp) => resp.json())
    .then((fotos) => {
      random = Math.floor(Math.random() * fotos.length);
      const img = document.createElement("img");
      const figcaption = document.createElement("figcaption");
      img.setAttribute("src", `${fotos[random].url}`);
      figcaption.appendChild(document.createTextNode(`${fotos[random].title}`));
      $("imagen").appendChild(img);
      $("imagen").appendChild(figcaption);
    });
  $("placeholder_imagen").style.display = "none";
  return;
}

function RunTopSecret() {
  $("🚧seccion_topsecret🚧").style.display = "inline";
  $("🚧seccion_topsecret🚧").hidden = false;
  console.log("Funcion TopSecreta ejecutada, el codigo es:");
  console.log("🔴🟡🟡🟠🟢🔴🔴🔴🟡🔵🟣🔵⚫");
  return;
}
