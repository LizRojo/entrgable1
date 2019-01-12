<?php
$nombre=$_POST['nombre'];
$correo=$_POST['correo'];
$fecha=$_POST['fecha'];
$tema=$_POST['tema'];
$comentario=$_POST['comentario'];

//datos del correo

$headers="De: $nombre \n";
$headers .="Correo: $correo\n";
$headers .="Fecha de nacimiento: $fecha\n";
$headers.="Comentarios: $comentario\n";

 

if(@mail('lvrojo31@gmail.com',$asunto,$headers)){
    echo "enviado";
    header('Location:mensaje.html');
}else{echo "error";}


?>