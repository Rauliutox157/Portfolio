
//doc ---> apunta al inicio del documento HTML <html>
var doc = $(document);
//ready ---> cuando se HA CARGADO EL HTML COMPLETO:
// - recursos del HEAD: css, fuentes, script js; fontawesonne...
// - del BODY: TODO EL HTML + imagenes...,
// SE EJECUTARÁ LA FUNCION iniciar
doc.ready(iniciar);

function iniciar() {
  console.log('Hola mundo, bienvenidos a JQUERY...');
  var xFEMENINO = $("header nav a#FEMENINO");
  var xACADEMIA = $("header nav a#ACADEMIA");
  var xENTRADAS = $("header nav a#ENTRADAS");
  var xFANS = $("header nav a#FANS");
  var xPRIMEREQUIPO = $("header nav a#PRIMEREQUIPO");
  var xTIENDA = $("header nav a#TIENDA");
  var xCLUB = $("header nav a#CLUB");
  xFEMENINO.click(cargarFEMENINO);
  xACADEMIA.click(cargarACADEMIA);
  xENTRADAS.click(cargarENTRADAS);
  xFANS.click(cargarFANS);
  xPRIMEREQUIPO.click(cargarPRIMEREQUIPO);
  xTIENDA.click(cargarTIENDA);
  xCLUB.click(cargarCLUB);
  var xHome = $("header figure#home");
  xHome.click(cargarHome);

  cargarHome();
}


function cargarHome(){
$("main").load("html/Home.html")
$("head").children().last().remove();
$("head")
.append ("<link rel='stylesheet' type='text/css' href='css/Home.css'>");
}

function cargarFEMENINO(){
    console.log('clickeado FEMENINO');
    //cargar el fichero/html/FEMENINO.html en la <main>
    $("main").load("html/FEMENINO.html")
    $("head").children().last().remove();
    $("head")
          .append ("<link rel='stylesheet' type='text/css' href='css/FEMENINO.css'>");
}
    function cargarACADEMIA(){
      console.log('clickeado ACADEMIA');
      //cargar el fichero/html/ACADEMIA.html en la <main>
      $("main").load("html/ACADEMIA.html")
      $("head").children().last().remove();
      $("head")
          .append ("<link rel='stylesheet' type='text/css' href='css/ACADEMIA.css'>");
}
function cargarENTRADAS(){
  console.log('clickeado ENTRADAS');
  //cargar el fichero/html/ENTRADAS.html en la <main>
  $("main").load("html/ENTRADAS.html")
  $("head").children().last().remove();
  $("head")
          .append ("<link rel='stylesheet' type='text/css' href='css/ENTRADAS.css'>");
}
function cargarFANS(){
  console.log('clickeado FANS');
  //cargar el fichero/html/FANS.html en la <main>
  $("main").load("html/FANS.html");
  $("head").children().last().remove();
  $("head")
          .append ("<link rel='stylesheet' type='text/css' href='css/FANS.css'>");
}
function cargarPRIMEREQUIPO(){
  console.log('clickeado PRIMEREQUIPO');
  //cargar el fichero/html/PRIMEREQUIPO.html en la <main>
  $("main").load("html/PRIMEREQUIPO.html")
  $("head").children().last().remove();
  $("head")
          .append ("<link rel='stylesheet' type='text/css' href='css/PRIMEREQUIPO.css'>");
}
function cargarTIENDA(){
  console.log('clickeado TIENDA');
  //cargar el fichero/html/TIENDA.html en la <main>
  $("main").load("html/TIENDA.html")
  $("head").children().last().remove();
  $("head")
        .append ("<link rel='stylesheet' type='text/css' href='css/TIENDA.css'>");
}
function cargarCLUB(){
  console.log('clickeado CLUB');
  //cargar el fichero/html/CLUB.html en la <main>
  $("main").load("html/CLUB.html")
  $("head").children().last().remove();
  $("head")
        .append ("<link rel='stylesheet' type='text/css' href='css/CLUB.css'>");
}