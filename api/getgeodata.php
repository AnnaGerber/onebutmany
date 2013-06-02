<?php
$host = "localhost";
$username = "govhack";
$password = "govhack99";
$db_name = "govhack13";
$db=mysql_connect($host, $username, $password) or die('Could not connect');
mysql_select_db($db_name, $db) or die('');
$query = "SELECT * from embarkationgeo";
$place = $_GET["place"];
if ($place != null){
    $escaped_place = mysql_real_escape_string($place);
    $query = $query . " where PORT_OF_EMBARKATION = \"" . $escaped_place . "\";";
}

$result = mysql_query($query) or die('Could not query');


if(mysql_num_rows($result)){
    header('Content-Type: application/json');
    echo '{"embarkation":[';
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