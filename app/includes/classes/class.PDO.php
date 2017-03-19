<?php
  #Abstraktionsschicht für die Datenbank
  # * Verbindet zur Datenbank
  # * kapselt alle Anfragen
  # * Nutzbar mit diversen Datenbanken (MySQL, SQLite, Oracle, etc.)
  class DATABASE {
    //Datenbankobjekt
    protected $dbobj;
    //Datenbankverbindung
    public $isconnect;
    //aktuelles preparedStatement
    //public $preparedStatement = null;
    #Verbindet zur Datenbank
    # * mit evetl. Fehlermeldung zurück.
    public function __construct($username=DB_USER,$port=DB_PORT, $password=DB_PASSWORD, $host=DB_SERVER, $dbname=DB_NAME) {
      $this->isconnect=true;
      try {
        //Neues PDO-Objekt
        $this->dbobj = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8",$username,$password);
        //Fehlermeldungen sollen "geworfen" werden
        $this->dbobj->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->dbobj->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
      }
      catch (PDOException $e) {
        //Fehlerbehandlung (bspw. E-Mail an Admin)
        $this->isconnect=false;
        throw new Exception($e->getMessage());
        //die('<div style="color:red;">'.$e->getMessage().'</div>');
      }
    }
    //Datenbankverbindung schließen
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
    //Select alle Zeilen zurückliefern

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
/*
    //Delete
    public function deleteRow($query,$params=[]){
      try{
        return $this->inserRow($query,$params);
      }
      catch (PDOException $e) {
        throw new Exception($e->getMessage());
      }
    }
    */
    #Führt eine SQL-Anfrage durch.
    # * @param text Die SQL-Anfrage
    # * @return Array Gibt eine Ergebnismenge zurück
    /*
    public function query($sql) {
      try {
        //PDO-Anfrage durchführen
        $pdoStmt  = $this->PDO->query($sql);
        //Liegt eine leere Ergebnismenge vor?
        ($pdoStmt->rowCount()==0)? $return = array():
        //Array mit den Daten
        $return = $pdoStmt->fetchAll();
        //Statement schließen
        $pdoStmt->closeCursor();
        return $return;
      }
      catch(PDOException $e)  {
        //Fehlerbehandlung (bspw. E-Mail an Admin)
        echo '<div style="color:red;">'.$e->getMessage().'</div>';
        return false;
      }
    }
    */
  }
?>
