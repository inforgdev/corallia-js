import a from"path";import{writeFileSync as e}from"fs";var r={scss:{extname:"scss",grammar:{var:{def:"$__NAME: __VALUE;",usage:"$__NAME",nameCase:"-"}}},less:{extname:"less",grammar:{var:{def:"@__NAME: __VALUE;",usage:"@__NAME",nameCase:"-"}}},styl:{extname:"styl",grammar:{var:{def:"__NAME = __VALUE;",usage:"__NAME",nameCase:"-"}}}};var n={dist:function(e){let r=e.dirname,n=e.extname,t=e.filename;return n.startsWith(".")||(n=`.${n}`),a.join(r,t).concat(`${n}`)}},t={name:"__NAME",value:"__VALUE",pointer:"$"};function s(a,e){var r=e,n=r.grammar,s="";function m(a,e){var r=a.name,n=a.value;if(n.startsWith(t.pointer)){var s=n.substring(1,n.length);n=e.var.usage.replaceAll(t.name,s)}return e.var.def.replaceAll(t.name,r).replaceAll(t.value,n)}return function a(e,n,t){for(var i in n){var l=n[i],_=null==t?i:t+e.var.nameCase+i;if(l instanceof Object)a(e,l,_);else{var u=m({name:_,value:l},e);r.minify||(u+="\n"),s+=u}}return s}(n,a),s}function m(a){var r=s(a.in.data,a.proc),t=n.dist(a.out);e(t,r)}export{r as langs,s as stringify,m as stringifyFile,n as utils};
