var tabla,lista,celda,texto,supercel,cont=6;
var hx= new Array();

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
	if(cont>0){
		cont--
		hx[cont]=evalua();
	}
	else{
		trigra();
	}
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

	return aux;
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

function trigra(){
	var supaux =new Array();

	supaux[0]=hx[0];
	supaux[1]=hx[1];
	supaux[2]=hx[2];

	var infaux=new Array();

	infaux[0]=hx[3];
	infaux[1]=hx[4];
	infaux[2]=hx[5];

	var inf=infaux.join('');
	var sup=supaux.join('');

	alert(inf+","+sup);

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
