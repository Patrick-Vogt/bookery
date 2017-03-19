<?PHP
require_once 'app/settings.php';
require_once 'app/functions.php';

switch ($_POST['action']) {
	case 'addbooks':
		addbooks();
		break;

	case 'sendebook':
		SendMailToReader($_POST['ebook']);
		break;

	default:
		break;
}


?>
