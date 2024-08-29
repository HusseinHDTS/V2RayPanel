import{a as f}from"./axios-DBFezj-0.js";$(function(){isDarkStyle?(config.colors_dark.borderColor,config.colors_dark.bodyBg,config.colors_dark.headingColor):(config.colors.borderColor,config.colors.bodyBg,config.colors.headingColor);var i=$(".datatables-configs"),d=$(".select2");if(baseUrl+"",d.length){var n=d;n.wrap('<div class="position-relative"></div>').select2({placeholder:"انتخاب کشور",dropdownParent:n.parent()})}var l=$(".users-list-select");if(l.length){var n=l;n.select2({dropdownParent:$("#canvasAddCustomConfig"),language:{searching:function(){return"درحال جستجو..."},noResults:function(){return"کاربری یافت نشد"}},ajax:{url:"/api/user-names",dataType:"json",beforeSend:function(a){a.setRequestHeader("Authorization","Bearer "+window.apiToken)},data:function(a){return{q:a.term}},processResults:function(a){let e=$.map(a,function(t){return{id:t.id,text:t.username}});return e.unshift({id:"",text:"همه کاربران"}),{results:e}}}})}var c=$(".data-submit");if(c){var n=c;n.on("click",function(){var a=$(".add-new-config"),e={};a.find("input").each(function(){var t=$(this).attr("name"),s=$(this).val();e[t]=s}),a.find("textarea").each(function(){var t=$(this).attr("name"),s=$(this).val();e[t]=s}),a.find("select").each(function(){var t=$(this).attr("name");e[t]=$(this).val()}),$.blockUI({message:'<div class="d-flex justify-content-center"><p class="mb-0 mx-2">منتظر بمانید...</p> <div class="sk-wave m-0"><div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div> <div class="sk-rect sk-wave-rect"></div></div> </div>',css:{backgroundColor:"transparent",color:"#fff",border:"0"},overlayCSS:{opacity:.8}}),f.post("/api/configs",e,{headers:{Authorization:`Bearer ${window.apiToken}`,"Content-Type":"application/json"}}).then(t=>{$.unblockUI(),$.blockUI({message:'<p class="mb-0">عملیات موفق</p>',timeout:3e3,css:{backgroundColor:"transparent",color:"#fff",border:"0"},overlayCSS:{opacity:.6}}),window.location.href="/app/config/list"}).catch(t=>{console.log(t),$.unblockUI(),$.blockUI({message:'<p class="mb-0">عملیات نا موفق</p><div>'+JSON.stringify(t)+"</div>",timeout:3e3,css:{backgroundColor:"transparent",color:"#fff",border:"0"},overlayCSS:{opacity:.25}})})})}if(i.length)var u=i.DataTable({ajax:{url:"/api/configs",type:"GET",beforeSend:function(r){r.setRequestHeader("Authorization","Bearer "+window.apiToken)}},columns:[{data:""},{data:"id"},{data:"id"},{data:"id"},{data:"id"},{data:"id"},{data:"id"},{data:"id"},{data:"id"}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(r,a,e,t){return""}},{targets:1,responsivePriority:4,render:function(r,a,e,t){return console.log(e),e.order}},{targets:2,responsivePriority:4,render:function(r,a,e,t){return console.log(e),e.title}},{targets:3,render:function(r,a,e,t){return e.internet_type}},{targets:4,render:function(r,a,e,t){return e.assigned_to?"خیر":"بله"}},{targets:5,render:function(r,a,e,t){return e.user?`<a href="/users/${e.user.id}">${e.user.username}</a>`:"همه"}},{targets:6,render:function(r,a,e,t){function s(o,m=32){return o.length>m?o.substring(0,m)+"...":o}return s(e.config)}},{targets:7,render:function(r,a,e,t){if(e.active=="true"){var s="bg-label-success";return'<span class="badge '+s+'" > فعال </span>'}else{var s="bg-label-danger";return'<span class="badge '+s+'" > غیرفعال </span>'}}},{targets:-1,title:"عملیات",searchable:!1,orderable:!1,render:function(r,a,e,t){var s=`/app/config/${e.id}`,o="";return e.active=="true"?o="غیرفعال کردن":o="فعال کردن",`<div class="d-flex align-items-center"><a href="javascript:;" class="text-body dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="ti ti-dots-vertical ti-sm mx-1"></i></a><div class="dropdown-menu dropdown-menu-end m-0"><a href="${s}" class="dropdown-item">ویرایش</a><a href="${s}/delete" class="dropdown-item">حذف</a><a href="${s}/toggle" class="dropdown-item">${o}</a></div></div>`}}],order:[[1,"desc"]],dom:'<"row me-2"<"col-md-2"<"me-3"l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',language:{url:assetsPath+"json/i18n/datatables-bs5/fa.json",sLengthMenu:"_MENU_",search:"",searchPlaceholder:"جستجو.."},buttons:[{text:'<span class="d-none d-sm-inline-block">افزودن کانفیگ</span><i class="ti ti-settings ms-0 ms-sm-1 ti-xs"></i>',className:"add-new btn btn-primary waves-effect waves-light mx-3",attr:{"data-bs-toggle":"offcanvas","data-bs-target":"#canvasAddCustomConfig"}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(r){var a=r.data();return"جزئیات "+a.name}}),type:"column",renderer:function(r,a,e){var t=$.map(e,function(s,o){return s.title!==""?'<tr data-dt-row="'+s.rowIndex+'" data-dt-column="'+s.columnIndex+'"><td>'+s.title+":</td> <td>"+s.data+"</td></tr>":""}).join("");return t?$('<table class="table"/><tbody />').append(t):!1}}}});$(".datatables-users tbody").on("click",".delete-record",function(){u.row($(this).parents("tr")).remove().draw()}),setTimeout(()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")},300)});(function(){const i=document.querySelectorAll(".phone-mask"),d=document.getElementById("addNewConfigForm");i&&i.forEach(function(n){new Cleave(n,{phone:!0})}),FormValidation.formValidation(d,{fields:{username:{validators:{notEmpty:{message:"نام کامل را وارد کنید"}}},password:{validators:{notEmpty:{message:"رمز عبور را وارد کنید"},stringLength:{min:8,message:"رمز عبور باید حداقل 8 کاراکتر باشد"}}},repassword:{validators:{notEmpty:{message:"تایید رمز عبور را وارد کنید"},identical:{compare:function(){return d.querySelector('[name="password"]').value},message:"رمز عبور و تایید آن یکسان نیستند"}}},max_active_session:{validators:{notEmpty:{message:"تعداد نشست‌های فعال را وارد کنید"},numeric:{message:"این فیلد باید یک عدد باشد"},between:{min:1,message:"تعداد نشست‌های فعال باید حداقل 1 باشد"}}},max_volume:{validators:{notEmpty:{message:"حجم مجاز را وارد کنید"},numeric:{message:"این فیلد باید یک عدد باشد"},between:{min:0,message:"حجم مجاز باید حداقل 0 باشد"}}},sub_days:{validators:{notEmpty:{message:"تعداد روز های اشتراک را وارد کنید"},numeric:{message:"این فیلد باید یک عدد باشد"},between:{min:1,message:"تعداد روز های مجاز باید حداقل 1 باشد"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"",rowSelector:function(n,l){return".mb-3"}}),autoFocus:new FormValidation.plugins.AutoFocus}})})();