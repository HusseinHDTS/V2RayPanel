<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\ChangeLog;
use Illuminate\Http\Request;
use App\Models\Admin;
use App\Models\InvoiceList;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\DataTables;

class AdminsController extends Controller
{
  /**
   * Display a listing of the resource.
   */

  public function removeExpiredUsers(){
    $users = User::all();

    foreach ($users as $user) {
        // Calculate the subscription expiration date
        $expirationDate = Carbon::parse($user->start_sub_date)->addDays($user->sub_days);

        if (Carbon::now()->greaterThanOrEqualTo($expirationDate)) {
            $user->delete();
        } else {
        }
    }

  }

  public function listUserNames(Request $request)
  {
    $search = $request->input('q');
    $query = User::select('id', 'username');
    if (!empty($search)) {
      $query->where('username', 'LIKE', "%$search%");
    }
    $users = $query->get();
    return response()->json($users);
  }
  public function index()
  {
    $users = User::all();
    return response()->json([
      'data' => $users->map(function ($admin) {
        return $admin;
      }),
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    if (Auth::user()->id == $id) {
      return response()->json(['message' => 'YOU CANT DELETE YOUR SELF!!!'], 403);
    }
    DB::beginTransaction();
    try {
      $admin = Admin::find($id);
      if ($admin) {
        $invoices = InvoiceList::where('owner_id', $id)->get();
        $admin->delete();
        foreach ($invoices as $invoice) {
          ChangeLogsController::logChanges($invoice, $invoice->toArray(), Auth::user()->id, false, true);
          foreach ($invoice->invoiceDetails as $productDetail) {
            ChangeLogsController::logChanges($productDetail, $productDetail->toArray(), Auth::user()->id, false, true);

            $productDetail->delete();
          }
          $invoice->delete();
        }
        DB::commit();
        return response()->json(['message' => 'Admin removed successfully'], 200);
      } else {
        return response()->json(['message' => 'Admin not found'], 404);
      }
    } catch (\Exception $e) {
      DB::rollBack();
      return response()->json(['message' => 'Error deleting invoices and product details.', 'error' => $e->getMessage()], 500);
    }

  }
}
