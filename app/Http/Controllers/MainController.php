<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Facility;
use App\Developer;
use App\Portfolio;
use App\News;

class MainController extends Controller
{
    public function homePage()
    {
        $data['facility'] = Facility::orderBy('id', 'asc')->get();
        $data['portfolio'] = Portfolio::orderBy('id', 'asc')->get();
        $data['news'] = News::orderBy('id', 'desc')->limit(2)->get();
        return view('home', $data);
    }

    public function developerDetail($id)
    {
        $data['developer'] = Developer::where('id', $id)->first();
        return view('developerDetail', $data);
    }

    public function newsDetail($id)
    {
        $data['news'] = News::where('id', $id)->first();
        return view('newsDetail', $data);
    }
}
