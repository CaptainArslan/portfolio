@extends('layouts.app')
@section('title', 'Home')
@section('styles')
@endsection
@section('content')

    <!-- Header -->
    @include('layouts.hero')

    <!-- About-->
    <div id="about" class="basic-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-container first">
                        <h2>Hi there I'm Mark,</h2>
                        <p>And I love to create beautiful and efficient websites for my customers. I love going through
                            the entire process with the customer from concept, to design and then development and launch
                        </p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-container second">
                        <div class="time">2019 - PRESENT</div>
                        <h6>Freelance Web Developer</h6>
                        <p>Working happily on my own web projects</p>
                        <div class="time">2018 - 2019</div>
                        <h6>Lead Web Developer</h6>
                        <p>Beautiful project for a major digital agency</p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-container third">
                        <div class="time">2017 - 2018</div>
                        <h6>Senior Web Designer</h6>
                        <p>Inhouse web designer for ecommerce firm</p>
                        <div class="time">2016 - 2017</div>
                        <h6>Junior Web Designer</h6>
                        <p>Junior web designer for small web agency</p>
                    </div> <!-- end of text-container -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of basic-1 -->
    <!-- end of about -->


    <!-- Services -->
    <div id="services" class="basic-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">Offered services</h2>
                    <p class="p-heading">Web design and development have been my bread and butter for more than 5 years.
                        During that time I've discovered that I can help startups and companies with the following
                        services</p>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-4">
                    <div class="text-box">
                        <i class="far fa-gem"></i>
                        <h4>DESIGN</h4>
                        <p>Successful online projects start with good design. It establishes a solid foundation for
                            future development and allows for long term growth</p>
                    </div> <!-- end of text-box -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-box">
                        <i class="fas fa-code"></i>
                        <h4>DEVELOPMENT</h4>
                        <p>I can code my own designs or even use the customer's design as base. My focus is to generate
                            clean code that's well structured for reliability</p>
                    </div> <!-- end of text-box -->
                </div> <!-- end of col -->
                <div class="col-lg-4">
                    <div class="text-box">
                        <i class="fas fa-tv"></i>
                        <h4>BASIC SEO</h4>
                        <p>i can setup your project to use basic SEO principles which will push your project to the
                            first page on search engines and save you ads money</p>
                    </div> <!-- end of text-box -->
                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of basic-2 -->
    <!-- end of services -->

    <!-- Works -->
    <div class="basic-4">
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
        </div> <!-- end of container -->
    </div> <!-- end of basic-4 -->
    <!-- end of works -->


    <!-- Testimonials -->
    <div class="cards-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">A few words from people that chose to work with me</h2>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">

                    <!-- Card -->
                    <div class="card">
                        <div class="card-body">
                            <p class="testimonial-text">“Mark is a skilled developer which will do everything possible
                                to deliver the project on time and I really appreciate that”</p>
                            <div class="details">
                                <img src="images/testimonial-1.jpg" alt="alternative">
                                <div class="text">
                                    <div class="testimonial-author">Samantha Bloom</div>
                                    <div class="occupation">Team Leader - Syncnow</div>
                                </div> <!-- end of text -->
                            </div> <!-- end of testimonial-details -->
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-body">
                            <p class="testimonial-text">“Loved to work with Mark he's such an awesome developer with
                                great attention to details. He also has a great eye for design”</p>
                            <div class="details">
                                <img src="images/testimonial-2.jpg" alt="alternative">
                                <div class="text">
                                    <div class="testimonial-author">John Rowling</div>
                                    <div class="occupation">Marketing Manager - Nexlite</div>
                                </div> <!-- end of text -->
                            </div> <!-- end of testimonial-details -->
                        </div>
                    </div>
                    <!-- end of card -->

                    <!-- Card -->
                    <div class="card">
                        <div class="card-body">
                            <p class="testimonial-text">“So glad we started working with Mark. We've used many times
                                his design and development skills for our inhouse online projects”</p>
                            <div class="details">
                                <img src="images/testimonial-3.jpg" alt="alternative">
                                <div class="text">
                                    <div class="testimonial-author">Lana Smith</div>
                                    <div class="occupation">General Manager - Shifter</div>
                                </div> <!-- end of text -->
                            </div> <!-- end of testimonial-details -->
                        </div>
                    </div>
                    <!-- end of card -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of cards-1 -->
    <!-- end of testimonials -->


    <!-- Section Divider -->
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <hr class="section-divider">
            </div> <!-- end of col -->
        </div> <!-- end of row -->
    </div> <!-- end of container -->
    <!-- end of section divider -->


    <!-- Questions -->
    <div class="accordion-1">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">Frequent questions</h2>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">

                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                    data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How can I contact you and quickly get a quote for my online project?
                                </button>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social
                                    media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                    aria-controls="collapseTwo">
                                    Do you create designs from the ground up or you are using themes?
                                </button>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social
                                    media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                    aria-controls="collapseThree">
                                    Will I receive any included maintenance or warranty after project delivery?
                                </button>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social
                                    media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                    aria-controls="collapseFour">
                                    If something goes wrong with the project can I have my money back?
                                </button>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social
                                    media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFive">
                                <button class="btn btn-link btn-block text-left collapsed" type="button"
                                    data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                    aria-controls="collapseFive">
                                    What's your preferred method of payment and do you need an advance?
                                </button>
                            </div>
                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    The best way to reach me is through the contact form of by messaging me on my social
                                    media accounts. For a fast quote make sure your provide many project details
                                </div>
                            </div>
                        </div>
                    </div> <!-- end of accordion -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of accordion-1 -->
    <!-- end of questions -->


    <!-- Contact -->
    <div id="contact" class="form-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Contact details</h2>
                    <p class="p-heading">For any type of online project please don't hesitate to get in touch with me.
                        The fastest way is to send me your message using the following email <a class="blue no-line"
                            href="#your-link">contact@domain.com</a></p>
                </div> <!-- end of col -->
            </div> <!-- end of row -->
            <div class="row">
                <div class="col-lg-12">

                    <!-- Contact Form -->
                    <form id="contactForm">
                        <div class="form-group">
                            <input type="text" class="form-control-input" id="cname" required>
                            <label class="label-control" for="cname">Name</label>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control-input" id="cemail" required>
                            <label class="label-control" for="cemail">Email</label>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control-textarea" id="cmessage" required></textarea>
                            <label class="label-control" for="cmessage">Project details</label>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control-submit-button">Submit</button>
                        </div>
                    </form>
                    <!-- end of contact form -->

                </div> <!-- end of col -->
            </div> <!-- end of row -->
        </div> <!-- end of container -->
    </div> <!-- end of form-1 -->
    <!-- end of contact -->

@endsection

@section('scripts')

@endsection
