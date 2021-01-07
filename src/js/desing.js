var tabla,lista,celda,texto,supercel,cont=0;

function onClickAgregarInText(){ 
   var padre = document.getElementsByClassName("Tiradas")[0];
   
   var input = document.createElement("INPUT");
   input.type = 'text';
   input.className = 'inputText';
   padre.appendChild(input);
}

function iniciar(){
	tabla=document.getElementById("tabla1");
	lista=document.createElement("tr")//se crea
	tabla.appendChild(lista);
}


function contador(){
	if(cont<6){
		cont++
		evalua();
	}
	else
		alert("fin");
}

function evalua(){
	var a,b,c;
	a=parseInt(hexa.tirada1.value,10);
	b=parseInt(hexa.tirada2.value,10);
	c=parseInt(hexa.tirada3.value,10);
	var aux=a+b+c;

	if (aux==6)
		yinmutante();

	if (aux==7)
		yang();

	if (aux==8)
		yin();

	if (aux==9)
		yangmutante();
}

function yang(){
	var valor7="_________";
	lista=document.createElement("tr");
	celda=document.createElement("td");
	texto=document.createTextNode(valor7);
	celda.appendChild(texto);
	lista.appendChild(celda);

	if(tabla.hasChildNodes()){
		tabla.insertBefore(lista,tabla.childNodes[0]);
	}
	else
		tabla.appendChild(lista);
}

function yin(){
	var valor8="____    ____";

	lista=document.createElement("tr");
	celda=document.createElement("td");
	texto=document.createTextNode(valor8);
	celda.appendChild(texto);
	lista.appendChild(celda);

	if(tabla.hasChildNodes()){
		tabla.insertBefore(lista,tabla.childNodes[0]);
	}
	else
		tabla.appendChild(lista);
}

function yangmutante(){
	var valor7="____0____";
	lista=document.createElement("tr");
	celda=document.createElement("td");
	texto=document.createTextNode(valor7);
	celda.appendChild(texto);
	lista.appendChild(celda);

	if(tabla.hasChildNodes()){
		tabla.insertBefore(lista,tabla.childNodes[0]);
	}
	else
		tabla.appendChild(lista);
}

function yinmutante(){
	var valor8="____x____";

	lista=document.createElement("tr");
	celda=document.createElement("td");
	texto=document.createTextNode(valor8);
	celda.appendChild(texto);
	lista.appendChild(celda);

	if(tabla.hasChildNodes()){
		tabla.insertBefore(lista,tabla.childNodes[0]);
	}
	else
		tabla.appendChild(lista);
}



/*
function final(){
	// hacer dos if con lineas, para el espacio y para sin el, omitir el for
	var a,b,c;
	a=parseInt(hexa.tirada1.value,10);
	b=parseInt(hexa.tirada2.value,10);
	c=parseInt(hexa.tirada3.value,10);
	var aux=a+b+c;
	var valor8="____    ____";
	var valor7="_________";
	
	if(aux==7){
		
		lista=document.createElement("tr");
		celda=document.createElement("td");
		texto=document.createTextNode(valor7);
		celda.appendChild(texto);
		lista.appendChild(celda);

		if(tabla.hasChildNodes()){
			tabla.insertBefore(lista,tabla.childNodes[0]);
		}
		else
			tabla.appendChild(lista);
	}

	if(aux==8){
		
		lista=document.createElement("tr");
		celda=document.createElement("td");
		texto=document.createTextNode(valor8);
		celda.appendChild(texto);
		lista.appendChild(celda);

		if(tabla.hasChildNodes()){
			tabla.insertBefore(lista,tabla.childNodes[0]);
		}
		else
			tabla.appendChild(lista);
	}
	
	
}
*/
