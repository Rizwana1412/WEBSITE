<?php

if( isset( $_POST['submit_form'] ) )
{

$name = $_POST['username'];
$email = $_POST['useremail'];


$host = 'localhost';
$user = 'root';
$pass = ' ';

mysql_connect($host, $user, $pass);

mysql_select_db('demo');

$insertdata=" INSERT INTO user VALUES( '$name','$email' ) ";
mysql_query($insertdata);

}
?>