@extends('layouts.app')

@section('content')
    @component('components.full-page-section')
        @component('components.card')
            @slot('title')
                <span class="icon"><i class="mdi mdi-account-check"></i></span>
                <span>{{ __('Register') }}</span>
            @endslot

            <form method="POST" action="{{ route('register') }}">
                @csrf

                <div class="field">
                    <label class="label" for="email">{{ __('Name') }}</label>
                    <div class="control">
                        <input id="name" type="text" class="input @error('name') is-danger @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                    </div>
                    @error('name')
                        <p class="help is-danger" role="alert">
                            {{ $message }}
                        </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="email">{{ __('E-Mail Address') }}</label>
                    <div class="control">
                        <input id="email" type="email" class="input @error('email') is-danger @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
                    </div>
                    @error('email')
                    <p class="help is-danger" role="alert">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="kindleemail">{{ __('Kindle E-Mail Address') }}</label>
                    <div class="control">
                        <input id="kindleemail" type="email" class="input @error('email') is-danger @enderror" name="kindleemail" value="{{ $email ?? old('kindleemail') }}" required autocomplete="kindleemail" autofocus>
                    </div>
                    @error('kindleemail')
                    <p class="help is-danger" role="alert">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="password">{{ __('Password') }}</label>
                    <div class="control">
                        <input id="password" type="password" class="input @error('password') is-danger @enderror" name="password" required autocomplete="new-password" autofocus>
                    </div>
                    @error('password')
                    <p class="help is-danger" role="alert">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="field">
                    <label class="label" for="password-confirm">{{ __('Confirm Password') }}</label>
                    <div class="control">
                        <input id="password-confirm" type="password" class="input" name="password_confirmation" required autocomplete="new-password" autofocus>
                    </div>
                </div>

                <hr>

                <div class="field is-form-action-buttons">
                    <button type="submit" class="button is-customcolor">
                        {{ __('Register') }}
                    </button>

                    <a class="button is-customcolor is-outlined" href="{{ route('login') }}">
                        {{ __('Login') }}
                    </a>
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
