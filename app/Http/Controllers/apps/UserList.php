<?php

namespace App\Http\Controllers\apps;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UserList extends Controller
{

  public function create(Request $request)
  {
    User::create($request->all());

    return redirect()->route('app-user-list')->with('success','کاربر ایجاد شد');

  }
  public function resetVolume($id){
    $user = User::findOrFail($id);
    $user->current_volume = 0;
    $user->save();
    return redirect()->route('app-user-list')->with('success','حجم تمدید شد');
  }
  public function resetDays($id){
    $user = User::findOrFail($id);
    $user->start_sub_date = now();
    $user->save();
    return redirect()->route('app-user-list')->with('success','اعتبار تمدید شد');
  }
  public function delete($id){
    $user = User::findOrFail($id);
    if ($user) {
      $tokens = $user->tokens;
      foreach ($tokens as $token) {
        $token->revoke();
      }
      $user->delete();
    }
    return redirect()->route('app-user-list');
  }
  public function removeActiveSessions($id)
  {
    $user = User::findOrFail($id);
    if ($user) {
      $tokens = $user->tokens;
      foreach ($tokens as $token) {
        $token->revoke();
      }
      $user->active_sessions = 0;
      $user->save();
    }
    return redirect()->route('app-user-list');
  }
  public function index()
  {
    return view('content.apps.app-user-list');
  }
}
