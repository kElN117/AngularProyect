<?php
  // Conexión a la base de datos
  header("Access-Control-Allow-Origin: https://mcswebbucket.s3.us-west-1.amazonaws.com:80");
  header("Access-Control-Allow-Headers: Content-Type");
  $conn = mysqli_connect("dbmcs.c6si8npx34dx.us-west-1.rds.amazonaws.com", "admin", "admin123", "MCSDEV");

  // Consulta a la base de datos
  $query = "Select * from Productos";
  $result = mysqli_query($conn, $query);

  // Convertir resultados a formato JSON
  $data = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
  }
  echo json_encode($data);

  // Cerrar la conexión a la base de datos
  mysqli_close($conn);
?>
