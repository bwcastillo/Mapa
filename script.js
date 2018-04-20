
//Aquí se agrega el mapabase dentro de la variable "mymap", además se les proporcionan algunas características iniciales 
var mymap = L.map('mapid',{maxBounds:[
    [-33.328620, -70.939942],
    [-33.619460, -70.700762]
]}).setView([-33.532898, -70.756266], 12); /*-33.5359312, -70.789277*/
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>, Autor:Bryan Castillo M. - Geografía', minZoom:10 ,maxZoom: 17, id: 'mapbox.streets',accessToken: 'pk.eyJ1IjoiYndjYXN0aWxsbyIsImEiOiJjaXpxZ2s5ZTcwMWptMzJueWJ5dW03cWxwIn0.Sod29kk9UzEzM1ZGfRi1VQ'}).addTo(mymap);
	
//Llamo al objeto geoJson base "Barrios" que está fijado en el mapa mymap
L.geoJson(barrios,{ onEachFeature: popup,weight: 2, opacity: 1, color: "#000000", dashArray: '3',fill: "false", fillOpacity: 0.1}).addTo(mymap);

//  Variables declaradas como LayerGroup, las que traen los objetos a ser cartografeados en leaflet luego de ser agrupados en el layer control declarado en la variable overlays

var grupo= new L.LayerGroup();
var flaco = new L.LayerGroup();
var eia= new L.LayerGroup();
var EEdPtoVer= new L.LayerGroup();
var BiblVerd= new L.LayerGroup();
var EcoSed= new L.LayerGroup();
var PtoLim= new L.LayerGroup();
var MinPtoVer= new L.LayerGroup();
var edAmOct= new L.LayerGroup();
var edAmSep= new L.LayerGroup();
var edAmAgo= new L.LayerGroup();
var edamjul= new L.LayerGroup();
var edamjun= new L.LayerGroup();
var edAmMay= new L.LayerGroup();
var edAmAbr= new L.LayerGroup();
var edAmMar= new L.LayerGroup();
var bicis= new L.LayerGroup();
var Campvid= new L.LayerGroup();
var rutaAgua= new L.LayerGroup();
var cerEstEdMun= new L.LayerGroup();
var cultivaTuSalud= new L.LayerGroup();
var pacTrenAlMel= new L.LayerGroup();
var pacOleoduc= new L.LayerGroup();
var contAceit= new L.LayerGroup();
/*var overlayX= new L.LayerGroup();
var overlayY= new L.LayerGroup(); */

//Variable que agrupa los Layergroup que searán ejecutados en el Layer Control
var overlays =
{"Ciclovías": bicis, "Campanas de vidrio (reciclaje)": Campvid,"Puntos verdes": PtoLim, " Contenedores para reciclar aceites domiciliarios": contAceit, "Mini punto verde": MinPtoVer,  "Ecobibliotecas": BiblVerd, "Sedes sustentables":EcoSed,  "Establecimiento educacional punto verde": EEdPtoVer,"Proyectos con Declaración de Impacto Ambiental (DIA)": flaco,"Proyectos con Estudios de Impacto Ambiental (EIA)": eia, "Educación ambiental marzo 2017": edAmMar, "Educación ambiental abril 2017": edAmAbr,"Educación ambiental mayo 2017":edAmMay, "Educación ambiental junio 2017":edamjun, "Educación ambiental julio 2017":edamjul, "Educación ambiental agosto 2017":edAmAgo, "Educación ambiental septiembre 2017":edAmSep, "Educación ambiental octubre 2017":edAmOct,  "Certificación Ambiental de establecimientos educacionales":cerEstEdMun,  "Ruta del agua":rutaAgua, "Actividades Emblemáticas":grupo, "Programa Cultiva tu Salud":cultivaTuSalud, "Participación ciudadana proyecto Tren Melipilla Alamaeda": pacTrenAlMel, "Participación ciudadana proyecto Segunda Línea Oleoducto M-AAMB":pacOleoduc, /*Nombre de la capa X a desplegar: overlayX, Nombre de la capa Y a desplegar: overlayY*/ };

//Variables globales que busca los atributos en google drive a través de Tabletop ( Por lo que me di cuenta en líneas y procesos posteriores, hice un montón de variables globales innecesarias para los bucle de las distintas funciones; las iteraciones de éstas últimas, quedan almacenadas en la variable o layer que forma un LayerGroup, sin influir al resto de ellas)

var a, b, c, d, e, f, g ,h,i,j,k,l,m,n,o,p,q,r,s,t;
var coorA, coorB, coorC, coorD, coorE, coorF, coorG, coorH, coorI, coorJ, coorK, coorL, coorM, coorN,coorO, coorP, coorQ, coorR, coorde;
var lat= 'Latitud';
var lat_j= 'latj';
var lat_k= 'latk';
var lat_l= 'latl';
var lat_m= 'latm';
var lat_n= 'latn';
var lat_o= 'lato';
var lat_p= 'latp';
var lat_q= 'latq';
var lat_r= 'latr';
var lng= 'Longitud';
var lng_j= 'lngj';
var lng_k= 'lngk';
var lng_l= 'lngl';
var lng_m= 'lngm';
var lng_n= 'lngn';
var lng_o= 'lngo';
var lng_p= 'lngp';
var lng_q= 'lngq';
var lng_r= 'lngr';

//Nueva variable global que busca longitud y latitud
var longitud= 'lng';
var latitud= 'lat';

// Variable global para convertir coordenadas 
var latA,latB,latC,latD,latE,latF,latG,latH,latI,latJ,latK,latL,latM,latN,latO,latP,latQ,latR;
var lngA,lngB,lngC,latD,lngE,lngF,lngG,lngH,lngI,lngJ,lngK,lngL,lngM,lngN,latO,lngP,lngQ,lngR;

//Nueva variable global para buscar longitud y latitud
var lnG, laT;

//var global reemplazo;
var reemp=" ";
//var global dirección
var adress= " ";
//var globales A 
var nomEstabl, lvlCert ;
//var globales B ,C,D,E,F,G,H,I,J,M
var progra, nomTall, lug, horari, encar, fechIni;
//var globales K
var nomProy, descProy;
//var gloables L
var nombBibl;
//var globales M
var tipoEnv;
//var globales N 
var status;
// var globales O,P
var queRecic;
// var gloables Q
var numPara;
// var globales R
var barrio;
// var gloables S
var tipo, fecha;
//var globales U V
var comuAfect;
var tipology;
var titular;
var inversion;

/* // Variables globales  de X e Y 
var nombreDeVariableGlobalX;
var otraVariableGlobalX;
var nombreDeVariableGlobalY;
var otraVariableGlobalY;*/



// Variable que hace referencia a la tabla drive 
var publicSpreadsheetUrla = 'https://docs.google.com/spreadsheets/d/1dtaMxRz7RRBZU8nkaiBRSd-8kPShVRgVzEpYdA-vMGg/edit#gid=0';
var publicSpreadsheetUrlb= 'https://docs.google.com/spreadsheets/d/14B9n-n1y6knJtSEE0t6fGuH9nLr3lkfMaxUZ5Cq9yVQ/edit#gid=0';
var publicSpreadsheetUrlc= 'https://docs.google.com/spreadsheets/d/1v1daCCv9QxPWye6-QErr5H4O_Kz0YPXslXOGPoQtSBY/edit#gid=0';
var publicSpreadsheetUrld= 'https://docs.google.com/spreadsheets/d/1Heeoa59TXr2OONcoAvguf7MMlrXlCdWZ4bhMq9AseLc/edit#gid=0';
var publicSpreadsheetUrle= 'https://docs.google.com/spreadsheets/d/1WyS-EJGPwjXZhjfj5on-WRA1urZ0YPsiWWKoJnYw2N4/edit#gid=0';
var publicSpreadsheetUrlf= 'https://docs.google.com/spreadsheets/d/178-cBz50rzFdcgCzKvGVrhyh1ydP2Q84-jRqhGJ4qXc/edit#gid=0';
var publicSpreadsheetUrlg= 'https://docs.google.com/spreadsheets/d/11ahA4OesCGyMPQ_zqTqndmaszl594hUgE6TRmw-JY04/edit#gid=0';
var publicSpreadsheetUrlh= 'https://docs.google.com/spreadsheets/d/1AR4hu51fGBzdnLp-a9ltV1G3CVfyX-11qPaqzBFhZ5Y/edit#gid=0';
var publicSpreadsheetUrli= 'https://docs.google.com/spreadsheets/d/1W0z-spcigoni0bAwwK--AzE1O1nvbo1ZC2GhbOzcWGo/edit#gid=0';
var publicSpreadsheetUrlj= 'https://docs.google.com/spreadsheets/d/1XKCCnTe7d2QlXSP39ncRk9wAqH6p6J1MjZYFESHP2eI/edit#gid=0';
var publicSpreadsheetUrlk= 'https://docs.google.com/spreadsheets/d/1lu94QuJEVJS7LwchzEYOrk0O_8YAKLYxNsHa6Ynyc8I/edit#gid=0';
var publicSpreadsheetUrll= 'https://docs.google.com/spreadsheets/d/1ew-yWgHwi5Abt6b8FVOY3ATX9wcBuX1h91-KByxzAS8/edit#gid=0';
var publicSpreadsheetUrlm= 'https://docs.google.com/spreadsheets/d/1tyz6zddhGx5pMV0r0iMZsj96wgiZlWfuT-SXXyeEXs4/edit#gid=0';
var publicSpreadsheetUrln= 'https://docs.google.com/spreadsheets/d/1IGDIjtu1r5OP2-geCUrkMaA0v_ZSfiuh8N1pqNM-Qk4/edit#gid=0';
var publicSpreadsheetUrlo= 'https://docs.google.com/spreadsheets/d/1zQ0gcK7DbVuuWLymP6XuxETLxsCdeOExVxBoaKnHkYQ/edit#gid=0';
var publicSpreadsheetUrlp='https://docs.google.com/spreadsheets/d/1xnSKjRbpEF9mMKkG72bsH5sf-er6QOlPSZsWOgJmB34/edit#gid=0';
var publicSpreadsheetUrlq='https://docs.google.com/spreadsheets/d/1En4PupkUwo2HUOyV5sQ_U2pcnSi6p1ePcZJXornhZVY/edit#gid=0';
var publicSpreadsheetUrlr='https://docs.google.com/spreadsheets/d/1a314Q1QbaVDuF1NVjz_mhtQmehDypNDYXxM7-E0b_bM/edit#gid=0';
var publicSpreadsheetUrls='https://docs.google.com/spreadsheets/d/1B8wIliqJh4u4Yd61oCGcD4OINzLU-qIDWcRGXGxcMzE/edit#gid=0';
var publicSpreadsheetUrlt='https://docs.google.com/spreadsheets/d/1V8sicXr5pIs6qcKMCsO7pXdP8cP5dK6plLcn9901o7k/edit#gid=0';
var publicSpreadsheetUrlu='https://docs.google.com/spreadsheets/d/1pHLRR8zfOthdP9tmjLLsSj2dzFfyMtDpZST2oA8UDeY/edit#gid=0';
var publicSpreadsheetUrlv='https://docs.google.com/spreadsheets/d/1l3rIJtw2f520Z-mdwkR2DXvlUZiRcAdn2QJFw1hYy1U/edit#gid=0';
var publicSpreadsheetUrlw='https://docs.google.com/spreadsheets/d/1X1eHLzv-1GeocOl6ID6LfcXMpO83RTSqgdhvsiLding/edit#gid=0';

/* 

var publicSpreadsheetUrlx= 'LINK DE LA HOJA EN MODO PÚBLICO';
var publicSpreadsheetUrlY= 'LINK DE LA HOJA EN MODO PÚBLICO';

*/


// Iteración busca datos en el google drive a través de Tabletop

// A: Certificación ambiental de establecimientos educacionales en 2017

function showInfoa(marcadoresa) {
                       for (num=0; num<marcadoresa.length; num++)
					   {current=marcadoresa[num];
					var latA= current[lat];
					var lngA= current[lng];
						latA =latA.replace(",",".");
						lngA =lngA.replace(",",".");
						coorA= [latA, lngA];
						
		//Iteración de los atributos extraídos:
						
						nomEstabl=current['Nombre del Establecimiento'];
						lvlCert=current['Nivel de Certificación obtenido'];
						adress=current['direccion'];
						
		//Creación de los marcadores
						
						L.marker(coorA,{icon: L.AwesomeMarkers.icon({
      icon: 'education', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(cerEstEdMun).bindPopup("<b>Nombre del Establecimiento:</b><br>"+nomEstabl+"<br><br><b> Nivel de certificado obtenido:</b><br>"+lvlCert+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}
	// B: Educación ambiental marzo 2017
function showInfob(marcadoresb) {
                       for (num=0; num<marcadoresb.length; num++)
					   {current=marcadoresb[num];
					var latB= current[lat];
					var lngB= current[lng];
						latB =latB.replace(",",".");
						lngB =lngB.replace(",",".");
						coorB= [latB, lngB];
		
		//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						;
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
		
		//Creación de los marcadores
						
						L.marker(coorB,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edAmMar).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
					   }
				   ;}
// C: Educación ambiental abril 2017
function showInfoc(marcadoresc) {
                       for (num=0; num<marcadoresc.length; num++)
					   {current=marcadoresc[num];
					var latC= current[lat];
					var lngC= current[lng];
						latC =latC.replace(",",".");
						lngC =lngC.replace(",",".");
						coorC= [latC, lngC];
							//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
						
			//Creación de los marcadores
						
			L.marker(coorC,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edAmAbr).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}
// D: Educación ambiental mayo 2017
function showInfod(marcadoresd) {
                       for (num=0; num<marcadoresd.length; num++)
					   {current=marcadoresd[num];
					var latD= current[lat];
					var lngD= current[lng];
						latD =latD.replace(",",".");
						lngD =lngD.replace(",",".");
						coorD= [latD, lngD];
						
						//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
						
			//Creación de los marcadores
						
			L.marker(coorD,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edAmMay).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller</b><br>"+nomTall+"<br><br><b>Lugar</b><br>"+lug+"<br><br><b>Encargado</b><br>"+encar+"<br><br><b>Dirección</b><br>"+adress)
					   }
				   ;}
	
// E: Educación ambiental junio 2017
function showInfoe(marcadorese) {
                       for (num=0; num<marcadorese.length; num++)
					   {current=marcadorese[num];
					var latE= current[lat];
					var lngE= current[lng];
						latE =latE.replace(",",".");
						lngE =lngE.replace(",",".");
						coorE= [latE, lngE];
						
						//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
						
				//Creación de los marcadores
						
			L.marker(coorE,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edamjun).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}

// F: Educación ambiental julio 2017
function showInfof(marcadoresf) {
                       for (num=0; num<marcadoresf.length; num++)
					   {current=marcadoresf[num];
					var latF= current[lat];
					var lngF= current[lng];
						latF =latF.replace(",",".");
						lngF =lngF.replace(",",".");
						coorF= [latF, lngF];
						
						//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
						
						//Creación de los marcadores
						
			L.marker(coorF,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edamjul).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}

// G: Educación ambiental agosto 2017
function showInfog(marcadoresg) {
                       for (num=0; num<marcadoresg.length; num++)
					   {current=marcadoresg[num];
					var latG= current[lat];
					var lngG= current[lng];
						latG =latG.replace(",",".");
						lngG =lngG.replace(",",".");
						coorG= [latG, lngG];
						
		//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
						
						//Creación de los marcadores
						
			L.marker(coorG,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edAmAgo).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}
	
// H: Educación ambiental septiembre 2017
function showInfoh(marcadoresh) {
                       for (num=0; num<marcadoresh.length; num++)
					   {current=marcadoresh[num];
					var latH= current[lat];
					var lngH= current[lng];
						latH =latH.replace(",",".");
						lngH =lngH.replace(",",".");
						coorH= [latH, lngH];
						
						//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
						
						//Creación de los marcadores
						
			L.marker(coorH,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edAmSep).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}
	
// I: Educación ambiental octubre 2017
function showInfoi(marcadoresi) {
                       for (num=0; num<marcadoresi.length; num++)
					   {current=marcadoresi[num];
					var latI= current[lat];
					var lngI= current[lng];
						latI =latI.replace(",",".");
						lngI =lngI.replace(",",".");
						coorI= [latI, lngI];
						
					
						//Iteración de los atributos extraídos:
						progra= current['PROGRAMA'];
						nomTall= current['NOMBRE TALLER'];
						lug= current['LUGAR'];
						horari= current['DÍA - HORA'];
						encar= current['ENCARGADO'];
						adress = current ['direccion'];
				
						//Creación de los marcadores
						
			L.marker(coorI,{icon: L.AwesomeMarkers.icon({
      icon: 'tree-deciduous', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(edAmOct).bindPopup("<b>Programa:</b><br>"+progra+"<br><br> <b> Nombre del taller:</b><br>"+nomTall+"<br><br><b>Lugar:</b><br>"+lug+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}

// J: PROGRAMA CULTIVA TU SALUD
function showInfoj(marcadoresj) { 
                       for (num=0; num<marcadoresj.length; num++)
					   {current=marcadoresj[num];
					var latJ= current[lat];
					var lngJ= current[lng];
						latJ =latJ.replace(",",".");
						lngJ =lngJ.replace(",",".");
						coorJ= [latJ, lngJ];
			
						
						//Iteración de los atributos extraídos:
						lug= current['LUGAR'];
						adress = current ['direccion'];
						
						//Creación de los marcadores
							
						L.marker(coorJ,{icon: L.AwesomeMarkers.icon({
      icon: 'apple', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(cultivaTuSalud).bindPopup("<b>Lugar donde se ejecuta el programa:</b><br>"+lug+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}
// K: Proyectos emblemáticos
function showInfok(marcadoresk) { 
                       for (num=0; num<marcadoresk.length; num++)
					   {current=marcadoresk[num];
					var latK= current[lat];
					var lngK= current[lng];
						//latK =latK.replace(",",".");
						//lngK =lngK.replace(",",".");
						coorK= [lngK, latK];
					
						//Iteración de los atributos extraídos:
						nomProy= current['Nombre del proyecto'];
						descProy= current ['Descripción del proyecto'];
						adress=current['direccion'];
						
						//Creación de los marcadores
						
						L.marker(coorK,{icon: L.AwesomeMarkers.icon({
      icon: 'certificate', 
      prefix: 'glyphicon', markerColor:'green',iconColor:'white', spin:'true'})}).addTo(grupo).bindPopup("<b>Nombre del proyecto:</b><br>"+nomProy+"<br><br><b>Descripción del proyecto:</b><br>"+descProy+"<br><br><b>Dirección:<br></b>"+adress )
						
					   }
				   ;}
	
// L: Bibliotecas
function showInfol(marcadoresl) { 
                       for (num=0; num<marcadoresl.length; num++)
					   {current=marcadoresl[num];
					var latL= current[lat];
					var lngL= current[lng];
						latL =latL.replace(",",".");
						lngL =lngL.replace(",",".");
						coorL= [latL, lngL];
						
						//Iteración de los atributos extraídos:
						nombBibl= current['Nombre'];
						horari= current ['Horarios'];
						adress=current['direccion'];
						
						//Creación de los marcadores
					
						L.marker(coorL,{icon: L.AwesomeMarkers.icon({
      icon: 'book', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(BiblVerd).bindPopup("<b>Nombre biblioteca:</b><br>"+nombBibl+"<br><br><b>Horario:</b><br>"+horari+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}
//M: Campanas de vidrio
function showInfom(marcadoresm) { 
                       for (num=0; num<marcadoresm.length; num++)
					   {current=marcadoresm[num];
					var latM= current[lat];
					var lngM= current[lng];
						latM =latM.replace(",",".");
						lngM =lngM.replace(",",".");
						coorM= [latM, lngM];
				//Iteración de los atributos extraídos:
						
						lug=current['Ubicación campanas'];
						tipoEnv=current['Tipos de envases'];
						adress=current['direccion'];
						
						//Creación de los marcadores
						
						L.marker(coorM,{icon: L.AwesomeMarkers.icon({
      icon: 'bell', 
      prefix: 'glyphicon', markerColor:'green',spin:'true'})}).addTo(Campvid).bindPopup("<b>Nombre de la ubicación:</b><br>"+lug+"<br><br><b>Envase de vidrios permitidos:</b><br>"+tipoEnv+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}

	// N: Establecimiento educacional punto verde
function showInfon(marcadoresn) { 
                       for (num=0; num<marcadoresn.length; num++)
					   {current=marcadoresn[num];
					var latN= current[lat];
					var lngN= current[lng];
					latN =latN.replace(",",".");
						lngN =lngN.replace(",",".");
						coorN= [latN, lngN];
				//Iteración de los atributos extraídos:
						
						nomEstabl=current['Establecimiento'];
						status=current['Estado'];
						adress=current['direccion'];
						
						
						//Creación de los marcadores
						
						L.marker(coorN,{icon: L.AwesomeMarkers.icon({
      icon: 'cloud-upload', 
      prefix: 'glyphicon', markerColor:'darkgreen'})}).addTo(EEdPtoVer).bindPopup("<b>Nombre del establecimiento:</b><br>"+nomEstabl+"<br><br><b>Estado del punto limpio:</b><br>"+status+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}  
	
//O: MINI PUNTO LIMPIO
function showInfoo(marcadoreso) { 
                       for (num=0; num<marcadoreso.length; num++)
					   {current=marcadoreso[num];
					var latO= current[lat];
					var lngO= current[lng];
				//	latN =latN.replace(",",".");
				//	lngN =lngN.replace(",",".");
						coorO= [latO, lngO];
				//Iteración de los atributos extraídos:
					lug=current['Lugar'];
					queRecic=current['Material Reciclaje'];
					adress=current['direccion'];
					horari=current['Horario de atención'];
					encar=current['Contacto'];
						
						//Creación de los marcadores
					
				
						L.marker(coorO,{icon: L.AwesomeMarkers.icon({
      icon: 'leaf', 
      prefix: 'glyphicon', markerColor:'green',spin:'true'})}).addTo(MinPtoVer).bindPopup("<b>Nombre de la ubicación:</b><br>"+lug+"<br><br><b>Que reciclar:</b><br>"+queRecic+"<br><br><b>Horario de atención:</b><br>"+horari+"<br><br><b>Encargado:</b><br>"+encar+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}  

//P : Punto limpio	
function showInfop(marcadoresp) { 
                       for (num=0; num<marcadoresp.length; num++)
					   {current=marcadoresp[num];
					var latP= current[lat];
					var lngP= current[lng];
				latP =latP.replace(",",".");
				lngP =lngP.replace(",",".");
						coorP= [latP, lngP];
							//Iteración de los atributos extraídos:
					lug=current['Nombre'];
					queRecic=current['Que reciclar'];
					adress=current['direccion'];
						
						//Creación de los marcadores
					
					L.marker(coorP, {icon: L.AwesomeMarkers.icon({
      icon: 'globe',prefix: 'glyphicon', markerColor:'green',spin:'true', iconColor : 'white',extraClasses: "data-fa-transform: shrink-8 down-6"})}).addTo(PtoLim).bindPopup("<b>Nombre de la ubicación:</b><br>"+lug+"<br><br><b>Que reciclar:</b><br>"+queRecic+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}  
	
//Q: Ruta del agua
function showInfoq(marcadoresq) { 
                       for (num=0; num<marcadoresq.length; num++)
					   {current=marcadoresq[num];
					var latQ= current[lat];
					var lngQ= current[lng];
						latQ =latQ.replace(",",".");
						lngQ =lngQ.replace(",",".");
						coorQ= [latQ, lngQ];
						//Iteración de los atributos extraídos:
						numPara=current['N° de parada'];
						lug=current['Nombre parada'];
						adress=current['direccion'];
						
						//Creación de los marcadores
						
						L.marker(coorQ,{icon: L.AwesomeMarkers.icon({
      icon: 'flag', 
      prefix: 'glyphicon', markerColor:'lightblue',iconColor: 'yellow'})}).addTo(rutaAgua).bindPopup("<b>Número de parada:</b><br>"+numPara+"<br><br><b>Nombre de la parada:</b><br>"+lug+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}  
	
//R: Sedes sustentables
function showInfor(marcadoresr) { 
                       for (num=0; num<marcadoresr.length; num++)
					   {current=marcadoresr[num];
					var latR= current[lat];
					var lngR= current[lng];
						latR =latR.replace(",",".");
						lngR =lngR.replace(",",".");
						coorR= [latR, lngR];
						//Iteración de los atributos extraídos:
						lug=current['Nombre'];
						status=current['Estado'];
					barrio=current['Barrio'];	adress=current['direccion'];
						
						//Creación de los marcadores
						
						L.marker(coorR,{icon: L.AwesomeMarkers.icon({
      icon: 'home', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(EcoSed).bindPopup("<b>Nombre de la sede:</b><br>"+lug+"<br><br><b>Vigencia:</b><br>"+status+"<br><br><b>Barrio:</b><br>"+barrio+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}  
//S: PAC Tren Melipilla alameda
function showInfos(marcadoress) { 
                       for (num=0; num<marcadoress.length; num++)
					   {current=marcadoress[num];
					var laT= current[lat];
					var lnG= current[lng];
						laT =laT.replace(",",".");
						lnG =lnG.replace(",",".");
						coorde= [laT, lnG];
						//Iteración de los atributos extraídos:
						lug= current['Lugar'];
						tipo= current['Tipo'];
						fecha=current['Fecha'];
					adress=current['Dirección'];
						barrio=current['Barrio'];

						//Creación de los marcadores
					
						L.marker(coorde,{icon: L.AwesomeMarkers.icon({
      icon: 'user', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(pacTrenAlMel).bindPopup("<b>Tipo de participación ciudadana (PAC):</b><br>"+tipo+"<br><br><b>Fecha de realización</b><br>"+fecha+"<br><br><b>Lugar</b><br>"+lug+"<br><br><b>Barrio</b><br>"+barrio+"<br><br><b>Dirección</b><br>"+adress)
						
					   }
				   ;}  
	
//T: Segunda Línea Oleoducto M-AAMB
function showInfot(marcadorest) { 
                      for (num=0; num<marcadorest.length; num++)
					   {current=marcadorest[num];
					var laT= current[lat];
					var lnG= current[lng];
						laT =laT.replace(",",".");
						lnG =lnG.replace(",",".");
						coorde= [laT, lnG];
						//Iteración de los atributos extraídos:
						lug= current['Lugar'];
						tipo= current['Tipo'];
						fecha=current['Fecha'];
					adress=current['Dirección'];
						barrio=current['Barrio'];
						
						//Creación de los marcadores

						L.marker(coorde,{icon: L.AwesomeMarkers.icon({
      icon: 'user', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(pacOleoduc).bindPopup("<b>Tipo de participación ciudadana (PAC):</b><br>"+tipo+"<br><br><b>Fecha de realización</b><br>"+fecha+"<br><br><b>Lugar</b><br>"+lug+"<br><br><b>Barrio</b><br>"+barrio+"<br><br><b>Dirección</b><br>"+adress)
						
					   }
				   ;} 
// U: EIA
function showInfou(marcadoresu) { 
                      for (num=0; num<marcadoresu.length; num++)
					   {current=marcadoresu[num];
					var laT= current[lat];
					var lnG= current[lng];
						laT =laT.replace(",",".");
						lnG =lnG.replace(",",".");
						coorde= [laT, lnG];
						//Iteración de los atributos extraídos:
					nomProy= current['NOMBRE_PROYECTO'];
						status= current['ESTADO_EVALUACION'];
						fecha=current['FECHA_PRESENTACION'];
					tipology=current['NOMBRE_TIPOLOGIA'];
						titular=current['TITULAR'];
						inversion=current['INVERSION_US'];
						comuAfect=current['COMUNAS'];
						
						//Creación de los marcadores
						
						L.marker(coorde,{icon: L.AwesomeMarkers.icon({
      icon: 'screenshot', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(eia).bindPopup("<b>Nombre proyecto:</b><br>"+nomProy+"<br><br><b>Fecha de presentación</b><br>"+fecha+"<br><br><b>Estado de evaluación</b><br>"+status+"<br><br><b>Comunas que afecta:</b><br>"+comuAfect+"<br><br><b>Tipo de proyecto</b><br>"+tipology+"<br><br><b>Titular</b><br>"+titular+"<br><br><b>Inversión</b><br>"+inversion)
						
					   }
				   ;}  

//V: DIA

function showInfov(marcadoresv) { 
                      for (num=0; num<marcadoresv.length; num++)
					   {current=marcadoresv[num];
					var laT= current[lat];
					var lnG= current[lng];
						laT =laT.replace(",",".");
						lnG =lnG.replace(",",".");
						coorde= [laT, lnG];
						//Iteración de los atributos extraídos:
						nomProy= current['NOMBRE_PROYECTO'];
						status= current['ESTADO_EVALUACION'];
						fecha=current['FECHA_PRESENTACION'];
					tipology=current['NOMBRE_TIPOLOGIA'];
						titular=current['TITULAR'];
						inversion=current['INVERSION_US'];
						comuAfect=current['COMUNAS'];
						
						//Creación de los marcadores

						L.marker(coorde,{icon: L.AwesomeMarkers.icon({
      icon: 'pushpin', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(flaco).bindPopup("<b>Nombre proyecto:</b><br>"+nomProy+"<br><br><b>Fecha de presentación</b><br>"+fecha+"<br><br><b>Estado de evaluación</b><br>"+status+"<br><br><b>Comunas que afecta:</b><br>"+comuAfect+"<br><br><b>Tipo de proyecto</b><br>"+tipology+"<br><br><b>Titular</b><br>"+titular+"<br><br><b>Inversión</b><br>"+inversion)
						
					   }
				   ;} 
//W : Contenedores de aceites
function showInfow(marcadoresw) { 
                       for (num=0; num<marcadoresw.length; num++)
					   {current=marcadoresw[num];
					var latP= current[lat];
					var lngP= current[lng];
				latP =latP.replace(",",".");
				lngP =lngP.replace(",",".");
						coorP= [latP, lngP];
							//Iteración de los atributos extraídos:
					lug=current['Nombre'];
					queRecic=current['Que reciclar'];
					adress=current['direccion'];
						
						//Creación de los marcadores
					
					L.marker(coorP, {icon: L.AwesomeMarkers.icon({
      icon: 'filter',prefix: 'glyphicon', markerColor:'orange',spin:'true', iconColor : 'white',extraClasses: "data-fa-transform: shrink-8 down-6"})}).addTo(contAceit).bindPopup("<b>Nombre de la ubicación:</b><br>"+lug+"<br><br><b>Que reciclar:</b><br>"+queRecic+"<br><br><b>Dirección:</b><br>"+adress)
						
					   }
				   ;}  

//X : Nueva capa de info X

/*function showInfox(marcadoresx) { 
                       for (num=0; num<marcadoresx.length; num++)
					   {current=marcadoresx[num];
					var laT= current[lat];
					var lnG= current[lng];
						laT =laT.replace(",",".");
						lnG =lnG.replace(",",".");
						coorde= [laT, lnG];
							//Iteración de los atributos extraídos:
					nombreDeVariableGlobalX=current['NOMBRE DEL ATRIBUTO EN LA TABLA DE GOOGLE DOCS'];
					otraVariableGlobalX=current['NOMBRE DEL ATRIBUTO EN LA TABLA DE GOOGLE DOCS'];
					
					//Creación de los marcadores
					
							L.marker(coorde,{icon: L.AwesomeMarkers.icon({
      icon: 'pushpin', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(overlayX).bindPopup("<b>Títúlo I:</b><br>"+nombreDeVariableGlobalX+"<br><br><b>Título II</b><br>"+otraVariableGlobalX)
						
					   }
				   ;} 
				   
//Y : Nueva capa de info Y

function showInfoy(marcadoresy) { 
                       for (num=0; num<marcadoresy.length; num++)
					   {current=marcadoresy[num];
						var laT= current[lat];
						var lnG= current[lng];
						laT =laT.replace(",",".");
						lnG =lnG.replace(",",".");
						coorde= [laT, lnG];
							//Iteración de los atributos extraídos:
					nombreDeVariableGlobalY=current['NOMBRE DEL ATRIBUTO DE LA TABLA EN GOOGLE DOCS'];
					otraVariableGlobalY=current['NOMBRE DEL ATRIBUTO DE LA TABLA EN GOOGLE DOCS'];
					
					//Creación de los marcadores
					
						L.marker(coorde,{icon: L.AwesomeMarkers.icon({
      icon: 'pushpin', 
      prefix: 'glyphicon', markerColor:'green'})}).addTo(noverlayY).bindPopup("<b>Títúlo I:</b><br>"+nombreDeVariableGlobalY+"<br><br><b>Título II</b><br>"+otraVariableGlobalY)
						
					   }
				   ;}  */
						
					

					
// Función que ejecuta la iteración anterior dentro de la función "showInfo" a través del callback 
function setup()  {
a = Tabletop.init( { key: publicSpreadsheetUrla,
                   callback: showInfoa,
                   simpleSheet: true }
			  	)
b = Tabletop.init( { key: publicSpreadsheetUrlb,
                   callback: showInfob,
                   simpleSheet: true }
			  	)
c = Tabletop.init( { key: publicSpreadsheetUrlc,
                   callback: showInfoc,
                   simpleSheet: true }
			  	) 
d = Tabletop.init( { key: publicSpreadsheetUrld,
                   callback: showInfod,
                   simpleSheet: true }
			  	)
e = Tabletop.init( { key: publicSpreadsheetUrle,
                   callback: showInfoe,
                   simpleSheet: true }
			  	)
f = Tabletop.init( { key: publicSpreadsheetUrlf,
                   callback: showInfof,
                   simpleSheet: true }
			  	)
g = Tabletop.init( { key: publicSpreadsheetUrlg,
                   callback: showInfog,
                   simpleSheet: true }
			  	)
h = Tabletop.init( { key: publicSpreadsheetUrlh,
                   callback: showInfoh,
                   simpleSheet: true }
			  	)
i = Tabletop.init( { key: publicSpreadsheetUrli,
                   callback: showInfoi,
                   simpleSheet: true }
			  	)
j = Tabletop.init( { key: publicSpreadsheetUrlj,
                   callback: showInfoj,
                   simpleSheet: true }
			  	)
k = Tabletop.init( { key: publicSpreadsheetUrlk,
                   callback: showInfok,
                   simpleSheet: true }
			  	)
l = Tabletop.init( { key: publicSpreadsheetUrll,
                   callback: showInfol,
                   simpleSheet: true }
			  	)
m = Tabletop.init( { key: publicSpreadsheetUrlm,
                   callback: showInfom,
                   simpleSheet: true }
			  	)
n = Tabletop.init( { key: publicSpreadsheetUrln,
                   callback: showInfon,
                   simpleSheet: true }
			  	) 
o = Tabletop.init( { key: publicSpreadsheetUrlo,
                   callback: showInfoo,
                   simpleSheet: true }
			  	) 

p = Tabletop.init( { key: publicSpreadsheetUrlp,
                   callback: showInfop,
                   simpleSheet: true }
			  	) 
q = Tabletop.init( { key: publicSpreadsheetUrlq,
                   callback: showInfoq,
                   simpleSheet: true }
			  	) 
r = Tabletop.init( { key: publicSpreadsheetUrlr,
                   callback: showInfor,
                   simpleSheet: true }
			  	) 
s = Tabletop.init( { key: publicSpreadsheetUrls,
                   callback: showInfos,
                   simpleSheet: true }
			  	) 
t = Tabletop.init( { key: publicSpreadsheetUrlt,
                   callback: showInfot,
                   simpleSheet: true }

			  	) 
u = Tabletop.init( { key: publicSpreadsheetUrlu,
                   callback: showInfou,
                   simpleSheet: true }

			  	) 
v = Tabletop.init( { key: publicSpreadsheetUrlv,
                   callback: showInfov,
                   simpleSheet: true }

			  	) 
w = Tabletop.init( { key: publicSpreadsheetUrlw,
                   callback: showInfow,
                   simpleSheet: true }

			  	) 
/* x = Tabletop.init( { key: publicSpreadsheetUrlx,
                   callback: showInfox,
                   simpleSheet: true }

			  	)  */
/* y = Tabletop.init( { key: publicSpreadsheetUrly,
                   callback: showInfoy,
                   simpleSheet: true }

			  	) */

};

// Llamo a la función "setup" de Tabletop que es la que contiene las funciones y parámetros para ejecutar la hoja drive a Leaflet
setup();
	
//LLamo a la función control.layer 
L.control.layers(overlays).addTo(mymap).setPosition('bottomleft').expand();
	
//Llamo al objeto GeoJson de ciclovías
L.geoJson(bicivias,{color:  '#FFFFFF',dashArray: '8',}).addTo(bicis);