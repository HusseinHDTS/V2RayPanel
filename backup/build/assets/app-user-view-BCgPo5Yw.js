import{a as c}from"./axios-DBFezj-0.js";(function(){const s=document.querySelector(".suspend-user");s&&(s.onclick=function(){Swal.fire({title:"هشدار!",text:"پس از حذف کاربر، شما فاکتور های ثبت شده توسط کاربر را نیز پاک میکنید",icon:"warning",showCancelButton:!0,confirmButtonText:"بله حذف کن!",cancelButtonText:"لغو",customClass:{confirmButton:"btn btn-primary me-2 waves-effect waves-light",cancelButton:"btn btn-label-secondary waves-effect waves-light"},buttonsStyling:!1}).then(function(t){t.value?($.blockUI({message:'<div class="d-flex justify-content-center"><p class="mb-0 mx-2">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',css:{backgroundColor:"transparent",color:"#fff",border:"0"},overlayCSS:{opacity:.8}}),c.delete(`/api/admins/${window.adminId}`,{headers:{Authorization:`Bearer ${window.apiToken}`,"Content-Type":"application/json"}}).then(e=>{$.unblockUI(),Swal.fire({icon:"success",title:"حذف شد!",text:"کاربر مورد نظر به همراه فاکتور های آن حذف شد",confirmButtonText:"باشه",customClass:{confirmButton:"btn btn-success waves-effect waves-light"}}).then(function(i){window.location.href="/app/user/list"})}).catch(e=>{$.unblockUI(),$(".wizard-icons-invoice").block({message:'<p class="mb-0">عملیات نا موفق</p><div>'+JSON.stringify(e)+"</div>",timeout:3e3,css:{backgroundColor:"transparent",color:"#fff",border:"0"},overlayCSS:{opacity:.25}})})):(t.dismiss,Swal.DismissReason.cancel)})});const n=document.querySelectorAll(".cancel-subscription");n&&n.forEach(t=>{t.onclick=function(){Swal.fire({text:"آیا می خواهید اشتراک را لغو کنید؟",icon:"warning",showCancelButton:!0,confirmButtonText:"بله",customClass:{confirmButton:"btn btn-primary me-2 waves-effect waves-light",cancelButton:"btn btn-label-secondary waves-effect waves-light"},buttonsStyling:!1}).then(function(e){e.value?Swal.fire({icon:"success",title:"اشتراک لغو شد!",text:"اشتراک با موفقیت لغو شد.",customClass:{confirmButton:"btn btn-success waves-effect waves-light"}}):(e.dismiss,Swal.DismissReason.cancel)})}})})();
