<?php
// echo "hola";
// if (isset($_GET['nombre'])) {
  $conn = mysqli_connect("dbmcs.c6si8npx34dx.us-west-1.rds.amazonaws.com", "admin", "admin123", "MCSDEV");      

  $idProducto = $_GET['id'];
  $nombre = isset($_GET['name']) ? $_GET['name'] : "";
  $descripcion = isset($_GET['desc']) ? $_GET['desc'] : "";
  $urlImg = isset($_GET['url']) ? $_GET['url'] : "";
  $precio = isset($_GET['precio']) ? $_GET['precio'] : "";
  
// echo "id: $idProducto";
// echo "nombre: $nombre";
// echo "descripcion: $descripcion";
// echo "url: $urlImg";
// echo "precio: $precio";
  $query = "call Modificar_Producto($idProducto, '$nombre', '$descripcion', $precio, '$urlImg');";
  // echo $query;
  $result = mysqli_query($conn, $query);
  header("Location: http://localhost:4200/articulos");

?>