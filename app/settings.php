<?php

  #Datenbankverbindung
  define('DB_SERVER', "localhost");
  define('DB_PORT', "3306");
  define('DB_NAME', "bookery");
  #DB User
  define('DB_USER', "root");
  define('DB_PASSWORD', "root");

  define('TMPDIRECTORY','tmp/');
  define('EBOOKDIRECTORY','ebooks/');

  // PUT YOUR AMAZON KINDLE HERE
  define('EBOOK_MAIL','#yourmail');


  //PUT YOUR OUTGOING MAIL-SETTINGS HERE
  define('MAIL_SMTPHOST','#hostname');
  define('MAIL_USERNAME','#username');
  define('MAIL_USER','#email');
  define('MAIL_PASSWD','#password');
  define('MAIL_PORT',25);
  define('MAIL_SMTPAUTH',true);
  define('MAIL_CHARSET','UTF-8');

  //Database-Object
  require_once 'includes/classes/class.PDO.php';
  $db = new DATABASE();

  //Include SQL-Statements
  require_once 'statements.php';

  
?>
