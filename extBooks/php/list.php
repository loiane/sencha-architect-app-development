<?php
require("db.php");

$start = $_GET['start'];
$limit = $_GET['limit'];

$queryString = "SELECT * FROM book LIMIT  $start, $limit";

//consulta sql
$query = mysql_query($queryString) or die(mysql_error());

//faz um looping e cria um array com os campos da consulta
$contatos = array();
while($contato = mysql_fetch_assoc($query)) {
    $contatos[] = $contato;
}

//consulta total de linhas na tabela
$queryTotal = mysql_query('SELECT count(*) as num FROM book') or die(mysql_error());
$row = mysql_fetch_assoc($queryTotal);
$total = $row['num'];

//encoda para formato JSON
echo json_encode(array(
	"success" => mysql_errno() == 0,
	"total" => $total,
	"data" => $contatos
));
?>