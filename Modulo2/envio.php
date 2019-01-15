<?php
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$fecha=$_POST['fecha'];
$tema=$_POST['tema'];
$comentario=$_POST['comentario'];
$fecha_actual=date("d/m/Y H:i");

//datos del correo
$cuerpo="De: $nombre \n";
$cuerpo .="Correo: $correo\n";
$cuerpo .="Fecha y hora de envio: $fecha_actual\n";
$cuerpo .="Fecha de nacimiento: $fecha\n";
$cuerpo.="Comentarios: $comentario\n";
 
if(mail('correo@gmail.com',$tema,$cuerpo)){
    echo "enviado";
    header('Location:mensaje.html');
}else{echo "error";}
?>