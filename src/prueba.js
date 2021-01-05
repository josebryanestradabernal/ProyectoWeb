var tabla,lista,celda,texto;
function iniciar(){
	tabla=document.getElementById("tabla1");
	lista=document.createElement("tr")//se crea
	tabla.appendChild(lista);
}

function AgregarFinal(){
	var valor=prompt("Inserta el valor del elemento");
	celda=document.createElement("td");
	texto=document.createTextNode(valor);
	celda.appendChild(texto);
	lista.appendChild(celda);
}

function AgregarInicio(){
	var valor=prompt("Inserta el valor del elemento");
	celda=document.createElement("td");
	texto=document.createTextNode(valor);
	celda.appendChild(texto);
	if (lista.hasChildNodes())
		lista.insertBefore(celda,lista.childNodes[0]);
	else
		lista.appendChild(celda);
}

function ObtenerElemento(){
	var pos=prompt("De que posición de la lista deseas conocer el valor");
	var elem=lista.childNodes[pos-1];
	var valor=elem.lastChild;
	alert('el valor es: '+valor.nodeValue);
}

function Borrarlista(){
	while(lista.hasChildNodes()){
		lista.removeChild(lista.lastChild);
	}
}

function EliminarFinal(){
	if(lista.hasChildNodes())
		lista.removeChild(lista.lastChild);
}

function EliminarPosicion(){
	if(lista.hasChildNodes()){
		var pos=prompt("¿Que posición de celda deseas eliminar?");
		var elem=lista.childNodes[pos-1];
		alert(elem);
		if(elem)
			lista.removeChild(elem);
		else
			alert("no existe");
	}
}