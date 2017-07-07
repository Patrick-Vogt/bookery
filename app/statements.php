<?php
  $statements = array (

    'insertnewauthor' => 'INSERT INTO authors (author_name) VALUES (?)  ON DUPLICATE KEY UPDATE author_name = author_name',

    'insertnewbook'   => 'INSERT INTO books (author_id, title, bookpath, coverpath) VALUES ((SELECT id FROM authors WHERE author_name=?),?,?,?)',

    'countbooksonstartup' => 'SELECT COUNT(*) AS books FROM books',

    'loadrandombooks' => 'SELECT title, bookpath, coverpath, author_name FROM books JOIN authors ON(authors.id = books.author_id) ORDER BY RAND() LIMIT 40',

    'performsearch' => 'SELECT title, bookpath, coverpath, author_name FROM books JOIN authors ON(authors.id = books.author_id) WHERE title like UPPER(CONCAT("%",?,"%")) OR author_name  like UPPER(CONCAT("%",?,"%"))',

  )
?>
