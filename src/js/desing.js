var tabla,lista,celda,texto,des,cont=6;
var tabla2, celda2, lista2;
var tabla3, celda3, lista3;
var nombreshexagramas, hexas;
var hx= new Array();
var alreadyShowing= false;
/**
 * Borra la ultima linea en la tabla
 */
function onClickEliminarFila(){
	//elimina el primer elemento del hexagrama
	var tablas = document.getElementsByTagName("tbody")
	//console.log(tablas);
	tablas[0].removeChild(tablas[0].firstChild)
	cont++;
	//borra las tablas que corrigen los mutantes y ademas las oculta
	for (var i=1 ;i<tablas.length - 1;i++ ){
		var element = tablas[i];
		document.getElementById("tabla"+(i+1)+(i+1)).style.visibility='hidden';
		 while (element.firstChild){
			 element.removeChild(element.firstChild);
		 }
		}
	//elimina el hexagrama si esta en 6

	for(i= 0; i< tabla.children.length; i++){
		console.log('Buscando en: ' + tabla.children[i].textContent);
		if(tabla.children[i].textContent.search('.') > 0)
			tabla.children[i--].remove;
	}
	
	if(tabla.children.length > 6){
		//alert('Se eliminará el último elemento: ' + tabla.children[6].textContent);
		tabla.children[6].remove();
	}

	alreadyShowing= false;
	reiniciaTabla();
	if (cont===6){
		onClickEliminarButton();
	}
	
}
function onClickEliminarButton(){
	cont=6;
	alreadyShowing= false;
	reiniciaTabla();
	for (var i=1; i<4;i++){
		document.getElementById("tabla"+i+i).style.visibility='hidden'
	}
	/**
	 * Borra los hijos de cada una de las tablas por si igual hay hijos en 
	 * las correcciones de la mutante
	 */
	var tablas = document.getElementsByTagName("tbody")
	//console.log(tablas)
	for (var i=0 ;i<tablas.length - 1;i++ ){
		var element = tablas[i]
		 while (element.firstChild){
			 element.removeChild(element.firstChild)
		 }
	}
}
function onClickAgregarInText(){ 
   var padre = document.getElementsByClassName("Tiradas")[0];
   
   var input = document.createElement("INPUT");
   input.type = 'text';
   input.className = 'inputText';
   padre.appendChild(input);
}

function iniciar(){
	tabla=document.getElementById("tabla1");
	tabla2=document.getElementById("tabla2");
	tabla3=document.getElementById("tabla3");
	lista=document.createElement("tr");
	lista2=document.createElement("tr");
	lista3=document.createElement("tr");
	des=document.createElement("label");
	tabla.appendChild(lista);
	tabla2.appendChild(lista2);
	tabla3.appendChild(lista3);
}

function reiniciaTabla(){
	for(i= 1; i<= 64; i++){
		document.getElementById(i).className= "non_selected";
	}
}

function coloreaCuadroTabla(posicion){
	document.getElementById(posicion).className= "selected";
}

function contador(){
	var element = document.getElementById("tabla11") //con esto haces que se vea la tabla al darle aceptar
	element.style.visibility='visible'

	if(cont>0){
		cont--
		hx[cont]=evalua();
	}
	else if(tabla.children.length <= 7 && !alreadyShowing){
		alreadyShowing= true;
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

function insertaNombreHexagrama(nombre, tab_number){
	var valor8= nombre;
	
	switch(tab_number){
		case 1:
			lista=document.createElement("tr");
			celda=document.createElement("td");
			texto=document.createTextNode(valor8);
			celda.appendChild(texto);
			lista.appendChild(celda);

			if(tabla.hasChildNodes()){
				tabla.insertBefore(lista,null);
			}
			break;
		case 2:
			lista2=document.createElement("tr");
			celda2=document.createElement("td");
			texto=document.createTextNode(valor8);
			celda2.appendChild(texto);
			lista2.appendChild(celda2);

			if(tabla2.hasChildNodes()){
				tabla2.insertBefore(lista2,null);
			}
			break;
		case 3:
			lista3=document.createElement("tr");
			celda3=document.createElement("td");
			texto=document.createTextNode(valor8);
			celda3.appendChild(texto);
			lista3.appendChild(celda3);

			if(tabla3.hasChildNodes()){
				tabla3.insertBefore(lista3,null);
			}
			break;
		default:
	}
	
}

function checkMutacion(){
	//Mostrará tablas 2 y 3
	document.getElementById("tabla22").style.visibility='visible';
	document.getElementById("tabla33").style.visibility='visible'; //con esto haces que se vea la tabla al darle aceptar

	var mutsPosition= [tabla.children.length];
	var buildNamesValues= new Array();
	var buildNamesValuesTemp= [6];
	for(i= 0; i< 6; i++){
		if(tabla.children[i].textContent.search('x') > 0){
			mutsPosition[i]= 1;
			buildNamesValues[i]= 6;
		}else if(tabla.children[i].textContent.search('0') > 0){
			mutsPosition[i]= -1;
			buildNamesValues[i]= 9;
		}else{
			mutsPosition[i]= 0;

			if(tabla.children[i].textContent.search(' ') > 0)
				buildNamesValues[i]= 8;
			else
				buildNamesValues[i]= 7;
		}
	}

	var temp;
	var hx2= "";
	//Construir tabla 2
	for(i= 0; i< 6; i++){
		temp= document.createElement("td");
		if(mutsPosition[i] == 0){
			temp.textContent= tabla.children[i].textContent;
			hx2+= buildNamesValues[i];
		}else if(mutsPosition[i] == -1){
			var aux= tabla.children[i].textContent;
			temp.textContent= "_________";
			hx2+= (buildNamesValues[i] - 2);
		}else{
			var aux= tabla.children[i].textContent;
			temp.textContent= "____    ____";
			hx2+= (buildNamesValues[i] + 2);
		}

		lista2=document.createElement("tr");
		lista2.appendChild(temp);

		tabla2.appendChild(lista2);
	}

	//alert("Tabla 1: " + buildNamesValues.join('') + "2da tabla: " + hx2);
	var x;
	for(x=0;x<=63;x++){
		if(hx2 == hexas[x])
			break;
	}
	//alert('Valor seleccionado: ' + hx2 + ' de la posicion: ' + x);
	coloreaCuadroTabla(x);
	insertaNombreHexagrama(x + ". " + nombreshexagramas[x], 2);
	descripcionMutante1(x);


	hx2= "";
	//Construir tabla 3
	for(i= 0; i< 6; i++){
		temp= document.createElement("td");
		if(mutsPosition[i] == 0){
			temp.textContent= tabla.children[i].textContent;
			hx2+= buildNamesValues[i];
		}else if(mutsPosition[i] == -1){
			var aux= tabla.children[i].textContent;
			temp.textContent= "____    ____";
			hx2+= (buildNamesValues[i] - 1);
		}else{
			var aux= tabla.children[i].textContent;
			temp.textContent= "_________";
			hx2+= (buildNamesValues[i] + 1);
		}

		lista3=document.createElement("tr");
		lista3.appendChild(temp);

		tabla3.appendChild(lista3);
	}

	//alert("Tabla 1: " + buildNamesValues.join('') + "3ra tabla: " + hx2);
	for(x=0;x<=63;x++){
		if(hx2 == hexas[x])
			break;
	}
	coloreaCuadroTabla(x);
	insertaNombreHexagrama(x + ". " + nombreshexagramas[x], 3);
	descripcionMutante2(x);
	
}

function nombreHexagrama(){
	//Esta funcion obtiene el nombre del hexagrama evaluando un string del los valores obtenidos de la tirada y luego  los compara

	var hx2=hx.join('');
	nombreshexagramas = [0,"Chi'en","K'un","Chun","Meng","Hsü","Sung","Shih","Pi","Hsiao Ch'u","Lü","T'ai","P'i","T'ung Jen","Ta Yu","Ch'ien","Yü","Sui","Ku","Lin","Kuan","Shih Ho","Pi","Po","Fu","Wu Wang","Ta Ch'u","I","Ta Kuo","K'an","Li","Hsien","Heng","Tun","Ta Chuang","Chin","Ming I","Chia Jen","K'uei","Chien","Hsieh","Sun","I","Kuai","Kou","Ts'ui","Sheng","K'un","Ching","Ko","Ting","Chen","Ken","Chien","Kuei Mei","Feng","Lü","Sun","Tui","Huan","Chieh","Chung Fu","Hsiao Kuo","Chi CHi","Wei Chi"];
	
	hexas = [0,777777,888888,878887,788878,878777,777878,888878,878888,778777,777877,888777,777888,777787,787777,888788,887888,877887,788778,888877,778888,787887,788787,788888,888887,777887,788777,788887,877778,878878,787787,877788,887778,777788,887777,787888,888787,778787,787877,878788,887878,788877,778887,877777,777778,877888,888778,877878,878778,877787,787778,887887,788788,778788,887877,887787,787788,778778,877877,778878,878877,778877,887788,878787,787878];
	var y;

	//Este for busca que el string del valor sea igual a alguna posicion e imprime el nombre de la posicion
	var checkMut= true;
	var x;
	for(x=0;x<=63;x++){
		y=hexas[x];

		if(hx2 == y){
			//alert("Hexagrama Numero: "+x);
			//alert("Nombre del Hexagrama: "+nombreshexagramas[x]);
			checkMut= false;
			break;
		}
	}

	if(checkMut){
		//alert('Se encontró una mutación');
		if(typeof document.getElementById("hexanormal").children[0] !== 'undefined')
			document.getElementById("hexanormal").children[0].textContent= "";
		checkMutacion();
	}else{
		coloreaCuadroTabla(x);
		insertaNombreHexagrama(x + ". " + nombreshexagramas[x], 1);
		descripcionNormal(x);
	}
	
}


function descripcionNormal(numero){
    descripcion=descripcionHexagrama(numero);

    var superlabel = document.createElement('label');
    superlabel.appendChild(document.createTextNode(descripcion));
	
	if(document.getElementById("hexanormal").children.length === 0)
		document.getElementById("hexanormal").appendChild(superlabel);
	else
		document.getElementById("hexanormal").children[0].textContent= descripcion;
    }

function descripcionMutante1(numero){
    descripcion=descripcionHexagrama(numero);

    var superlabel = document.createElement('label');
    superlabel.appendChild(document.createTextNode(descripcion));

	if(document.getElementById("hexamutante1").children.length === 0)
		document.getElementById("hexamutante1").appendChild(superlabel);
	else
		document.getElementById("hexamutante1").children[0].textContent= descripcion;
}

function descripcionMutante2(numero){
    descripcion=descripcionHexagrama(numero);

    var superlabel = document.createElement('label');
	superlabel.appendChild(document.createTextNode(descripcion));
	
	if(document.getElementById("hexamutante2").children.length === 0)
		document.getElementById("hexamutante2").appendChild(superlabel);
	else
		document.getElementById("hexamutante2").children[0].textContent= descripcion;
}

function descripcionHexagrama(numero){
	nombre=[0,
    "1. Cielo. Lo creativo. El principio generador",
    "2. Tierra. Lo receptivo. El principio pasivo",
    "3. Acumular. El obstáculo inicial. La dificultad del comienzo",
    "4. Juventud. El joven necio. La inmadurez.",
    "5. Esperar. La espera. La maduración.",
    "6. Disputar. El conflicto. El pleito.",
	"7. Ejército. La legión.",
	"8. Solidaridad. La unión",
	"9. Animalito doméstico. La pequeña fuerza",
	"10. Caminar. El porte. El paso cauteloso",
	"11. Prosperidad. La paz. La armonía.",
	"12. Cierre. El estancamiento. Lo inerte.",
	"13. Hombres Reunidos. La unión comunitaria",
	"14. Gran dominio. La gran posesión. Lo que se tiene de más.",
	"15. Condescendencia. La modestia. La humildad",
	"16. Ocuparse. El entusiasmo. La algarabía.",
	"17. Conformarse. La continuidad. El seguimiento.",
	"18. Destrucción. La reconstrucción. La labor en lo corrompido.",
	"19. Acercarse. Lo que va llegando.",
	"20. Observar. La contemplación.",
	"21. Quebrar mordiendo. La dentellada. La filosa mordedura",
	"22. Adornar. La elegancia. La gracia.",
	"23. Resquebrajar. La desintegración. El derrumbe",
	"24. Regresar. El retorno. Lo que vuelve.",
	"25. Sinceridad. La inocencia. La naturalidad.",
	"26. Fuerza educadora. El poder de lo fuerte. La gran acumulación.",
	"27. Nutrirse. La alimentación. Las fauces.",
	"28. Excesos. La preponderancia de lo grande.",
	"29. Peligro. Lo abismal. La caida.",
	"30. Distinguir. El resplandor. Lo adherente.",
	"31. Unir. La influencia.La atracción.",
	"32. Luna Creciente. La duración. La permanencia.",
	"33. Retirarse. EL repliegue.",
	"34. Gran fuerza. El gran vigor.",
	"35. Progresar. El avance.",
	"36. Luz que se apaga. El oscurecimiento.",
	"37. Gente de familia. El clan.",
	"38. Contraste. La oposición. El antagonismo.",
	"39. Dificultad. El obstáculo. El impedimento.",
	"40. Explicar. La liberación. El alivio.",
	"41. Perder. La disminución.",
	"42. Evolución. El aumento. La ganancia.",
	"43. Decidir. El desbordamiento. La resolución.",
	"44. Encontrarse. El acoplamiento.",
	"45. Cosechar. La reunión. La convergencia.",
	"46. Subir. El ascenso. La escalada.",
	"47. Angustia. La pesadumbre. El agotamiento.",
	"48. El pozo de agua. La fuente.",
	"49. Renovar. La revolución. El cambio",
	"50. La caldera. Lo alquímico",
	"51. Trueno. La conmoción. Lo suscitativo.",
	"52. Cimientos. La quietud. La detención.",
	"53. Evolución. El progreso gradual.",
	"54. Desposar a la hija menor. La doncella.",
	"55. Abundancia. La plenitud.",
	"56. Viajero. El andariego",
	"57. Viento. Lo penetrante. Lo suave.",
	"58. Recogerse. La serenidad. La satisfacción.",
	"59. Confusión. La dispersión. La disolución",
	"60. Moderación. La restricción. La limitación",
	"61. Fe Interior. La verdad interior. La sinceridad interna.",
	"62. Pequeñas cosas importantes. La pequeña preponderancia.",
	"63. Conclusiones. Después de la realización.",
	"64. Inconcluso. Antes de la realización."];
	var valor=nombre[numero];
	return valor;
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

	//Estos son los trigramas ya en valores string para usarse con el mapa, posiblemente paasarlos por retunr, supongo
	var inf=infaux.join('');
	var sup=supaux.join('');

	var nombrestrigramas = ["Ch'ien","Chen","K'an","Ken","K'un","Sun","Li","Tui"];
	var trigras =[777,887,878,788,888,778,787,877];
	var y;

	//Este for iguala el string superior con los valores de los trigramas e imprime cual es
	for(var x=0;x<=8;x++){
		y=trigras[x];

		if(sup == y){
			//alert("Trigrama Superior: "+nombrestrigramas[x]);
			break;
		}
	}

	//Este for iguala el string inferior con los valores de los trigramas e imprime cual es
	for(var x=0;x<=8;x++){
		y=trigras[x];

		if(inf == y){
			//alert("Trigrama Inferior: "+nombrestrigramas[x]);
			break;
		}
	}

}