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
	lista=document.createElement("tr")
	tabla.appendChild(lista);
}

function contador(){
	if(cont>0){
		cont--
		hx[cont]=evalua();
	}
	else{
		nombreHexagrama();
		nombreTrigrama();
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

function nombreHexagrama(){
	//Esta funcion obtiene el nombre del hexagrama evaluando un string del los valores obtenidos de la tirada y luego  los compara

	var hx2=hx.join('');


	var nombreshexagramas = [0,"Chi'en","K'un","Chun","Meng","Hsü","Sung","Shih","Pi","Hsiao Ch'u","Lü","T'ai","P'i","T'ung Jen","Ta Yu","Ch'ien","Yü","Sui","Ku","Lin","Kuan","Shih Ho","Pi","Po","Fu","Wu Wang","Ta Ch'u","I","Ta Kuo","K'an","Li","Hsien","Heng","Tun","Ta Chuang","Chin","Ming I","Chia Jen","K'uei","Chien","Hsieh","Sun","I","Kuai","Kou","Ts'ui","Sheng","K'un","Ching","Ko","Ting","Chen","Ken","Chien","Kuei Mei","Feng","Lü","Sun","Tui","Huan","Chieh","Chung Fu","Hsiao Kuo","Chi CHi","Wei Chi"];
	var hexas = [0,777777,888888,878887,788878,878777,777878,888878,878888,778777,777877,888777,777888,777787,787777,888788,887888,877887,788778,888877,778888,787887,788787,788888,888887,777887,788777,788887,877778,878878,787787,877788,887778,777788,887777,787888,888787,778787,787877,878788,887878,788877,778887.877777,777778,877888,888778,877878,878778,877787,787778,887887,788788,778788,887787,787788,778778,877877,778878,878877,778877,887788,878787,787878];
	var y;

	//Este for busca que el string del valor sea igual a alguna posicion e imprime el nombre de la posicion
	for(var x=0;x<=63;x++){
		y=hexas[x];

		if(hx2 == y){
			alert("Hexagrama Numero: "+x);
			alert("Nombre del Hexagrama: "+nombreshexagramas[x]);
			break;
		}

	}


}

function nombreTrigrama(){
	//Esta funcion obtiene el nombre del trigrama inferior y superior, inf y sup son strings que tienen el valor de 7 y 9
	

	var supaux =new Array();
	supaux[0]=hx[0];
	supaux[1]=hx[1];
	supaux[2]=hx[2];

	var infaux=new Array();
	infaux[0]=hx[3];
	infaux[1]=hx[4];
	infaux[2]=hx[5];
	//Estas son los trigramas ya en valores string para usarse con el mapa, posiblemente paasarlos por retunr, supongo
	var inf=infaux.join('');
	var sup=supaux.join('');

	var nombrestrigramas = ["Ch'ien","Chen","K'an","Ken","K'un","Sun","Li","Tui"];
	var trigras =[777,887,878,788,888,778,787,877];
	var y;

	//Este for iguala el string superior con los valores de los trigramas e imprime cual es
	for(var x=0;x<=8;x++){
		y=trigras[x];

		if(sup == y){
			alert("Trigrama Superior: "+nombrestrigramas[x]);
			break;
		}

	}
	//Este for iguala el string inferior con los valores de los trigramas e imprime cual es
	for(var x=0;x<=8;x++){
		y=trigras[x];

		if(inf == y){
			alert("Trigrama Inferior: "+nombrestrigramas[x]);
			break;
		}

	}
	
}