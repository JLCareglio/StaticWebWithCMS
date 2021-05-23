/* Este Script sirve para construir los placeholders de carga de contenido,
en las etiquetas '<div class="placeholder-content-X"></div>'reemplaza la X
por un numero superior a 3 y este cambiara el largo del placeholder*/

var divs = document.getElementsByTagName("div");
for (let p_c of divs) {
  if (p_c.className.includes("placeholder-content-")) {
    let cant_p = p_c.className.match(/\d+/)[0];
    p_c.className = "placeholder-content";
    let p_c_i;
    for (let i = 0; i < 7; i++) {
      p_c_i = document.createElement("div");
      p_c_i.className = "placeholder-content_item";
      p_c.appendChild(p_c_i);
    }
    for (let i = 0; i < cant_p - 2; i++) {
      p_c_i = document.createElement("div");
      p_c_i.className = "placeholder-content_item";
      p_c_i.style.top = 110 + 34 * i + "px";
      p_c_i.style.height = "12px";
      p_c_i.style.left = "0";
      p_c.appendChild(p_c_i);
    }
    p_c_i.style.height = "20px";
    p_c.style.height = 130 + 34 * (cant_p - 3) + "px";
  }
}
