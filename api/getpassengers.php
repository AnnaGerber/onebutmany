<?php
$host = "localhost";
$username = "govhack";
$password = "govhack99";
$db_name = "govhack13";
$db=mysql_connect($host, $username, $password) or die('Could not connect');
mysql_select_db($db_name, $db) or die('');
$startYear = $_GET["startYear"];
$endYear = $_GET["endYear"];
$port = $_GET["port"];

$query = "SELECT * from PassengerList";
$condition = "";
if ($startYear != null){
    $escaped_sy = mysql_real_escape_string($startYear);
    $condition =  "Arrival_Year >= " . $escaped_sy ;
}
if ($endYear != null){
    $escaped_sy = mysql_real_escape_string($endYear);
    if ($condition != "") {
        $condition = $condition . " and ";
    }
    $condition =  $condition . "Arrival_Year <= " . $escaped_sy ;
}
if ($port != null){
    $escaped_port = mysql_real_escape_string($port);
    if ($condition != "") {
        $condition = $condition . " and ";
    }
    $condition =  $condition . "PORT_OF_EMBARKATION = \"" . $escaped_port . "\"";
}
if ($condition !=""){
    $query = $query . " where " . $condition;
}
$query = $query . " order by Arrival_Year";

$result = mysql_query($query) or die('Could not query');


if(mysql_num_rows($result)){
    header('Content-Type: application/json');
    echo '{"passengers":[';
    $first = true;
    
    while($row=mysql_fetch_row($result)){
        
        //  cast results to specific data types

        if($first) {
            $first = false;
        } else {
            echo ',';
        }
        
        echo json_encode($row);
        
        
    }
    echo ']}';
} else {
    echo '[]';
}

mysql_close($db);