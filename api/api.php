<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    $con = new mysqli('localhost','root', '','bancopi');

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        // Pegando as informações do banco de dados
        if(isset($_GET['cpf']) and isset($_GET['senha'])){
            // Este If é usado, caso de passagem de ID
            $cpf = $_GET['cpf'];
            $senha = $_GET['senha'];
            $sql = $con->query("select cpf,senha from cliente where cpf='$cpf' and senha='$senha'");
            $data = $sql->fetch_assoc();
        }else{
            // Entra nesse, caso não tenha passagem de ID via "get"
            $data = array();
            $sql = $con->query("select * from cliente");
            while($d = $sql->fetch_assoc()){
                $data[] = $d;
            }
        }
        exit(json_encode($data));
    }   
    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        // alterar informações
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $data = json_decode(file_get_contents("php://input"));
            $sql = $con->query("update cliente set 
                nome = '".$data->nome."', 
                cidade = '".$data->cidade."', 
                email = '".$data->email."' 
                where id = '$id'");
            if($sql){
                exit(json_encode(array('status' => 'Sucesso')));
            }else{
                exit(json_encode(array('status' => 'Não Funcionou')));
            }
        }

    } 
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        // gravar informações
        $data = json_decode(file_get_contents("php://input"));

        // inserindo dados na primeira tabela //

        $sql = $con->query("insert into cliente(nome,cpf,email,telefone,ativo,senha) 
        values ('".$data->nome."','".$data->cpf."','".$data->email."','".$data->telefone."',default,'".$data->senha."')");

        if($sql){ // sql for verdadeiro //

            $data->id = $con->insert_id; // recuperando id automatico //

            // inserindo dados na segunda tabela //
             $query = $con->query("insert into endereco(Cliente_id,cep,logradouro,numero,complemento,tipo,cidade,bairro,uf) 
                values ('".$data->id."','".$data->cep."','".$data->logradouro."','".$data->numero."','".$data->complemento."',
                '".$data->tipo."','".$data->cidade."','".$data->bairro."','".$data->uf."')");
                if($query){
                    $con->query("insert into servico(descricao,data,Cliente_id) 
                    values ('".$data->descricao."','".$data->data."','".$data->id."')");
                }
            

            exit(json_encode($data));
        }
        else{
            exit(json_decode(array('status' => 'Não Funcionou')));
        }
    
    }
    
    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        // apagar informações do banco
        if(isset($_GET['id'])){
            $id = $_GET['id'];
            $sql = $con->query("delete from cliente where id='$id'");
            if($sql){
                exit(json_encode(array('status' => 'Sucesso')));
            }else{
                exit(json_encode(array('status' => 'Não funcinou')));
            }
        }
    }
   
    
?>