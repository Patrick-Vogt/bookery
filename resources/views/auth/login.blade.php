@extends('layouts.app')

@section('content')
    @component('components.full-page-section')


<div class="tile is-child padding box-one has-text-centered">
        <h1 class="title is-size-1" style="color:white;">Bookery</h1>
        <p class="subtitle" style="color:white;">Your Digital Library</p>
</div><br>
        @component('components.card')
            @slot('title')
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span>{{ __('Login') }}</span>
            @endslot

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <div class="field">
                    <label class="label" for="email">{{ __('E-Mail') }}</label>
                    <div class="control">
                        <input id="email" type="email" class="input @error('email') is-danger @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    </div>
                    @error('email')
                        <p class="help is-danger" role="alert">
                            {{ $message }}
                        </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="password">{{ __('Password') }}</label>
                    <div class="control">
                        <input id="password" type="password" class="input @error('password') is-danger @enderror" name="password" required autocomplete="current-password" autofocus>
                    </div>
                    @error('password')
                        <p class="help is-danger" role="alert">
                            {{ $message }}
                        </p>
                    @enderror
                </div>

                <div class="control">
                    <label tabindex="0" class="b-checkbox checkbox is-thin">
                        <input type="checkbox" value="false" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                        <span class="check is-customcolor"></span>
                        <span class="control-label">{{ __('Remember me') }}</span>
                    </label>
                </div>

                <hr>

                <div class="field is-form-action-buttons">
                    <button type="submit" class="button is-customcolor">
                        {{ __('Login') }}
                    </button>
                    <a href="{{ route('register') }}" class="button is-customcolor is-outlined">Register</a>

                    <!-- @if (Route::has('password.request'))
                        <a class="button is-black is-outlined" href="{{ route('password.request') }}">
                            {{ __('Forgot Your Password?') }}
                        </a>
                    @endif -->
                </div>
            </form>
            <style>
            .is-customcolor {
                background-color: #7957d5;
                color: white;
            }
            body {
            background-color: #7957d5;
            }
            .card .card-header-title  {
                background-color: white;
                color: black;
            }
            .card {
                -webkit-box-shadow: 0px 0px 11px 16px rgba(93,69,158,1);
                -moz-box-shadow: 0px 0px 11px 16px rgba(93,69,158,1);
                box-shadow: 0px 0px 11px 16px rgba(93,69,158,1);
            }
            </style>
        @endcomponent
    @endcomponent
@endsection
