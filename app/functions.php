<?php

function countBooksOnStartup()
{
	global $db, $statements, $lang;
	$count = $db->selectRows($statements['countbooksonstartup']);
	$placeholder = $count['books'] . ' in database';
	echo '<div class="input-group">
  			<input type="text" class="form-control" name="searchterm" id="searchterm" 
  			placeholder="'.$placeholder.'">
  			<span class="input-group-btn">
            <button class="btn btn-default" id="performsearch" onclick="performSearch()" type="button">Search</button>
            </span>
		</div>';
}


function loadSomeRandomBooksOnStartup() {
		global $db, $statements;

	$getbooks = $db->selectRows($statements['loadrandombooks']);

	for ($i=0; $i < count($getbooks); $i++) { 
	  

		echo '<div class="masonry-item">
                       <img src="'.EBOOKDIRECTORY.$getbooks[$i]['coverpath'].'" id="'.EBOOKDIRECTORY.$getbooks[$i]['bookpath'].'" 
                       name="'.$getbooks[$i]['author_name'].' - '.$getbooks[$i]['title'].'" onclick="sendReaderModal(this.id, this.name)" class="img-responsive center-block" alt="">
                     </div>';	
	}

}


function performsearch($searchquery) {
	global $statements, $db;

	$searchresults = $db->selectRows($statements['performsearch'], [$searchquery,$searchquery]);

	for ($i=0; $i < count($searchresults); $i++) { 
	  
		echo '<div class="masonry-item">
                       <img src="'.EBOOKDIRECTORY.$searchresults[$i]['coverpath'].'" id="'.EBOOKDIRECTORY.$searchresults[$i]['bookpath'].'" 
                       name="'.$searchresults[$i]['author_name'].' - '.$searchresults[$i]['title'].'" onclick="sendReaderModal(this.id, this.name)" class="img-responsive center-block" alt="">
                     </div>';	
	}

}


function SendMailToReader($ebookfile)
{
	require 'includes/classes/PHPMailer/PHPMailerAutoload.php';

	$mail = new PHPMailer;
	$mail->IsSMTP();
	try {
		$mail->Host = MAIL_SMTPHOST;
		$mail->SMTPAuth = MAIL_SMTPAUTH;
		$mail->CharSet = MAIL_CHARSET;
		$mail->Username = MAIL_USER;
		$mail->Password = MAIL_PASSWD;
		$mail->Port = MAIL_PORT;
		$mail->isHTML(false);
		$mail->SetFrom(MAIL_USER, MAIL_USERNAME);
		$mail->addAddress(EBOOK_MAIL);
		$mail->Body = 'Book in attachment';

		// Attachment

		if (isset($ebookfile) && file_exists($ebookfile)) {
			$mail->addStringAttachment(file_get_contents($ebookfile), basename($ebookfile));
		}

		date_default_timezone_set('Europe/Berlin');
		$datetime = date('d.m.Y H:i:s');
		if (!$mail->Send()) {

				echo 'INFO|<p style="font-weight:bold;color:#CC0000">' . $datetime . ' => Error: ' . $mail->ErrorInfo . '</p>';
				echo 'Mailer Error: ' . $mail->ErrorInfo;
			

			return false;
		}
		else {
		
				echo 'INFO|<p style="font-weight:bold;color:#006633">' . $datetime . ' : Ebook successfully sent to ' . $EBOOK_MAIL . '</p>';
			

			return true;
		}
	}

	catch(phpmailerException $e) {
		echo $e->errorMessage();
		return false;
	}

	catch(Exception $e) {
		echo $e->getMessage();
		return false;
	}
} // End Function




function saveBook($bookfile)
{
	$fileformat = pathinfo($bookfile['file']['name'], PATHINFO_EXTENSION);
	var_dump($fileformat);
	switch ($fileformat) {
	case 'epub':
		saveEpub($bookfile, $fileformat);
		break;

	case 'mobi':
		break;

	default:

		break;
	}
}

function saveEpub($book, $fileformat)
{

	$subtmp = generateRandomString(); // will be deleted after finishing
	if (!is_dir(EBOOKDIRECTORY)) {
		mkdir(EBOOKDIRECTORY);
	}

	$zip = new ZipArchive();
	$res = $zip->open($book["file"]["tmp_name"]);
	if ($res === TRUE) {
		$zip->extractTo(TMPDIRECTORY . $subtmp); // TMP Extract to get meta
		if (!file_exists(TMPDIRECTORY . $subtmp . '/content.opf')) {
			$opf = simplexml_load_file(TMPDIRECTORY . $subtmp . '/OEBPS/content.opf');
			$isoebps = true;
		}
		else {
			$opf = simplexml_load_file(TMPDIRECTORY . $subtmp . '/content.opf');
			$isoebps = false;
		}

		$namespaces = $opf->getNameSpaces(true);
		$dc = $opf->metadata->children($namespaces['dc']);
		$author = $dc->creator;
		$title = $dc->title;
		// Remove some special chars
		$title = removeSpecialChars($title);

		foreach($opf->manifest as $file) {
			foreach($file->item as $track) {
				if ($track['id'] == 'cover') {
					$cover = (string)$track['href'];
					if ($isoebps == TRUE){
						if(preg_match("/(html|xhtml|htm)/i", $cover)){
 							$coverpath = 'http://via.placeholder.com/230x350&text='.$title;
						}
						else {
							$coverpath = TMPDIRECTORY . $subtmp . '/OEBPS/' . $cover;
						}
						//print_r('Coverpath: '.$coverpath);
						break;

					}
					else {
						if(preg_match("/(html|xhtml|htm)/i", $cover)){
 							$coverpath = 'http://via.placeholder.com/230x350&text='.$title;
						}
						else {
							$coverpath = TMPDIRECTORY . $subtmp . '/' . $cover;
						}
						//print_r('ALT_COVERPATH: '.$coverpath);
						break;
					}

				}
				else {

					// $cover = DEFAULTIMAGE;

					$coverpath = 'http://via.placeholder.com/230x350&text='.$title;
				}
			}
		}

			moveFileToDirectory($book["file"]["tmp_name"], $coverpath, $author, $title, $fileformat, $subtmp);
			$zip->close();
			
		}
	else {
		echo 'Error, Code:' . $res;
	}
}



function moveFileToDirectory($book, $coverpath, $author, $title, $fileformat, $subtmp)
{

	$fileformat = "png"; // Amazon will convert automatically
	// Create dir with authorname

	if (strlen($author) <=1) {
		$author == 'unknown Author';
	}

	if (!is_dir(EBOOKDIRECTORY . $author)) {
		mkdir(EBOOKDIRECTORY . $author);
	}

	// create dir with booktitle


	if (!is_dir(EBOOKDIRECTORY . $author . '/' . $title)) {
		mkdir(EBOOKDIRECTORY . $author . '/' . $title);
	}

	// Resize cover before saving in filedir
   $image = new \Eventviva\ImageResize($coverpath);
                $image->resizeToWidth('300');
                $image->save(EBOOKDIRECTORY . $author . '/' . $title . '/' . removeSpecialChars(basename($coverpath)));
	rename($book, EBOOKDIRECTORY . $author . '/' . $title . '/' . $title . '.' . $fileformat);

	// EBOOKDIRECTORY can be changed after indexing, it's global.

	$dyncoverpath = $author . '/' . $title . '/' . removeSpecialChars(basename($coverpath));
	$dynbookpath = $author . '/' . $title . '/' . $title . '.' . $fileformat;

	// Insert bookdetails into database

	saveBookDetailsIntoDatabase($dyncoverpath, $dynbookpath, $author, $title, $subtmp);
}



function saveBookDetailsIntoDatabase($cover, $book, $author, $title, $subtmp)
{
	global $db, $statements;

	// insert author and skip, if already exists

	$newauthor = $db->executeRow($statements['insertnewauthor'], [$author]);
	$newbook = $db->executeRow($statements['insertnewbook'], [$author, $title, $book, $cover]);
	rrmdir(TMPDIRECTORY . $subtmp);

}

// clear tmp_dir after finishing file-operation

function rrmdir($dir)
{
	if (is_dir($dir)) {
		$objects = scandir($dir);
		foreach($objects as $object) {
			if ($object != "." && $object != "..") {
				if (filetype($dir . "/" . $object) == "dir") rrmdir($dir . "/" . $object);
				else unlink($dir . "/" . $object);
			}
		}

		reset($objects);
		rmdir($dir);
	}
}


function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}


function removeSpecialChars($file) {
	$file = preg_replace('/[%]/','-', $file);
	$file = str_replace("'","",$file);
	$file = str_replace(","," ",$file);

	return $file;
}


?>