var tabla,lista,celda,texto,supercel;

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

function AgregarFinal(){

	// hacer dos if con lineas, para el espacio y para sin el, omitir el for
	var valor="____________";
	for (var j = 0; j < 3; j++) {
	celda=document.createElement("td");
	texto=document.createTextNode(valor);
	celda.appendChild(texto);
	if (lista.hasChildNodes())
			    lista.insertBefore(celda,lista.childNodes[0]);
			else
			    lista.appendChild(celda);
	}
	lista=document.createElement("tr")//se crea
			tabla.appendChild(lista);

}	

