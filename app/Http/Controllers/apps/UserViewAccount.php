<?php

namespace App\Http\Controllers\apps;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;

class UserViewAccount extends Controller
{
  public function index($id)
  {
    $admin = Admin::with(['roles'])->findOrFail($id);
    return view('content.apps.app-user-view-account', compact('admin'));
  }
}