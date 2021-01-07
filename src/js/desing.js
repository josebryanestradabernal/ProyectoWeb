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

	alert(sup+","+inf);

	var hx2=hx.join('');


	var nombres = new Array(
		new Array(777777,888888,878887,788878,878777,777878,888878,878888,778777,777877,888777,777888,777787,787777,888788,887888,877887,788778,888877,778888,787887,788787,788888,888887,777887,788777,788887,877778,878878,787787,877788,887778,777788,887777,787888,888787,778787,787877,878788,887878,788877,778887.877777,777778,877888,888778,877878,878778,877787,787778,887887,788788,778788,887787,787788,778778,877877,778878,878877,778877,887788,878787,787878),
		new Array("Chi'en","K'un","Chun","Meng","Hsü","Sung","Shih","Pi","Hsiao Ch'u","Lü","T'ai","P'i","T'ung Jen","Ta Yu","Ch'ien","Yü","Sui","Ku","Lin","Kuan","Shih Ho","Pi","Po","Fu","Wu Wang","Ta Ch'u","I","Ta Kuo","K'an","Li","Hsien","Heng","Tun","Ta Chuang","Chin","Ming I","Chia Jen","K'uei","Chien","Hsieh","Sun","I","Kuai","Kou","Ts'ui","Sheng","K'un","Ching","Ko","Ting","Chen","Ken","Chien","Kuei Mei","Feng","Lü","Sun","Tui","Huan","Chieh","Chung Fu","Hsiao Kuo","Chi CHi","Wei Chi"));

	for(var x=0;x<=63,x++){
		if(hx2==nombres[x]){
			alert(nombres[x][x]);
			break;
		}
	}

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
