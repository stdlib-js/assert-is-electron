"use strict";var s=function(v,e){return function(){try{return e||v((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var t=s(function(m,i){
i.exports=process
});var n=s(function(x,c){
var a=require('@stdlib/utils-native-class/dist'),p=require('@stdlib/assert-is-plain-object/dist'),o=require('@stdlib/assert-is-string/dist').isPrimitive,r=t();function b(){return typeof r=="object"&&a(r)==="[object process]"&&p(r.versions)&&o(r.versions.electron)&&o(r.versions.chrome)&&(r.type==="browser"||r.type==="renderer")}c.exports=b
});var q=n(),l=q();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
