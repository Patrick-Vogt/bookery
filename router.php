<?PHP
include 'app/settings.php';
include 'app/functions.php';

if (isset($_POST['action'])) {

switch ($_POST['action']) {
	case 'addbooks':
		addBooks();
		break;

	case 'sendebook':
		SendMailToReader($_POST['ebook']);
		break;

	case 'performsearch':
			performsearch($_POST['query']);
	break;

	case 'countbooks':
		countBooksOnStartup();
	break;

	case 'loadrandombooks':
		loadSomeRandomBooksOnStartup();
	break;	

	default:

		break;
};

}

 if(!empty($_FILES)) {
	$currentBook = $_FILES;
	saveBook($currentBook);

}
?>
