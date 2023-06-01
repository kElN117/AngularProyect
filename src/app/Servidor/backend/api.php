<?php
header('Access-Control-Allow-Origin: http://localhost:4200');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit();
}

// Establecer la conexión a la base de datos
$conn = mysqli_connect("dbmcs.c6si8npx34dx.us-west-1.rds.amazonaws.com", "admin", "admin123", "MCSDEV");      

// Verificar si la conexión fue exitosa

if (isset($_GET['nombre'])) {

    $nombre = $_GET['nombre'];
    $descripcion = isset($_GET['descripcion']) ? $_GET['descripcion'] : "";
    $urlImg = isset($_GET['urlMG']) ? $_GET['urlMG'] : "";
    $precio = isset($_GET['precio']) ? $_GET['precio'] : "";
    $existencia = isset($_GET['existencia']) ? $_GET['existencia'] : "";
    $categoria = isset($_GET['categoria']) ? $_GET['categoria'] : "";
    $tipoUnidad = isset($_GET['tipoUnidad']) ? $_GET['tipoUnidad'] : "";

    // Aquí puedes realizar cualquier acción con los datos recibidos
    echo "Nombre: $nombre<br>";
    echo "Descripción: $descripcion<br>";
    echo "URL de la imagen: $urlImg<br>";
    echo "Precio: $precio<br>";
    echo "Existencia: $existencia<br>";
    echo "Categoría: $categoria<br>";
    echo "Tipo de unidad: $tipoUnidad<br>";

    $query = "call MCSDEV.agregarProducto('$nombre', '$descripcion', '$urlImg', '$precio', '$existencia', '$categoria', '$tipoUnidad')";
    $result = mysqli_query($conn, $query);

    header("Location: http://localhost:4200/articulos");

} else {
  echo "No se han recibido todos los datos necesarios";
  header("Location: http://localhost:4200/articulos");

}
header("Location: http://localhost:4200/articulos");
mysqli_close($conn);
?>
