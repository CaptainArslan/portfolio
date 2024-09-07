<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index(): View
    {
        return view('index');
    }

    public function about(): View
    {
        return view('about');
    }

    public function privacy(): View
    {
        return view('privacy');
    }

    public function terms(): View
    {
        return view('terms');
    }

    public function termsBkp(): View
    {
        return view('term');
    }

    public function projects(): View
    {
        return view('projects');
    }

    public function contact(): View
    {
        return view('contact');
    }

    public function services(): View
    {
        return view('services');
    }

    public function projectsDetails(): View
    {
        return view('project-details');
    }
}
