"use strict";function e(e,n){!function e(t,a){for(var r in t){var _=t[r];const l=null==a?r:a+"-"+r;_ instanceof Object?e(_,l):n({name:l,value:_})}}(e)}function n(e){return{type:"arg",expression:e}}function t(e,n){return{type:"param",name:e,default:n}}Object.defineProperty(exports,"__esModule",{value:!0});var a=Object.freeze({__proto__:null,_call:function(e,n){return{type:"call",name:e,args:n}},_arg:n,_dec:function(e,n){return{type:"dec",prop:e,value:n}},_var:function(e,n){return{type:"v",name:e,expression:n}},_val:function(e){return{type:"val",expression:e}},_ref:function(e){return{type:"ref",name:e}},_mixin:function(e,n,t){return{type:"mixin",name:e,params:n,body:t}},_param:t,_args:function(...e){let t=[];for(let a in e){let r=e[a];t.push(n(r))}return t},_params:function(...e){let n=[];for(let a in e){let r=e[a],_=r[0],l=r[1];n.push(t(_,l))}return n}});function r(e,n=data){return"ref"!==e.type?unexpected(e):n.ref.replaceAll("_NAME_",e.name)}function _(e,n=data){return"val"!==e.type?unexpected(e):n.val.replaceAll("_NAME_",e.expression)}function l(e,n=data){if(void 0===e)return unexpected(e);switch(e.type){case"ref":return r(e,n);case"val":return _(e,n);default:return unexpected(e)}}function p(e,n=data){if("v"!==e.type)return unexpected(e);let t=l(e.expression,n);return n.var.replaceAll("_NAME_",e.name).replaceAll("_EXPRESSION_",t)}function i(e,n=data){if("dec"!==e.type)return unexpected(e);let t=l(e.value,n);return n.dec.replaceAll("_PROP_",e.prop).replaceAll("_VALUE_",t)}function c(e,n=data){return"param"!==e.type?unexpected(e):e.default?n.paramDefault.replaceAll("_NAME_",e.name).replaceAll("_DEFAULT_",e.default):n.param.replaceAll("_NAME_",e.name)}function u(e,n=data){let t=[];if(Array.isArray(e))for(let a in e)t.push(c(e[a],n));else t.push(c(e,n));return t.join(n.paramSep)}function s(e,n=data){return"arg"!==e.type?unexpected(e):l(e.expression,n)}function d(e,n=data){let t=[];if(Array.isArray(e))for(let a in e)t.push(s(e[a],n));else t.push(s(e,n));return t.join(n.argSep)}function o(e,n=data){return"call"!==e.type?unexpected(e):n.call.replace("_NAME_",e.name).replaceAll("_ARGS_",d(e.args,n))}function A(e,n=data){if("mixin"!==e.type)return unexpected(e);let t=n.mixin.replaceAll("_NAME_",e.name).replaceAll("_PARAMS_",u(e.params,n)).replaceAll("_BODY_",E(e.body,n));return n.needBrln&&(t+="\n"),t}function E(e,n=data){let t=e,a="";for(let e in t){let r,_=t[e];switch(_.type){case"call":r=o(_,n);break;case"v":r=p(_,n);break;case"dec":r=i(_,n);break;case"mixin":r=A(_,n);break;default:return unexpected(_)}let l=n.statementEnd;e!=t.length-1||n.needLastStatementEnd||(l=""),n.needBrln&&(l+="\n"),a=a+n.indent+r+l}return a}var f=Object.freeze({__proto__:null,$ref:r,$val:_,$exp:l,$var:p,$dec:i,$param:c,$params:u,$arg:s,$args:d,$call:o,$mixin:A,$body:E,$globalStatements:function(e,n=data){if(void 0===e)return propUndefined("ast");if(void 0===n)return propUndefined("lang");let t="";for(let a in e){let r,_=e[a];switch(_.type){case"call":r=o(_,n);break;case"v":r=p(_,n);break;case"mixin":r=A(_,n);break;default:return unexpected(_)}let l=n.statementEnd;(a==e.length-1&&!n.needLastStatementEnd||"mixin"===_.type)&&(l=""),n.needBrln&&"mixin"!==_.type&&(l+="\n"),t=t+r+l}return t}});Object.freeze({__proto__:null,less:{var:"@_NAME_: _EXPRESSION_",mixin:"._NAME_(_PARAMS_) {\n_BODY_}",dec:"_PROP_: _VALUE_",param:"@_NAME_",paramDefault:"@_NAME_: _DEFAULT_",call:"._NAME_(_ARGS_)",ref:"@_NAME_",val:"_NAME_",arg:"",argSep:", ",paramSep:", ",statementEnd:";",needLastStatementEnd:!0,indent:"  ",needBrln:!0,wordSep:"-",extname:".less"},lessMin:{var:"@_NAME_:_EXPRESSION_",mixin:"._NAME_(_PARAMS_){_BODY_}",dec:"_PROP_:_VALUE_",param:"@_NAME_",paramDefault:"@_NAME_:_DEFAULT_",call:"._NAME_(_ARGS_)",ref:"@_NAME_",val:"_NAME_",arg:"",argSep:",",paramSep:",",statementEnd:";",needLastStatementEnd:!0,indent:"",needBrln:!1,wordSep:"-",extname:".less"},scss:{var:"$_NAME_: _EXPRESSION_",mixin:"@mixin _NAME_(_PARAMS_) {\n_BODY_}",dec:"_PROP_: _VALUE_",param:"$_NAME_",paramDefault:"$_NAME_: _DEFAULT_",call:"@include _NAME_(_ARGS_)",ref:"$_NAME_",val:"_NAME_",arg:"",argSep:", ",paramSep:", ",statementEnd:";",needLastStatementEnd:!0,indent:"  ",needBrln:!0,wordSep:"-",extname:".scss"},scssMin:{var:"$_NAME_:_EXPRESSION_",mixin:"@mixin _NAME_(_PARAMS_){_BODY_}",dec:"_PROP_:_VALUE_",param:"$_NAME_",paramDefault:"$_NAME_:_DEFAULT_",call:"@include _NAME_(_ARGS_)",ref:"$_NAME_",val:"_NAME_",arg:"",argSep:",",paramSep:",",statementEnd:";",needLastStatementEnd:!1,indent:"",needBrln:!1,wordSep:"-",extname:".scss"},styl:{var:"_NAME_ = _EXPRESSION_",mixin:"_NAME_(_PARAMS_) {\n_BODY_}",dec:"_PROP_: _VALUE_",param:"_NAME_",paramDefault:"_NAME_ = _DEFAULT_",call:"._NAME_(_ARGS_)",ref:"_NAME_",val:"_NAME_",arg:"",argSep:", ",paramSep:", ",statementEnd:";",needLastStatementEnd:!0,indent:"  ",needBrln:!0,wordSep:"-",extname:".styl"},stylMin:{var:"_NAME_=_EXPRESSION_",mixin:"_NAME_(_PARAMS_){_BODY_}",dec:"_PROP_:_VALUE_",param:"_NAME_",paramDefault:"_NAME_=_DEFAULT_",call:"._NAME_(_ARGS_)",ref:"_NAME_",val:"_NAME_",arg:"",argSep:",",paramSep:",",statementEnd:";",needLastStatementEnd:!1,indent:"",needBrln:!1,wordSep:"-",extname:".styl"}}),Object.freeze({__proto__:null,unexpected:function(e){console.log("Illegal argument exception: "+JSON.stringify(e,null,2))},propUndefined:function(e){console.log(`${e} is undefined`)}});var m="$";const{_var:N,_val:M,_ref:S}=a,{$ref:x}=f,g=new RegExp("[^#a-f\\d]","gi"),v=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i"),y={tokenName:"__NAME (__VALUE)"};exports.genGpl=function(n,t,a=y){let r=`GIMP Palette\nName: ${n}\n#\n`,_=[];return e(t,(({name:e,value:n})=>{let t=function(e,n={}){if("string"!=typeof e||g.test(e)||!v.test(e))throw new TypeError("Expected a valid hex string");let t=1;8===(e=e.replace(/^#/,"")).length&&(t=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(t=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const a=Number.parseInt(e,16),r=a>>16,_=a>>8&255,l=255&a,p="number"==typeof n.alpha?n.alpha:t;return"array"===n.format?[r,_,l,p]:"css"===n.format?`rgb(${r} ${_} ${l}${1===p?"":` / ${Number((100*p).toFixed(2))}%`})`:{red:r,green:_,blue:l,alpha:p}}(n);if(null===t)return;const r=a.tokenName.replaceAll("__NAME",e).replaceAll("__VALUE",n),l=t.red+" "+t.green+" "+t.blue;_.push(l+" "+r)})),r+_.join("\n")},exports.octopizeTokens=function(n,t){const a=[];return e(n,(e=>{const n=function(e,n){const t=e.name;let a=e.value;if(a.startsWith(m)){const e=a.substring(1,a.length);a=x(S(e),n)}return N(t,M(a))}(e,t);a.push(n)})),a},exports.tokens=e;
