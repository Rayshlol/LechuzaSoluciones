<?php
$serverName = "localhost\\SQLEXPRESS";
$connectionInfo = array("Database"=>"lechuza", "UID"=>"sa", "1111");
$conn = sqlsrv_connect($serverName, $connectionInfo);

if(!$conn){
    die(print_r(sqlsrv_errors(), true));
}
?>
