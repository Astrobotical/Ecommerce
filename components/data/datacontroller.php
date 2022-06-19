<?php
class PreDB {
    private $hostname = "localhost";
    private $Username = "root";
    private $Password = "";
    private $databaseName = "u695548073_ecommerce";
    private $Connection;
    function __construct() {
        $this->Connection = $this->Connectionstring();
    }
    function Connectionstring(){

        $Connection = mysqli_connect($this->hostname, $this->Username, $this->Password, $this->databaseName);
        return $Connection;
    }
    function Query($Query){
        $result = mysqli_query($this->Connection, $Query);
        return $result;
    }
        function runQuery($query) {
            $result = mysqli_query($this->Connection,$query);
            while($row=mysqli_fetch_assoc($result)) {
                $resultset[] = $row;
            }
            if(!empty($resultset))
                return $resultset;
        }
        protected function sendOutput($data, $httpHeaders=array())
        {
            header_remove('Set-Cookie');
     
            if (is_array($httpHeaders) && count($httpHeaders)) {
                foreach ($httpHeaders as $httpHeader) {
                    header($httpHeader);
                }
            }
     
            echo $data;
            exit;
        }
    }
?>