<?php
  class DATABASE {

    protected $dbobj;

    public $isconnect;

    public function __construct($username=DB_USER,$port=DB_PORT, $password=DB_PASSWORD, $host=DB_SERVER, $dbname=DB_NAME) {
      $this->isconnect=true;
      try {

        $this->dbobj = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8",$username,$password);
        $this->dbobj->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->dbobj->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
      }
      catch (PDOException $e) {
        $this->isconnect=false;
        throw new Exception($e->getMessage());

      }
    }

    public function Disconnect() {
      $this->dbobj=null;
      $this->isconnect=false;
    }
    //Select
    public function selectRows($query,$params=[]){
      try{
        $stmt=$this->dbobj->prepare($query);
        $stmt->execute($params);
        if ($stmt->columnCount() == 1) $return=$stmt->fetch();
        else                           $return=$stmt->fetchAll();
        $stmt->closeCursor();
        return $return;
      }
      catch (PDOException $e) {
        throw new Exception($e->getMessage());
      }
    }


    public function getallRows($query,$params=[]){
      try{
        $stmt=$this->dbobj->prepare($query);
        $stmt->execute($params);
        return $stmt->fetchAll();
      }
      catch (PDOException $e) {
        throw new Exception($e->getMessage());
      }
    }

    //Insert
    public function executeRow($query,$params=[]){
      try{
        $stmt=$this->dbobj->prepare($query);
        $stmt->execute($params);
        $stmt->closeCursor();
        return true;
      }
      catch (PDOException $e) {
        throw new Exception($e->getMessage());
        return false;
      }
    }

    //Update
    public function updateRow($query,$params=[]){
      try{
        return $this->executeRow($query,$params);
      }
      catch (PDOException $e) {
        throw new Exception($e->getMessage());
      }
    }
  }
?>
