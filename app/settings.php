<?php

  #Datenbankverbindung
  define('DB_SERVER', "localhost");
  define('DB_PORT', "3306");
  define('DB_NAME', "#");
  #DB User
  define('DB_USER', "#");
  define('DB_PASSWORD', "#");

  define('TMPDIRECTORY','tmp/');
  define('EBOOKDIRECTORY','ebooks/');

  // PUT YOUR AMAZON KINDLE HERE
  define('EBOOK_MAIL','#@kindle.com');


  //PUT YOUR OUTGOING MAIL-SETTINGS HERE
  define('MAIL_SMTPHOST','#');
  define('MAIL_USERNAME','#');
  define('MAIL_USER','#');
  define('MAIL_PASSWD','#');
  define('MAIL_PORT',25);
  define('MAIL_SMTPAUTH',true);
  define('MAIL_CHARSET','UTF-8');

  //Database-Object
	include 'includes/classes/imageresize/ImageResize.php';

  require_once 'includes/classes/class.PDO.php';
  $db = new DATABASE();

  //Include SQL-Statements
  require_once 'statements.php';

  
?>
