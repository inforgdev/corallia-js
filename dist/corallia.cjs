"use strict";function e(e,n){!function e(t,r){for(var a in t){var _=t[a];const s=null==r?a:r+"-"+a;_ instanceof Object?e(_,s):n({name:s,value:_})}}(e)}function n(e){const n=e;return Object.keys(e).forEach((t=>{let r=e[t];r.startsWith("$")&&(r=e[r.replaceAll("$","")],n[t]=r)})),n}function t(e,n,t){return e.generateMatches(n,t,["val","ref"])}function r(e){return{type:"arg",expression:e}}function a(e,n,r){const a={...n,expression:t(e,n.expression,r)};return e.render(a)}function _(e,n,t){let r;return r=Array.isArray(n.items)?n.items.map((n=>e.generate(n,t,a))):[e.generate(n.items,t,a)],r.join(t.argSep)}function s(e,n,t){return e.generateMatches(n,t,["call","var","dec","mixin"])}function o(e){return{type:"body",items:e}}function i(e,n,t){let r="";for(let a in n.items){let _=s(e,n.items[a],t),o=t.statementEnd;a!=n.items.length-1||t.needLastStatementEnd||(o=""),t.needBrln&&(o+="\n"),r=r+t.indent+_+o}return r}function p(e,n){return{type:"param",name:e,default:n}}Object.defineProperty(exports,"__esModule",{value:!0});const l=(e,n,r)=>{let a=e.tmpl(n.default?"paramDefault":"param");const _={...n,default:n.default&&t(e,n.default,r)};return e.render(_,a)},c=(e,n,t)=>{let r;return r=Array.isArray(n.items)?n.items.map((n=>e.generate(n,t,l))):[e.generate(n.items,t,l)],r.join(t.paramSep)};function u(e){return{type:"ref",name:e}}function E(e){return{type:"val",name:e}}function m(e,n){return{type:"var",name:e,expression:n}}var d=Object.freeze({__proto__:null,$arg:a,_arg:r,$args:_,_args:function(...e){return{type:"args",items:e.map((e=>r(e)))}},$body:i,_body:o,$call:function(e,n,t){const r={name:n.name,args:e.generate(n.args,t,_)};return e.render(r)},_call:function(e,n){return{type:"call",name:e,args:n}},$dec:function(e,n,r){const a={prop:n.prop,value:t(e,n.value,r)};return e.render(a)},_dec:function(e,n){return{type:"dec",prop:e,value:n}},$mixin:function(e,n,t){const r={...n,params:e.generate(n.params,t,c),body:e.generate(o(n.body),t,i)};return e.render(r)+(t.needBrln?"\n":"")},_mixin:function(e,n,t){return{type:"mixin",name:e,params:n,body:t}},$param:l,_param:p,$params:c,_params:function(...e){return{type:"params",items:e.map((e=>Array.isArray(e)?p(e[0],e[1]):p(e)))}},$ref:function(e,n,t){return e.render(n)},_ref:u,$root:function(e,n,t){let r;return r=Array.isArray(n.items)?n.items.map((n=>s(e,n,t))):[s(e,n.items,t)],r.join("\n")},_root:function(e){return{type:"root",items:e}},$val:(e,n,t)=>e.render(n),_val:E,$var:function(e,n,r){const a={...n,expression:t(e,n.expression,r)};return e.render(a)},_var:m,generateExpr:t,generateStatement:s});class A extends Error{constructor(e,...n){super(e,n),this.name="OctopoError"}}class f extends A{constructor(e){super(e.type),this.name="Unexpected node"}}class N extends A{constructor(e){super(e),this.name="Template not found"}}class S extends A{constructor(e){super(e),this.name="Generator not found"}}function M(e,n){const t=n[e];if(void 0===t)throw new N(e);return t}function g(e,n,t){return(t||function(e){let n=d[`$${e}`];if(void 0===n)throw new S(`$${e}`);return n}(e.type))(function(e,n){return{tmpl:t=>M(t||e.type,n),render:(t,r)=>function(e,n){let t=n;return Object.keys(e).forEach((n=>function(n){const r=`_${n.toUpperCase()}_`,a=e[n];t=t.replaceAll(r,a)}(n))),t}(t,r||M(e.type,n)),generate:g,generateMatches:x}}(e,n),e,n)}function x(e,n,t){if(t.includes(e.type))return g(e,n);throw new f(e)}Object.freeze({__proto__:null,OctopoError:A,UnexpectedNodeError:f,TemplateNotFoundError:N,GeneratorNotFoundError:S}),Object.freeze({__proto__:null,less:{var:"@_NAME_: _EXPRESSION_",mixin:"._NAME_(_PARAMS_) {\n_BODY_}",dec:"_PROP_: _VALUE_",param:"@_NAME_",paramDefault:"@_NAME_: _DEFAULT_",expression:"_VALUE_",call:"._NAME_(_ARGS_)",ref:"@_NAME_",val:"_NAME_",arg:"_EXPRESSION_",argSep:", ",paramSep:", ",statementEnd:";",needLastStatementEnd:!0,indent:"  ",needBrln:!0,wordSep:"-",extname:".less"},lessMin:{var:"@_NAME_:_EXPRESSION_",mixin:"._NAME_(_PARAMS_){_BODY_}",dec:"_PROP_:_VALUE_",param:"@_NAME_",paramDefault:"@_NAME_:_DEFAULT_",expression:"_VALUE_",call:"._NAME_(_ARGS_)",ref:"@_NAME_",val:"_NAME_",arg:"_EXPRESSION_",argSep:",",paramSep:",",statementEnd:";",needLastStatementEnd:!0,indent:"",needBrln:!1,wordSep:"-",extname:".less"},scss:{var:"$_NAME_: _EXPRESSION_",mixin:"@mixin _NAME_(_PARAMS_) {\n_BODY_}",dec:"_PROP_: _VALUE_",param:"$_NAME_",paramDefault:"$_NAME_: _DEFAULT_",call:"@include _NAME_(_ARGS_)",ref:"$_NAME_",val:"_NAME_",arg:"_EXPRESSION_",argSep:", ",paramSep:", ",statementEnd:";",needLastStatementEnd:!0,indent:"  ",needBrln:!0,wordSep:"-",extname:".scss"},scssMin:{var:"$_NAME_:_EXPRESSION_",mixin:"@mixin _NAME_(_PARAMS_){_BODY_}",dec:"_PROP_:_VALUE_",param:"$_NAME_",paramDefault:"$_NAME_:_DEFAULT_",expression:"_VALUE_",call:"@include _NAME_(_ARGS_)",ref:"$_NAME_",val:"_NAME_",arg:"_EXPRESSION_",argSep:",",paramSep:",",statementEnd:";",needLastStatementEnd:!1,indent:"",needBrln:!1,wordSep:"-",extname:".scss"},styl:{var:"_NAME_ = _EXPRESSION_",mixin:"_NAME_(_PARAMS_) {\n_BODY_}",dec:"_PROP_: _VALUE_",param:"_NAME_",paramDefault:"_NAME_ = _DEFAULT_",expression:"_VALUE_",call:"._NAME_(_ARGS_)",ref:"_NAME_",val:"_NAME_",arg:"_EXPRESSION_",argSep:", ",paramSep:", ",statementEnd:";",needLastStatementEnd:!0,indent:"  ",needBrln:!0,wordSep:"-",extname:".styl"},stylMin:{var:"_NAME_=_EXPRESSION_",mixin:"_NAME_(_PARAMS_){_BODY_}",dec:"_PROP_:_VALUE_",param:"_NAME_",paramDefault:"_NAME_=_DEFAULT_",expression:"_VALUE_",call:"._NAME_(_ARGS_)",ref:"_NAME_",val:"_NAME_",arg:"_EXPRESSION_",argSep:",",paramSep:",",statementEnd:";",needLastStatementEnd:!1,indent:"",needBrln:!1,wordSep:"-",extname:".styl"}});var y="$";const $=new RegExp("[^#a-f\\d]","gi"),v=new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$","i"),O={tokenName:"__NAME (__VALUE)"};exports.genGpl=function(t,r,a=O){let _=`GIMP Palette\nName: ${t}\n#\n`,s=[];const o={};e(r,(({name:e,value:n})=>o[e]=n));const i=n(o);return Object.keys(i).forEach((e=>{const n=i[e];let t=function(e,n={}){if("string"!=typeof e||$.test(e)||!v.test(e))throw new TypeError("Expected a valid hex string");let t=1;8===(e=e.replace(/^#/,"")).length&&(t=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),4===e.length&&(t=Number.parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);const r=Number.parseInt(e,16),a=r>>16,_=r>>8&255,s=255&r,o="number"==typeof n.alpha?n.alpha:t;return"array"===n.format?[a,_,s,o]:"css"===n.format?`rgb(${a} ${_} ${s}${1===o?"":` / ${Number((100*o).toFixed(2))}%`})`:{red:a,green:_,blue:s,alpha:o}}(n);if(null===t)return;const r=a.tokenName.replaceAll("__NAME",e).replaceAll("__VALUE",n),_=t.red+" "+t.green+" "+t.blue;s.push(_+" "+r)})),_+s.join("\n")},exports.octopizeTokens=function(n,t){const r=[];return e(n,(e=>{const n=function(e,n){const t=e.name;let r=e.value;if(r.startsWith(y)){const e=r.substring(1,r.length);r=g(u(e),n)}return m(t,E(r))}(e,t);r.push(n)})),r},exports.renderTokens=n,exports.tokens=e;
