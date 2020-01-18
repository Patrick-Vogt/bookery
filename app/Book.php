<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    public $timestamps = false;
    protected $table = 'books';

    //protected $with = ['author'];

    protected $fillable = [
        'author',
        'title',
        'bookpath',
        'coverpath'
    ];

/*     public function products()
{
return $this->hasMany('App\Product');
} */

    public function author()
    {
        return $this->belongsTo('App\Author');
    }

}
