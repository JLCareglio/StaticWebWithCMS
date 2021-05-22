const SPREADSHEET_ID =
  "https://spreadsheets.google.com/feeds/list/1CqMc1KeVl39WRYyrYeszZu1EQVoUB7Lxprroi2iSsc0";
// Update DataBase: Secciones
fetchSecciones();
async function fetchSecciones() {
  const response = await fetch(
    SPREADSHEET_ID + "/of7ss6r/public/values?alt=json"
  );
  let json_secciones = await response.json();
  json_secciones = json_secciones.feed.entry;
  let placeholders = document.getElementsByClassName("placeholder-content");

  json_secciones[0].gsx$mostrar.$t === "TRUE" ? await UpdateIntro() : null;
  placeholders[0].style.display = "none";
  json_secciones[1].gsx$mostrar.$t === "TRUE" ? await UpdateCitas() : null;
  placeholders[1].style.display = "none";
  json_secciones[2].gsx$mostrar.$t === "TRUE" ? await UpdateRecursos() : null;
  placeholders[2].style.display = "none";
  json_secciones[3].gsx$mostrar.$t === "TRUE" ? await UpdateImagenes() : null;
  placeholders[3].style.display = "none";
  json_secciones[4].gsx$mostrar.$t === "TRUE" ? RunTopSecret() : null;
  return;
}

// Update DataBase: Introduccion
async function UpdateIntro() {
  document.getElementById("seccion_introduccion").style.display = "inline";
  await fetch(SPREADSHEET_ID + "/otao8gj/public/values?alt=json")
    .then((resp) => resp.json())
    .then((main) => {
      document.querySelector("#texto1").innerHTML =
        main.feed.entry[0].gsx$contenido.$t;
      document.querySelector("#texto2").innerHTML =
        main.feed.entry[1].gsx$contenido.$t;
    });
  return;
}

// Update DataBase: Citas Informaticas
async function UpdateCitas() {
  document.getElementById("seccion_cita").style.display = "inline";
  await fetch(SPREADSHEET_ID + "/od6/public/values?alt=json")
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
  return;
}
// Update DataBase: Material
async function UpdateRecursos() {
  document.getElementById("seccion_recursos").style.display = "inline";
  await fetch(SPREADSHEET_ID + "/oq6pdsq/public/values?alt=json")
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

          document.getElementById("recursos").appendChild(list);
        });
    });
  return;
}
// Update DataBase: Imagenes
async function UpdateImagenes() {
  document.getElementById("seccion_imagen").style.display = "inline";
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
      document.getElementById("imagen").appendChild(img);
      document.getElementById("imagen").appendChild(figcaption);
    });
  return;
}
async function RunTopSecret() {
  document.getElementById("🚧seccion_topsecret🚧").style.display = "inline";
  document.getElementById("🚧seccion_topsecret🚧").hidden = false;
  console.log("Funcion TopSecreta ejecutada, el codigo es:");
  console.log("🔴🟡🟡🟠🟢🔴🔴🔴🟡🔵🟣🔵⚫");
  return;
}
