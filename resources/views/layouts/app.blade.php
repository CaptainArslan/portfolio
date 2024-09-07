<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- SEO Meta Tags -->
    <meta name="description"
        content="M Arslan - Experienced PHP Laravel Developer with expertise in PHP, Laravel, MySQL, HTML, CSS, Bootstrap, APIs, AJAX, jQuery, and JavaScript. Building dynamic web applications with modern technologies.">
    <meta name="author" content="M Arslan">

    <!-- OG Meta Tags to improve the way the post looks when you share the page on Facebook, Twitter, LinkedIn -->
    <meta property="og:site_name" content="{{ env('APP_NAME') }} - PHP Laravel Developer" /> <!-- website name -->
    <meta property="og:site" content="{{ config('app.url') }}" /> <!-- website link -->
    <meta property="og:title" content="{{ env('APP_NAME') }} - Expert PHP Laravel Developer" />
    <!-- title shown in the actual shared post -->
    <meta property="og:description"
        content="Explore the portfolio of {{ env('APP_NAME') }}, a seasoned PHP Laravel developer with expertise in PHP, Laravel, MySQL, HTML, CSS, Bootstrap, APIs, AJAX, and JavaScript." />
    <!-- description shown in the actual shared post -->
    <meta property="og:image" content="{{ config('app.url') }}/images/portfolio-preview.jpg" />
    <!-- image link, make sure it's jpg -->
    <meta property="og:url" content="{{ config('app.url') }}" /> <!-- where do you want your post to link to -->
    <meta name="twitter:card" content="summary_large_image"> <!-- to have large image post format in Twitter -->



    <!-- Favicon Meta Tags -->
    <link rel="icon" href="{{ asset('images/favicons/logo.ico') }}" type="image/x-icon"> <!-- Standard favicon for browsers -->
    <link rel="shortcut icon" href="{{ asset('images/favicons/logo.ico') }}" type="image/x-icon"> <!-- Legacy support for old browsers -->

    <!-- Apple Touch Icons (for iPhone/iPad) -->
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/favicons/favicon-180x180.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('images/favicons/favicon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('images/favicons/favicon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('images/favicons/favicon-76x76.png') }}">

    <!-- Android and Windows Tiles -->
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('images/favicons/favicon-192x192.png') }}"> <!-- Android -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicons/favicon-32x32.png') }}">
    <!-- Standard icon size for most browsers -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicons/favicon-16x16.png') }}">
    <!-- Smaller size favicon -->

    <!-- Microsoft Tile for Windows -->
    <meta name="msapplication-TileColor" content="#ffffff"> <!-- Tile color for Windows -->
    <meta name="msapplication-TileImage" content="{{ asset('images/favicons/favicon-144x144.png') }}">

    <!-- Webpage Title -->
    <title>@yield('title', env('APP_NAME')) | {{ config('app.name') }}</title>

    <!-- Styles -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@600&display=swap"
        rel="stylesheet">
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/fontawesome-all.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">

    <!-- Favicon  -->
    <link rel="icon" href="images/favicon.png">
    <style>
        .pagination .page-link {
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-radius: 50%;
            padding: 0;
            margin: 0 5px;
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            color: #007bff;
            transition: background-color 0.3s, color 0.3s;
        }

        .pagination .page-link:hover {
            background-color: #007bff;
            color: #fff;
        }

        .pagination .page-item a {
            color: #007bff;
            text-decoration: none
        }

        .pagination .page-link:hover {
            background-color: #007bff;
            color: #fff;
        }

        .pagination .page-item.active .page-link {
            background-color: #007bff;
            color: #fff;
            border-color: #007bff;
        }

        .pagination .page-item.disabled .page-link {
            background-color: #e9ecef;
            color: #6c757d;
        }

        .pagination .page-link[aria-label="Previous"],
        .pagination .page-link[aria-label="Next"] {
            font-size: 1.25rem;
        }
    </style>
    @yield('styles')
</head>

<body data-spy="scroll" data-target=".fixed-top">


    @include('layouts.navbar')

    @yield('content')

    @include('layouts.footer')

    <!-- Scripts -->
    <script src="js/jquery.min.js"></script> <!-- jQuery for Bootstrap's JavaScript plugins -->
    <script src="js/bootstrap.min.js"></script> <!-- Bootstrap framework -->
    <script src="js/jquery.easing.min.js"></script> <!-- jQuery Easing for smooth scrolling between anchors -->
    <script src="js/scripts.js"></script> <!-- Custom scripts -->
    @yield('scripts')
</body>

</html>
