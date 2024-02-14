"use strict";var s=function(v,e){return function(){return e||v((e={exports:{}}).exports,e),e.exports}};var t=s(function(j,i){
i.exports=process
});var n=s(function(m,c){
var u=require('@stdlib/utils-native-class/dist'),a=require('@stdlib/assert-is-plain-object/dist'),o=require('@stdlib/assert-is-string/dist').isPrimitive,r=t();function p(){return typeof r=="object"&&u(r)==="[object process]"&&a(r.versions)&&o(r.versions.electron)&&o(r.versions.chrome)&&(r.type==="browser"||r.type==="renderer")}c.exports=p
});var b=n(),q=b();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
