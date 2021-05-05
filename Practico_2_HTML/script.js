var coll = document.getElementsByClassName("collapsible");
var background = document.getElementsByClassName("background");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      background[0].style.height =
        background[0].offsetHeight - content.scrollHeight + "px";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      background[0].style.height =
        background[0].offsetHeight + content.scrollHeight + "px";
    }
  });
}
