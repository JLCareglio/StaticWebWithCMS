var divs = document.getElementsByTagName("div");

for (let p_c of divs) {
  if (p_c.className.includes("placeholder-content-")) {
    let cant_p = p_c.className.match(/\d+/)[0];
    p_c.className = "placeholder-content";
    for (let i = 0; i < cant_p; i++) {
      let p_c_i = document.createElement("div");
      p_c_i.className = "placeholder-content_item";
      p_c.appendChild(p_c_i);
    }
  }
}
