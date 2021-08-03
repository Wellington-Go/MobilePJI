<?php/*

include "config.php";
$input = file_get_contents('php://input');
$data =  json_decode($input, true);
$msg = array();

// atualizar tabela
$n = $data['nome'];
$e = $data['email'];
$s = $data['sugestoes'];
$id = $_GET['id'];


$query = mysqli_query($con, "UPDATE `avaliar` SET `nome`=$n,`email`=$e,`sugestoes`=$s WHERE `id`= '{$id}' LIMIT 1");


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