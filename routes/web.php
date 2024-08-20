<?php

use App\Http\Controllers\apps\ConfigList;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\apps\UserManagement;
use App\Http\Controllers\apps\EcommerceDashboard;
use App\Http\Controllers\apps\InvoiceList;
use App\Http\Controllers\apps\InvoicePreview;
use App\Http\Controllers\apps\InvoicePrint;
use App\Http\Controllers\apps\InvoiceEdit;
use App\Http\Controllers\apps\InvoiceAdd;
use App\Http\Controllers\apps\ProductAdd;
use App\Http\Controllers\apps\ProductList;
use App\Http\Controllers\apps\UserList;
use App\Http\Controllers\apps\UserViewAccount;
use App\Http\Controllers\authentications\LoginBasic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

// Main Page Route
Route::group(['middleware' => ['guest:admin']], function () {
  Route::get('/', [EcommerceDashboard::class, 'index',])->name('dashboard');
  Route::post('/settings', [EcommerceDashboard::class, 'update',])->name('app-settings-change.post');

  Route::get('/app/user/list', [UserList::class, 'index'])->name('app-user-list');
  Route::post('/app/user/add', [UserList::class, 'create'])->name('create-user.post');
  Route::get('/app/user/{id}/removeActiveSessions', [UserList::class, 'removeActiveSessions'])->name('delete-user-active-sessions');

  Route::get('/app/config/list', [ConfigList::class, 'index'])->name('app-config-list');
  Route::post('/app/config/add', [ConfigList::class, 'create'])->name('create-config.post');
  Route::get('/app/config/{id}', [ConfigList::class, 'show'])->name('edit-config');
  Route::post('/app/config/{id}', [ConfigList::class, 'edit'])->name('edit-config.post');
  Route::get('/app/config/{id}/delete', [ConfigList::class, 'delete'])->name('delete-config');
  Route::get('/app/config/{id}/toggle', [ConfigList::class, 'toggle'])->name('toggle-config-status');

  Route::post('/auth/logout', [LoginBasic::class, 'logout'])->name('logout');
  Route::get('/app/user/view/account/{id}', [UserViewAccount::class, 'index'])->name('app-user-view-account');

  Route::resource('/user-list', UserManagement::class);
});

Route::get('/auth/login', [LoginBasic::class, 'index'])->name('auth-login-basic');
Route::post('/auth/login', [LoginBasic::class, 'login'])->name('auth-login-basic.post');

Route::get('/run-fresh-migrations', function(Request $request) {
  if ($request->query('password') === 'husseindts') {
      Artisan::call('migrate:fresh',['--force'=>true]);
      return 'Migrations executed';
  }
  return 'Unauthorized';
});
Route::get('/run-migrations', function(Request $request) {
  if ($request->query('password') === 'husseindts') {
      Artisan::call('migrate');
      return 'Migrations executed';
  }
  return 'Unauthorized';
});
Route::get('/run-seeds', function(Request $request) {
  if ($request->query('password') === 'husseindts') {
      Artisan::call('db:seed', ["--force" => true]);
      return 'Seeding executed';
  }
  return 'Unauthorized';
});