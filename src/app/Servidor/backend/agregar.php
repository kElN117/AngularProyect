<?php
// ELIMINAR DISPONIBILIDAD
    if($_GET['iD']!= NULL){
        header("Access-Control-Allow-Origin: http://localhost:4200");
        header("Access-Control-Allow-Headers: Content-Type");
        $conn = mysqli_connect("dbmcs.c6si8npx34dx.us-west-1.rds.amazonaws.com", "admin", "admin123", "MCSDEV");      
        
        $id = $_GET['iD'];
        $query = "call MCSDEV.Comprar_Producto($id);";
        $result = mysqli_query($conn, $query);
        mysqli_close($conn);
    }
    header("Location: http://localhost:4200/articulos");
?>
