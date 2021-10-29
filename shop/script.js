window.onscroll = function(){stickfilter()};
let filter = document.getElementById('filterdiv');
let filterheight = filter.offsetTop;
function stickfilter() {
    if (window.pageYOffset >= filterheight) {
      filter.classList.add("sticky")
    } else {
      filter.classList.remove("sticky");
    }
}
function hideshow(){
  let nevresp = document.getElementById('nevbar-resp');
  let visibal = document.getElementById('visibality');
  nevresp.classList.toggle("nevbar-resp");
  visibal.classList.toggle("visibality");
}