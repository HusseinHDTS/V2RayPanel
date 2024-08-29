var w=(a,o)=>()=>(o||a((o={exports:{}}).exports,o),o.exports);var T=w((m,p)=>{(function(a,o){typeof m=="object"&&typeof p<"u"?p.exports=o():typeof define=="function"&&define.amd?define(o):(a=typeof globalThis<"u"?globalThis:a||self,a.FormValidation=a.FormValidation||{},a.FormValidation.plugins=a.FormValidation.plugins||{},a.FormValidation.plugins.PasswordStrength=o())})(void 0,function(){function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function O(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},u(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,n){return i.__proto__=n,i},f(e,t)}function b(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function s(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t){if(t&&(typeof t=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return s(e)}function g(e){var t=b();return function(){var i=u(e),n;if(t){var l=u(this).constructor;n=Reflect.construct(i,arguments,l)}else n=i.apply(this,arguments);return V(this,n)}}var R=FormValidation.Plugin,v=function(e){P(r,e);var t=g(r);function r(i){var n;return a(this,r),n=t.call(this,i),n.opts=Object.assign({},{minimalScore:3,onValidated:function(){}},i),n.validatePassword=n.checkPasswordStrength.bind(s(n)),n.validatorValidatedHandler=n.onValidatorValidated.bind(s(n)),n}return O(r,[{key:"install",value:function(){this.core.registerValidator(r.PASSWORD_STRENGTH_VALIDATOR,this.validatePassword),this.core.on("core.validator.validated",this.validatorValidatedHandler),this.core.addField(this.opts.field,{validators:S({},r.PASSWORD_STRENGTH_VALIDATOR,{message:this.opts.message,minimalScore:this.opts.minimalScore})})}},{key:"uninstall",value:function(){this.core.off("core.validator.validated",this.validatorValidatedHandler),this.core.disableValidator(this.opts.field,r.PASSWORD_STRENGTH_VALIDATOR)}},{key:"checkPasswordStrength",value:function(){var n=this;return{validate:function(c){var _=c.value;if(_==="")return{valid:!0};var y=zxcvbn(_),d=y.score,h=y.feedback.warning||"The password is weak";return d<n.opts.minimalScore?{message:h,meta:{message:h,score:d},valid:!1}:{meta:{message:h,score:d},valid:!0}}}}},{key:"onValidatorValidated",value:function(n){if(n.field===this.opts.field&&n.validator===r.PASSWORD_STRENGTH_VALIDATOR&&n.result.meta){var l=n.result.meta.message,c=n.result.meta.score;this.opts.onValidated(n.result.valid,l,c)}}}]),r}(R);return v.PASSWORD_STRENGTH_VALIDATOR="___PasswordStrengthValidator",v})});export default T();
