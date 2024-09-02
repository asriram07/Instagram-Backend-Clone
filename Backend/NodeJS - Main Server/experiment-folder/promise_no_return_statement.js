function hola(){
    var prom = new Promise((resolve,reject)=>{
        resolve();
    })
}
var h = new hola();
console.log(h);