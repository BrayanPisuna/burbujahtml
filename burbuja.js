function Burbuja (arreglo, n){
    
 var i, k, aux
 for ( k=1 ; k<n ; k++){
     for (i = 0; i< (n-k); i++){
         if (arreglo [i]> arreglo[i+1]){
             aux = arreglo [i];
             arreglo[i]=arreglo[i+1];
             arreglo[i+1]= aux;


         }

     }
 }
}


function ingresarDatos(arreglo, n){

    for (var k = 0 ; k < n; k++ ){
        var datos = parseInt(prompt("INGRESAR ELEMENTOS"));
        arreglo[k]= datos;
    }




}




function Principal(){
    var arreglo123=[];
    var n = parseInt( prompt ("INGRESE EL TAMAÑO"));
    ingresarDatos(arreglo123,n);
    console.log(arreglo123);
    var t = arreglo123.length;
    
    
    Burbuja(arreglo123,t);
    console.log(arreglo123);

}

Principal();