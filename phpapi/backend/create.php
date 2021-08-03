<?php/*

include "config.php";
$input = file_get_contents('php://input');
$data =  json_decode($input, true);
$msg = array();

// insert da segunda tabela
$n = $data['nome'];
$e = $data['email'];
$s = $data['sugestoes'];


$query = mysqli_query($con, "INSERT INTO `avaliar` (`nome`,`email`,`data`,`sugestoes`)VALUES ('$n','$e',now(),'$s')");


if($query){
    http_response_code(201);
    $msg['status']= "success";
}else{
    http_response_code(422);
    $msg['status']= "success";
}

echo json_encode($msg);
echo mysqli_error($con);
*/
?>