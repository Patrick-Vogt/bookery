<?PHP
/********************************************************************************
 * SEND BOOK TO READER
 ********************************************************************************/
function SendMailToReader($ebookfile) {

  require 'includes/PHPMailer/PHPMailerAutoload.php';
     $mail = new PHPMailer;
     $mail->IsSMTP();
     try {
       $mail->Host       = MAIL_SMTPHOST;
       $mail->SMTPAuth   = MAIL_SMTPAUTH;
       $mail->CharSet    = MAIL_CHARSET;
       $mail->Username   = MAIL_USER;
       $mail->Password   = MAIL_PASSWD;
       $mail->Port       =MAIL_PORT;
       $mail->isHTML(true);
       $mail->SetFrom(MAIL_USER, MAIL_USERNAME);
       $mail->addAddress(EBOOK_MAIL);
       //Anhang
       if (isset($ebookfile)) {
       $mail->addAttachment($ebookfile); }
       date_default_timezone_set('Europe/Berlin');
       $datetime=date('d.m.Y H:i:s');
       if(!$mail->Send()) {
           if ($showresult) {
               echo 'INFO|<p style="font-weight:bold;color:#CC0000">'.$datetime.' => Error: '.$mail->ErrorInfo.'</p>';
               echo 'Mailer Error: ' . $mail->ErrorInfo;
           }
            return false;
       }
       else {
         if ($showresult) {
             echo 'INFO|<p style="font-weight:bold;color:#006633">'.$datetime.' : Ebook successfully sent to '.$mailto.'</p>';
         }
          return true;
       }
     }
     catch (phpmailerException $e) { echo $e->errorMessage(); return false; }
     catch (Exception $e)          { echo $e->getMessage();  return false;  }

} // End Function







?>
