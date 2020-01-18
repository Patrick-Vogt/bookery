@extends('layouts.app')

@section('content')
    @component('components.full-page-section')
        @component('components.card')
            @slot('title')
                <span class="icon"><i class="mdi mdi-laravel"></i></span>
                <span>Fairbutler Dashboard</span>
            @endslot

            <div class="content">
                <p>
                    
                    Bitte loggen Sie sich ein um fortzufahren
                </p>
            </div>
            <hr>
            <div class="buttons">
                <a href="{{ route('login') }}" class="button is-black">Login</a>
                <a href="{{ route('register') }}" class="button is-black is-outlined">Register</a>
            </div>
        @endcomponent
    @endcomponent
@endsection