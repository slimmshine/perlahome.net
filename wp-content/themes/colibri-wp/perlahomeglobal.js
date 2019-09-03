

var zaglavie = document.querySelector('[data-colibri-id="30-c69"]');
 zaglavie.getElementsByTagName("H2")[0].style.color = "white";

var podzaglavie = document.querySelector('[data-colibri-id="30-c70"]');
 var zzdiv = podzaglavie.getElementsByTagName("DIV")[0];
 var paragraf = zzdiv.getElementsByTagName("P")[0];
 paragraf.style.color = "white";

var arh_raz = document.querySelector('[data-colibri-id="30-c182"]');
var aadiv = arh_raz.getElementsByTagName("DIV")[0];
var aap = aadiv.getElementsByTagName("P")[0];
aap.style.color = "white";


var iimagediv = document.querySelector('[data-colibri-id="30-c28"]');
var iiddiv = iimagediv.getElementsByTagName("DIV")[0];
var iidiv2 = iiddiv.getElementsByTagName("DIV")[0];
var iidimg = iidiv2.getElementsByTagName("IMG")[0];
iidimg.setAttribute("imgid", "interactive-image");

var nnss = document.querySelector('[imgid="interactive-image"]').nextElementSibling;
nnss.setAttribute("divvid", "div-aft-map");


var newMap = document.createElement("map");
newMap.setAttribute("name", "image-map");
var imgparentdiv = document.querySelector('[imgid="interactive-image"]').parentNode;
imgparentdiv.insertBefore(newMap, imgparentdiv.childNodes[6]);