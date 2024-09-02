function hola(){
    // var prom = new Promise((resolve,reject)=>{
    //     return resolve("data");
    // })
    // return prom;
    return new Promise((resolve,reject)=>{
        //reject("data");
        resolve("data");
    })
}
var h = await hola();
// var h = hola();
console.log(h);