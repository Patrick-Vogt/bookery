<?php

namespace App\Http\Controllers;

use App\Author;
use App\Book;
use DB;
use Illuminate\Http\Request;
use Mail;
use Storage;
use ZipArchive;

class BookController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Index resource
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $books = Book::get();

        $books->each(function ($books) {
        });

        return response()->json([
            'data' => $books,
        ]);
    }

    /**
     * Get single resource
     *
     * @param Client $client
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show(Book $book)
    {

        return response()->json([
            'data' => [
                'book' => $books],
        ]);
    }

    public function showBooksOnStartup()
    {
        //$showbooks = Book::all()->random()->limit(20)->get();

        $showbooks = DB::table('books')
            ->join('authors', 'authors.id', '=', 'books.author')
            ->select('authors.*', 'books.*')
            ->get();

        $showbooks->each(function ($showbooks) {
        });
        return response()->json([
            'data' => $showbooks,
        ]);
    }

    public function addBook(Request $request)
    {
        $books = $request->file('book');
        foreach ($books as $book) {
            Bookcontroller::getExtension($book);
            return response()->json([
                'data' => [
                    'data' => 'success'],
            ]);

        }

    }

    public function getExtension($book)
    {
        $extension = $book->getClientOriginalExtension();
        switch ($extension) {
            case 'epub':
                BookController::saveEpub($book, $extension);
                break;
            case 'mobi':
                break;
            default:
                break;
        }
    }

    public function saveEpub($book, $extension)
    {
        $subtmp = BookController::microseconds();
        $zip = new ZipArchive();
        $res = $zip->open($book);

        if ($res === true) {
            $zip->extractTo(storage_path('tempdir/' . $subtmp)); // TMP Extract to get meta
            if (!file_exists(storage_path('tempdir/' . $subtmp . '/content.opf'))) {
                $opf = simplexml_load_file(storage_path('tempdir/' . $subtmp . '/OEBPS/content.opf'));
                $isoebps = true;
            } else {
                $opf = simplexml_load_file(storage_path('tempdir/' . $subtmp . '/content.opf'));
                $isoebps = false;
            }
            $namespaces = $opf->getNameSpaces(true);
            $dc = $opf->metadata->children($namespaces['dc']);
            $author = strval($dc->creator);
            $title = $dc->title;
            // Remove some special chars
            $title = BookController::removeSpecialChars($title);
            foreach ($opf->manifest as $file) {
                foreach ($file->item as $track) {
                    if ($track['id'] == 'cover') {
                        $cover = (string) $track['href'];
                        if ($isoebps == true) {
                            if (preg_match("/(html|xhtml|htm)/i", $cover)) {
                                $coverpath = 'uploads/default.png';

                            } else {
                                $coverpath = storage_path('tempdir/' . $subtmp . '/OEBPS/' . $cover);
                            }
                            break;
                        } else {
                            if (preg_match("/(html|xhtml|htm)/i", $cover)) {
                                $coverpath = 'uploads/default.png';

                            } else {
                                $coverpath = storage_path('tempdir/' . $subtmp . '/' . $cover);
                            }
                            break;
                        }
                    } else {
                        // $cover = DEFAULTIMAGE;
                        $coverpath = 'uploads/default.png';
                    }
                }
            }
            $zip->close();

            BookController::moveFileToDirectory($book, $coverpath, $author, $title, $extension, $subtmp);

        } else {
            echo 'Error, Code:' . $res;
        }
    }

    public function moveFileToDirectory($book, $coverpath, $author, $title, $extension, $subtmp)
    {

        $extension = ".png"; // Amazon will convert automatically
        if (strlen($author) <= 1) {
            $author == 'unknown_Author';
        }

        $book->move('uploads/' . str_replace(' ', '-', $author) . '/' . str_replace(' ', '-', $title), str_replace(' ', '-', $title . $extension));
        $newbookpath = str_replace(' ', '-', 'uploads/' . $author . '/' . $title . '/' . $title . $extension);

        Storage::disk('uploads')->put(str_replace(' ', '-', $author . '/' . $title . '/' . basename($coverpath)), file_get_contents($coverpath));
        $newcoverpath = str_replace(' ', '-', 'uploads/' . $author . '/' . $title . '/' . basename($coverpath));

        // Insert bookdetails into database
        BookController::saveBookDetailsIntoDatabase($newcoverpath, $newbookpath, $author, $title, $subtmp);
    }

    public function saveBookDetailsIntoDatabase($cover, $book, $author, $title, $subtmp)
    {

        $authorname = new Author;
        $authorname = Author::updateOrCreate(['author_name' => $author]);

        $bookname = new Book;
        $bookname = Book::updateOrCreate(['author' => $authorname->id,
            'title' => $title,
            'coverpath' => $cover,
            'bookpath' => $book,
        ]);

        BookController::rrmdir(storage_path('tempdir/'));

    }

    public function microseconds()
    {
        $mt = explode(' ', microtime());
        return ((int) $mt[1]) * 1000000 + ((int) round($mt[0] * 1000000));
    }

    public function rrmdir($dir)
    {
        $file = new \Illuminate\Filesystem\Filesystem;
        $file->cleanDirectory($dir);

    }

    public function removeSpecialChars($file)
    {
        $file = preg_replace('/[%]/', '-', $file);
        $file = str_replace("'", "", $file);
        $file = str_replace(",", " ", $file);
        return $file;
    }

    public function sendBook(Request $request)
    {
        $selectedbook = $request->input('bookpath');
        $user = auth()->user();

        $data = array('email' => $user->kindleemail, 'book' => $selectedbook);

        Mail::send([], $data, function ($message) use ($data) {
            $message->to($data['email'])
                ->from(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'))
                ->subject('Ebook')
                ->attach($data['book']);

        });
        return response()->json([
            'data' => [
                'data' => 'success'],
        ]);

    }

    public function deleteBook(Request $request)
    {

        $bookid = $request->input('bookid');
        $bookpath = $request->input('bookpath');

        $deleterow = Book::where('id', '=', $bookid)->delete();
// Delete Bookdir
        $chunks = explode('/', dirname($bookpath));
        $pathtodelete = $chunks[0] . '/' . $chunks[1];

        $file = new \Illuminate\Filesystem\Filesystem;
        $file->cleanDirectory($pathtodelete);

        return response()->json([
            'data' => [
                'data' => 'success'],
        ]);

    }

}
