<?php

  #Datenbankverbindung
  define('DB_SERVER', "localhost");
  define('DB_PORT', "3306");
  define('DB_NAME', "bookery");
  #DB User
  define('DB_USER', "root");
  define('DB_PASSWORD', "root");

  define ('ebookdirectory','/usr/share/tmp');

  // PUT YOUR AMAZON KINDLE HERE
  define('EBOOK_MAIL','PUTMAILHERE');


  //PUT YOUR OUTGOING MAIL-SETTINGS HERE
  define('MAIL_SMTPHOST','#');
  define('MAIL_USERNAME','#');
  define('MAIL_USER','#youremailaddress');
  define('MAIL_PASSWD','#');
  define('MAIL_PORT',25);
  define('MAIL_SMTPAUTH',true);
  define('MAIL_CHARSET','UTF-8');

  //Database-Object
  require_once 'includes/classes/db/class.PDO.php';
  $db = new DATABASE();

  //Include SQL-Statements
  require_once 'statements.php';
?>
