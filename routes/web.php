<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('/books')->group(function () {
    Route::get('getrandombooks', 'BookController@showBooksOnStartup');
    Route::post('addbook', 'BookController@addBook');
    Route::post('send', 'BookController@sendBook');
    Route::post('delete', 'BookController@deleteBook');




});

Route::prefix('/user')->group(function () {
    Route::get('', 'CurrentUserController@show');
    Route::patch('', 'CurrentUserController@update');
    Route::patch('/password', 'CurrentUserController@updatePassword');
});

/*
 * File upload (e.g. avatar)
 * */
Route::post('/files/store', 'FilesController@store');
