var equipoJson;

function cargarDatos(){	
	var equipo = document.getElementById("equipo").value;
	
	switch(equipo) {
		case '1':
			equipoJson = rma;
			break;
		case '2':
			equipoJson = mil;
			break;
		case '3':
			equipoJson = liv;
			break;		
		case '4':
			equipoJson = bmu;
			break;
		case '5':
			equipoJson = bar;
			break;
		case '6':
			equipoJson = mun;
			break;
		case '7':
			equipoJson = int;
			break;		
		case '8':
			equipoJson = juv;
			break;	
		default:
		  	break;
	}
	document.getElementById("tablaEquipo").style = "display:table";
	document.getElementById("botonBorrar").style = "display:block";
	cargarInfo(equipoJson);
}

function cargarInfo(equipoJson){
	var iid;

	for(var i = 0; i < 5; i++){
		iid = i + 1;
		document.getElementById("d" + iid).innerHTML = equipoJson.jugadores[i].dorsal;
		document.getElementById("n" + iid).innerHTML = equipoJson.jugadores[i].nombre;
		document.getElementById("p" + iid).innerHTML = equipoJson.jugadores[i].posicion;
		cargarBandera(iid, equipoJson.jugadores[i].pais);
	}
}

function cargarBandera(iid, pais){
	var bandera = "";

	if (pais == "ARG")
		bandera = "images/argentina.png";
	if (pais == "BRA")	
		bandera = "images/brazil.png";
	if (pais == "CHL")
		bandera = "images/chile.png";
	if (pais == "ENG")	
		bandera = "images/england.png";
	if (pais == "FRA")
		bandera = "images/france.png";	
	if (pais == "GER")
		bandera = "images/germany.png";
	if (pais == "ITA")
		bandera = "images/italy.png";
	if (pais == "NET")
		bandera = "images/netherlands.png";
	if (pais == "POR")
		bandera = "images/portugal.png";
	if (pais == "SCO")
		bandera = "images/scotland.png";
	if (pais == "SER")
		bandera = "images/serbia.png";		
	if (pais == "SPA")
		bandera = "images/spain.png";
	if (pais == "SWE")
		bandera = "images/sweden.png";
	if (pais == "URU")
		bandera = "images/uruguay.png";		
	document.getElementById('f' + iid).src = bandera;
}

function borrarTabla(){
	document.getElementById("tablaEquipo").style = "display:none";
	document.getElementById("botonBorrar").style = "display:none";	
}