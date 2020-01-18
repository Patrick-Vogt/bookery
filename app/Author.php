<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    public $timestamps = false;
    protected $table = 'authors';

    //protected $with = ['books'];

    protected $fillable = [
        'author_name'
    ];

     public function books()
{
return $this->hasMany('App\Book');
} 

/*     public function author()
    {
        return $this->belongsTo('App\Author');
    } */

}
