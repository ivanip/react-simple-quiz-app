// var MyModules=(function Manager(){
//     var modules={};
//     function define(name,deps,impl){
//         console.log("IMPL",impl)
//         console.log("Before:",deps)
//         for(var i=0;i<deps.length;i++){
//
//             deps[i]=modules[deps[i]]
//         }
//         console.log("After:",deps)
//         modules[name]=impl.apply(impl,deps);
//         console.log(name,"==>",modules[name])
//     }
//     function get(name) {
//         return modules[name];
//
//     }
//     return {
//         define:define,
//         get:get
//     };
// })();
//
// MyModules.define("bar",[],function(){
//     function hello(who) {
//         return "Let me introduce: " + who;
//
//     }
//     return {
//         hello:hello
//     };
//
// })
//
// MyModules.define("foo",["bar"],function(bar){
//     var hungry="hippo";
//     function awesome() {
//         console.log(bar.hello(hungry).toUpperCase());
//     }
//     return {
//         awesome:awesome
//     };
// });
//
// var bar=MyModules.get("bar");
// var foo=MyModules.get("foo");
//
// console.log(
//     bar.hello("hippo")
// );
//
// foo.awesome();
//
id='1234567'
global.ccc="ADFADFADF"
obj={
    id:"awesome",
    cool:function coolFn(){
        console.log(this.id);
    }
}
obj.cool()
console.log("====================",this.id)
setTimeout(obj.cool,100);
// c="ABCDE"
// console.log(global)
// console.log(exports)
console.log(window)
