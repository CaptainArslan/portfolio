@extends('layouts.app')
@section('title', 'Project Details')

@section('styles')
@endsection

@section('content')

    <!-- Header -->
    <header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1>All projects</h1>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </header> <!-- end of ex-header -->
    <!-- end of header -->

    <!-- Projects -->



    <!-- Works -->
    <div class="basic-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            <a href="project.html">
                                <img class="img-fluid" src="images/work-1.jpg" alt="alternative">
                            </a>
                        </div> <!-- end of image-container -->
                        <p><strong>For:</strong> Zigoland, <strong>Project:</strong> started a new website from ground
                            up for a new product <a class="blue" href="project.html">details</a></p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            <a href="project.html">
                                <img class="img-fluid" src="images/work-2.jpg" alt="alternative">
                            </a>
                        </div> <!-- end of image-container -->
                        <p><strong>For:</strong> Visodream, <strong>Project:</strong> developed a new forum for the
                            Visodream community <a class="blue" href="project.html">details</a></p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            <a href="project.html">
                                <img class="img-fluid" src="images/work-3.jpg" alt="alternative">
                            </a>
                        </div> <!-- end of image-container -->
                        <p><strong>For:</strong> Primoday, <strong>Project:</strong> complete redesign of their
                            corporate website and platform <a class="blue" href="project.html">details</a></p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            <a href="project.html">
                                <img class="img-fluid" src="images/work-4.jpg" alt="alternative">
                            </a>
                        </div> <!-- end of image-container -->
                        <p><strong>For:</strong> Nextlite, <strong>Project:</strong> created a custom video editing and
                            upload web app <a class="blue" href="project.html">details</a></p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            <a href="project.html">
                                <img class="img-fluid" src="images/work-5.jpg" alt="alternative">
                            </a>
                        </div> <!-- end of image-container -->
                        <p><strong>For:</strong> Syncnow, <strong>Project:</strong> web design for their corporate
                            websites and landing pages <a class="blue" href="project.html">details</a></p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-container">
                        <div class="image-container">
                            <a href="project.html">
                                <img class="img-fluid" src="images/work-6.jpg" alt="alternative">
                            </a>
                        </div> <!-- end of image-container -->
                        <p><strong>For:</strong> Shifter, <strong>Project:</strong> started a new website from ground up
                            for a new product <a class="blue" href="project.html">details</a></p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="pagination-container mt-3">
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link rounded-circle" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <a class="page-link rounded-circle" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link rounded-circle" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </div> <!-- end of container -->
    </div> <!-- end of basic-4 -->
    <!-- end of works -->

@endsection

@section('scripts')

@endsection
