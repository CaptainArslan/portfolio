@extends('layouts.app')
@section('title', 'About')
@section('styles')
@endsection
@section('content')

    <!-- Header -->
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                        <h1 class="h1-large">About Me</h1>
                        <a class="btn-solid-lg page-scroll" href="{{ route('about') }}">Discover</a>
                        <a class="btn-outline-lg page-scroll" href="{{ route('contact') }}"><i
                                class="fas fa-user"></i>Contact Me</a>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </header> <!-- end of header -->
    <!-- end of header -->


@endsection

@section('scripts')

@endsection
