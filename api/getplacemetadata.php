
<?php 
# Based on http://johnwright.me/code-examples/sparql-query-in-code-rest-php-and-json-tutorial.php


function getPlaceDataUrl($term)
{
   $format = 'json';
 
   $query = 
   "PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>
 PREFIX dbo: <http://dbpedia.org/ontology/>
 PREFIX dcterms: <http://purl.org/dc/terms/>
 
   SELECT *
   WHERE {
      ?place a dbo:Place .
      ?place rdfs:label ?name .
      ?place ?pred ?value .
      FILTER regex(str(?name),\"" . $port . "\") }
      FILTER( lang(?name)=\"en\" )
   }";
 
   $searchUrl = 'http://dbpedia.org/sparql?'
      .'query='.urlencode($query)
      .'&format='.$format;

   return $searchUrl;
}


function request($url){
 
   if (!function_exists('curl_init')){ 
      die('CURL is not installed!');
   }
 
   $ch= curl_init();

   curl_setopt($ch, 
      CURLOPT_URL, 
      $url);
 
   curl_setopt($ch, 
      CURLOPT_RETURNTRANSFER, 
      true);
 
   $response = curl_exec($ch);
 
   curl_close($ch);
   header('Content-Type: application/json');
   echo $response;
}


$port = $_GET["port"];
#echo getPlaceDataUrl($port);
request(getPlaceDataUrl($port));

?>


