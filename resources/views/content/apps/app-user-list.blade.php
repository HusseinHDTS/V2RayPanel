@extends('layouts/layoutMaster')

@section('title', 'لیست کاربران')

@section('vendor-style')
    @vite(['resources/assets/vendor/libs/datatables-bs5/datatables.bootstrap5.scss', 'resources/assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.scss', 'resources/assets/vendor/libs/datatables-buttons-bs5/buttons.bootstrap5.scss', 'resources/assets/vendor/libs/select2/select2.scss', 'resources/assets/vendor/libs/@form-validation/form-validation.scss'])
@endsection

@section('vendor-script')
    @vite(['resources/assets/vendor/libs/moment/moment.js', 'resources/assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js', 'resources/assets/vendor/libs/select2/select2.js', 'resources/assets/vendor/libs/@form-validation/popular.js', 'resources/assets/vendor/libs/@form-validation/bootstrap5.js', 'resources/assets/vendor/libs/@form-validation/auto-focus.js', 'resources/assets/vendor/libs/cleavejs/cleave.js', 'resources/assets/vendor/libs/cleavejs/cleave-phone.js'])
@endsection

@section('page-script')
    @vite('resources/assets/js/app-user-list.js')
@endsection

@section('content')

    <div class="card">
        <div class="card-datatable table-responsive">
            <table class="datatables-users table">
                <thead class="border-top">
                    <tr>
                        <th></th>
                        <th>کاربر</th>
                        <th>خط</th>
                        <th>کلمه عبور</th>
                        <th>دستگاه های فعال</th>
                        <th>اعتبار</th>
                        <th>باقی مانده</th>
                        <th>حجم قابل استفاده</th>
                        <th>حجم استفاده شده</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
            </table>
        </div>
        <!-- Offcanvas to add new user -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasAddUser" aria-labelledby="offcanvasAddUserLabel">
            <div class="offcanvas-header">
                <h5 id="offcanvasAddUserLabel" class="offcanvas-title">افزودن کاربر</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="بستن"></button>
            </div>
            <div class="offcanvas-body mx-0 flex-grow-0 pt-0 h-100">
                <form class="add-new-user pt-0" id="addNewUserForm" action="{{ route('create-user.post') }}" method="POST">
                    @csrf
                    <div class="mb-3">
                        <label class="form-label" for="add-username">نام کاربری</label>
                        <input type="text" class="form-control" id="add-username" placeholder="User Name" name="username"
                            aria-label="User Name" />
                    </div>
                    <div class="mb-3 form-password-toggle">
                        <label class="form-label" for="userPassword">کلمه عبور</label>
                        <div class="input-group input-group-merge">
                            <input type="password" id="userPassword" name="password" class="form-control"
                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                autocomplete="new-password" />
                            <span class="input-group-text cursor-pointer" id="userPassword2"><i
                                    class="ti ti-eye-off"></i></span>
                        </div>
                    </div>
                    <div class="mb-3 form-password-toggle">
                        <label class="form-label" for="userRePassword">تایید کلمه عبور</label>
                        <div class="input-group input-group-merge">
                            <input type="password" id="userRePassword" name="rePassword" class="form-control"
                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                            <span class="input-group-text cursor-pointer" id="userRePassword2"><i
                                    class="ti ti-eye-off"></i></span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-max-sessions">تعداد کاربران</label>
                        <input id="add-user-max-sessions" class="form-control" placeholder="1" value="1"
                            aria-label="تعداد کاربران" type="number" name="max_active_session" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-max-volume">حجم</label>
                        <input id="add-user-max-volume" class="form-control" placeholder="1" value="50"
                            aria-label="حجم" type="number" name="max_volume" />
                    </div>
                    <div class="mb-3 bg-warning text-white px-4 py-2 text-center" style="border-radius: 4px">
                      <p>حجم بر اساس گیگابایت وارد شود</p>
                      <div class="text-center">
                        <span>مثال : </span>
                        <span>50</span>
                      </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="add-user-sub-days">روز</label>
                        <input id="add-user-sub-days" class="form-control" placeholder="1" value="30"
                            aria-label="روز" type="number" name="sub_days" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label" for="user-internet-type">نوع خط</label>
                        <select id="user-internet-type" class="form-select" name="internet_type">
                            <option value="irancel">ایرانسل</option>
                            <option value="hamrah_aval">همراه اول</option>
                            <option value="rightel">رایتل</option>
                            <option value="wifi">وای‌فای</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary me-sm-3 me-1 data-submit">ارسال</button>
                    <button type="reset" class="btn btn-label-secondary" data-bs-dismiss="offcanvas">لغو</button>
                </form>
            </div>
        </div>
    </div>

@endsection