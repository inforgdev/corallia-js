import{mkdirSync as e,writeFileSync as n}from"fs";import{join as t,dirname as a}from"path";function r(e){console.log("Illegal argument exception: "+JSON.stringify(e,null,2))}function _(e){console.log(`${e} is undefined`)}let l;function i(e){let n=e.in.data;return l=e.in.grammar,void 0===n?_("options.in.data"):void 0===l?_("options.in.grammar"):g(n,l)}function o(e,n=l){return"ref"!==e.type?r(e):n.ref.replaceAll("_NAME_",e.name)}function u(e,n=l){return"val"!==e.type?r(e):n.val.replaceAll("_NAME_",e.expression)}function s(e,n=l){if(void 0===e)return r(e);switch(e.type){case"ref":return o(e,n);case"val":return u(e,n);default:return r(e)}}function c(e,n=l){if("v"!==e.type)return r(e);let t=s(e.expression,n);return n.var.replaceAll("_NAME_",e.name).replaceAll("_EXPRESSION_",t)}function m(e,n=l){if("dec"!==e.type)return r(e);let t=s(e.value,n);return n.dec.replaceAll("_PROP_",e.prop).replaceAll("_VALUE_",t)}function p(e,n=l){return"param"!==e.type?r(e):e.default?n.paramDefault.replaceAll("_NAME_",e.name).replaceAll("_DEFAULT_",e.default):n.param.replaceAll("_NAME_",e.name)}function f(e,n=l){let t=[];if(Array.isArray(e))for(let a in e)t.push(p(e[a],n));else t.push(p(e,n));return t.join(n.paramSep)}function A(e,n=l){return"arg"!==e.type?r(e):s(e.expression,n)}function d(e,n=l){let t=[];if(Array.isArray(e))for(let a in e)t.push(A(e[a],n));else t.push(A(e,n));return t.join(n.argSep)}function E(e,n=l){return"call"!==e.type?r(e):n.call.replace("_NAME_",e.name).replaceAll("_ARGS_",d(e.args,n))}function M(e,n=l){if("mixin"!==e.type)return r(e);let t=n.mixin.replaceAll("_NAME_",e.name).replaceAll("_PARAMS_",f(e.params,n)).replaceAll("_BODY_",N(e.body,n));return n.needBrln&&(t+="\n"),t}function N(e,n=l){let t=e,a="";for(let e in t){let _,l=t[e];switch(l.type){case"call":_=E(l,n);break;case"v":_=c(l,n);break;case"dec":_=m(l,n);break;case"mixin":_=M(l,n);break;default:return r(l)}let i=n.statementEnd;e!=t.length-1||n.needLastStatementEnd||(i=""),n.needBrln&&(i+="\n"),a=a+n.indent+_+i}return a}function g(e,n=l){let t="";for(let a in e){let _,l=e[a];switch(l.type){case"call":_=E(l,n);break;case"v":_=c(l,n);break;case"mixin":_=M(l,n);break;default:return r(l)}let i=n.statementEnd;(a==e.length-1&&!n.needLastStatementEnd||"mixin"===l.type)&&(i=""),n.needBrln&&"mixin"!==l.type&&(i+="\n"),t=t+_+i}return t}Object.freeze({__proto__:null,unexpected:r,propUndefined:_});var v=Object.freeze({__proto__:null,default:i,$ref:o,$val:u,$exp:s,$var:c,$dec:m,$param:p,$params:f,$arg:A,$args:d,$call:E,$mixin:M,$body:N,$globalStatements:g});function S(r,_){const l=t(_.dirname,_.name+_.extname),i=a(l);e(i,{recursive:!0}),n(l,r)}function x(e,n){const t=n.out.file;!function(e="./dist/",t="concrete",a=n.in.grammar.extname){n.out.file.dirname=e,n.out.file.name=t,n.out.file.extname=a}(t.dirname,t.name,t.extname),S(e,t)}var y=Object.freeze({__proto__:null,writeFileResolve:S,default:function(e){S(i(e),e.out.file)},handleWriteFile:x});function O(e){return{type:"arg",expression:e}}function $(e,n){return{type:"param",name:e,default:n}}var R=Object.freeze({__proto__:null,_call:function(e,n){return{type:"call",name:e,args:n}},_arg:O,_dec:function(e,n){return{type:"dec",prop:e,value:n}},_var:function(e,n){return{type:"v",name:e,expression:n}},_val:function(e){return{type:"val",expression:e}},_ref:function(e){return{type:"ref",name:e}},_mixin:function(e,n,t){return{type:"mixin",name:e,params:n,body:t}},_param:$,_args:function(...e){let n=[];for(let t in e){let a=e[t];n.push(O(a))}return n},_params:function(...e){let n=[];for(let t in e){let a=e[t],r=a[0],_=a[1];n.push($(r,_))}return n}});Object.freeze({__proto__:null,less:{extname:".less",wordSep:"-",statementEnd:";",needLastStatementEnd:!0,needBrln:!0,var:"@_NAME_: _EXPRESSION_",dec:"_PROP_: _VALUE_",call:"._NAME_(_ARGS_)",argSep:", ",arg:"",ref:"@_NAME_",val:"_NAME_",indent:"  ",mixin:"._NAME_(_PARAMS_) {\n_BODY_}",param:"@_NAME_",paramDefault:"@_NAME_: _DEFAULT_",paramSep:", "},lessMin:{extname:".less",wordSep:"-",statementEnd:";",needLastStatementEnd:!1,needBrln:!1,var:"@_NAME_:_EXPRESSION_",dec:"_PROP_:_VALUE_",call:"._NAME_(_ARGS_)",argSep:",",arg:"",ref:"@_NAME_",val:"_NAME_",indent:"",mixin:"._NAME_(_PARAMS_){_BODY_}",param:"@_NAME_",paramDefault:"@_NAME_:_DEFAULT_",paramSep:","},scss:{extname:".scss",wordSep:"-",statementEnd:";",needLastStatementEnd:!0,needBrln:!0,var:"$_NAME_: _EXPRESSION_",dec:"_PROP_: _VALUE_",call:"@include _NAME_(_ARGS_)",argSep:", ",arg:"",ref:"$_NAME_",val:"_NAME_",indent:"  ",mixin:"@mixin _NAME_(_PARAMS_) {\n_BODY_}",param:"$_NAME_",paramDefault:"$_NAME_: _DEFAULT_",paramSep:", "},styl:{extname:".styl",wordSep:"-",statementEnd:";",needLastStatementEnd:!0,needBrln:!0,var:"_NAME_ = _EXPRESSION_",dec:"_PROP_: _VALUE_",call:"._NAME_(_ARGS_)",argSep:", ",arg:"",ref:"_NAME_",val:"_NAME_",indent:"  ",mixin:"_NAME_(_PARAMS_) {\n_BODY_}",param:"_NAME_",paramDefault:"_NAME_ = _DEFAULT_",paramSep:", "}});const{_var:L,_val:P,_ref:b}=R,{$ref:h}=v;let D={name:"__NAME",value:"__VALUE",pointer:"$"};function U(e,n){const t=e.name;let a=e.value;if(a.startsWith(D.pointer)){const e=a.substring(1,a.length);a=h(b(e),n)}return L(t,P(a))}function B(e,n){const t=[];return function e(n,a,r){for(var _ in a){var l=a[_];const i=null==r?_:r+n.wordSep+_;if(l instanceof Object){e(n,l,i);continue}const o=U({name:i,value:l},n);t.push(o)}}(n,e),t}function w(e){const n=B(e.in.data,e.proc.grammar);e.in.grammar=e.proc.grammar,e.in.data=n,function(e){const n=i(e);e.out.print&&console.log(n),e.out.file&&x(n,e)}(e)}var V={scss:{extname:"scss",grammar:{var:{def:"$__NAME: __VALUE;",usage:"$__NAME",nameCase:"-"}}},less:{extname:"less",grammar:{var:{def:"@__NAME: __VALUE;",usage:"@__NAME",nameCase:"-"}}},styl:{extname:"styl",grammar:{var:{def:"__NAME = __VALUE;",usage:"__NAME",nameCase:"-"}}}};function j(e){const n=B(e.in.data,{data:e.in.grammar});return e.in.data=n,e.out.file=void 0,v(e)}function k(e){const n=j(e.in.data,e.in.grammar);e.in.data=n,y(e)}export{w as corallia,V as langs,j as stringify,k as stringifyFile};
