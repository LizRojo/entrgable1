var tabla=[
    {nombre:"Ricardo", apellidos:"Juarez Ramirez",genero:"Masculino",fech_nac:"01/05/1996",correo:"RJR@gmail.com"},
    {nombre:"Josue", apellidos:"Salazar Castro",genero:"Masculino",fech_nac:"14/06/1997",correo:"JSC@gmail.com"}
    
];
 
window.onload=cargar;
function cargar(){
  
  mostrarLista();
  document.getElementById("eliminar").addEventListener("click",eliminar,false);
   document.getElementById("agregar").addEventListener("click",nuevo,false);
   
}
function mostrarLista(){
  ordena();
  var cuerpo= document.getElementById("datos");
  var llenado="";
  for(var i=0;i<tabla.length;i++){
   
    llenado+="<tr><td>"+tabla[i].nombre+"</td><td>"+tabla[i].apellidos+"</td><td>"+tabla[i].genero+"</td><td>"+tabla[i].fech_nac+"</td><td>"+tabla[i].correo+" </td></tr>";
    
  }
  
  cuerpo.innerHTML=llenado;
}

function nuevo(event){
  event.preventDefault();
  var nuevonombre=document.getElementById("nombre").value;
  var nuevoapellido=document.getElementById("apellido").value;
  var nuevoFecha=document.getElementById("fecha").value;
  var nuevocorreo=document.getElementById("correo").value;
  var listaGenero = document.getElementById("opciones");
  var Seleccionado = listaGenero.selectedIndex;
  var opcionSeleccionada = listaGenero.options[Seleccionado];
  var nuevogenero = opcionSeleccionada.text;
  //indice = document.getElementById("opciones").selectedIndex;
  if(nuevonombre.length==0){alert("Ingresa nombre")}
  else if(nuevoapellido.length==0){alert("Ingresa Apellidos")}
  else if( Seleccionado == null || Seleccionado == 0 ) {
    alert("Selecciona el genero");
  }else  if(!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(nuevocorreo))){alert("Ingresa un correo")}else{
  var nuevo={nombre:nuevonombre, apellidos:nuevoapellido,genero:nuevogenero,fech_nac:nuevoFecha,correo:nuevocorreo};
  tabla.push(nuevo);
  ordena();
   mostrarLista();}
}

function ordena(){
  tabla.sort(function(a,b){
    if(a.nombre<b.nombre){return -1;}else{return 1;} return 0;
  });
}
function eliminar(){
  tabla.pop();
mostrarLista();
}
/*
<!DOCTYPE html>
<html lang="en">
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<body ng-app="myApp">

 <table ng-controller="formCtrl" border="1" bordercolor="blue">

            <tr style="color:blue">

                <th>Nombre</th>

                <th >Apellidos</th>

                <th >Genero</th>

                    <th>Action</th>

            </tr>
            <tr style="color:red" ng-repeat="x in datos">

                <td>{{ x.nombre }}</td>

                <td>{{ x.apellidos }}</td>

                <td>{{ x.genero }}</td>

                <td>

                    <a  href="#" ng-click="edit(x.id)">edit</a> | 

                    <a href="#" ng-click="delete(x.id)">delete</a>

                </td>

            </tr>

        </table>


<script>
var app = angular.module('myApp', []);
app.controller('formCtrl', function($scope) {
    $scope.datos= [

            {id:0,nombre:"Ricardo", apellidos:"Juarez Ramirez",genero:"Masculino",fech_nac:"01/05/1996",correo:"RJR@gmail.com"},
    {id:1, nombre:"Josue", apellidos:"Salazar Castro",genero:"Masculino",fech_nac:"14/06/1997",correo:"JSC@gmail.com"}

        ];
});
</script>

</body>
</html>
*/