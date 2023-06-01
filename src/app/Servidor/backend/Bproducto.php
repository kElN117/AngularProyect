<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if(isset($_GET['iD'])){
    $conn = mysqli_connect("dbmcs.c6si8npx34dx.us-west-1.rds.amazonaws.com", "admin", "admin123", "MCSDEV");      
    
    $id = $_GET['iD'];
    $query = "call MCSDEV.Mostrar_Producto($id);";
    $result = mysqli_query($conn, $query);
    $response = array();

    if(mysqli_num_rows($result) > 0) {
        $data = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $data[] = $row;
        }
        $response['status'] = 'success';
        $response['data'] = $data;
    } else {
        $response['status'] = 'error';
        $response['data'] = 'No se encontró el producto';
    }
    
    echo json_encode($response);
} else {
    $response['status'] = 'error';
    $response['data'] = 'Falta el parámetro iD';
    echo json_encode($response);
}

?>
