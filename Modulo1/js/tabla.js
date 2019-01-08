var app = angular.module('myApp', []);
  app.controller('formCtrl', function($scope) {
  var datoid = 3;
      $scope.datos= [
              {id:0,nombre:"Ricardo", apellidos:"Juarez Ramirez",genero:"Masculino",fech_nac:"01/05/1996",correo:"RJR@gmail.com"},
              {id:1, nombre:"Josue",apellidos:"Salazar Castro",genero:"Masculino",fech_nac:"14/06/1997",correo:"JSC@gmail.com"},
              {id:2,nombre:"Estela", apellidos:"Castro Reyes",genero:"Femenino",fech_nac:"01/06/1997",correo:"ecr@gmail.com"}];
         
              $scope.agregar = function () {
               
                if ($scope.nuevodato.id == null) {
                    if($scope.nuevodato.nombre==""||$scope.nuevodato.nombre==null) {alert("Ingresa un nombre")}else
                    if($scope.nuevodato.apellidos==""||$scope.nuevodato.apellidos==null) {alert("Ingresa apellidos")}else
                    if($scope.nuevodato.genero==""||$scope.nuevodato.genero==null) {alert("Selecciona genero")}else
                    if($scope.nuevodato.fech_nac==""||$scope.nuevodato.fech_nac==null) {alert("Ingresa fecha de nacimiento")}else
                    if($scope.nuevodato.correo==""||$scope.nuevodato.correo==null) {alert("Ingresa correo electronico")}
                    else{
                    $scope.nuevodato.id = datoid++;
                     $scope.datos.push($scope.nuevodato);
                    }
                } else {
    
    
    
                    for (i in $scope.datos) {
                       
                        if ($scope.datos[i].id == $scope.nuevodato.id) {
    
                            $scope.datos[i] = $scope.nuevodato;
    
                        }
    
                    }
    
                }
    
                $scope.nuevodato = {};
    
              
          }
           $scope.eliminar = function (id) {
                  for (i in $scope.datos) {
  
                  if ($scope.datos[i].id == id) {
  
                      $scope.datos.splice(i, 1);
  
                      $scope.nuevodato = {};
  
                  }
  
              }
  
  
  
          }
           $scope.editar = function (id) {
  
              for (i in $scope.datos) {
  
                  if ($scope.datos[i].id == id) {
  
                      $scope.nuevodato = angular.copy($scope.datos[i]);
  
                  }
  
              }
  
          }
  
  });
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