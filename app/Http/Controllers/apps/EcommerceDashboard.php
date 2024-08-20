<?php

namespace App\Http\Controllers\apps;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Settings;

class EcommerceDashboard extends Controller
{
  public function index()
  {
    $settings = Settings::getSettings();
    return view('content.apps.app-dashboard',compact('settings'));
  }

  public function update(Request $request){
    $setting = Settings::getSettings();
    $setting->update($request->all());
    return redirect('/')->with('success', 'تنظیمات ویرایش شد');
  }

}
