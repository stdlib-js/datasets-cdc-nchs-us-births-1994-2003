"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(s){throw (e=0, s)}};};var t=i(function(p,a){
var n=require("path").resolve,o=require('@stdlib/fs-read-json/dist').sync,u=n(__dirname,"..","data","data.json"),v={encoding:"utf8"};function d(){var r=o(u,v);if(r instanceof Error)throw r;return r}a.exports=d
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
