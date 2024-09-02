// function printInStyle(data){
//     console.log("*********************************************")
//     console.log((data))
//     console.log("********************************************")
// }
// async function fetcher(){
//     var res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(456);
//     printInStyle(await res.json());
//     console.log(123);
//     return res;
// }
// (async ()=>{
//     const f = await fetcher();
//     console.log("Outside : ",f);
//     console.log("----------------------------------------")
// })();

async function getResponse(){
    var res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    res = await res.json();
    console.log(123);
    return res;
}
function getResponse(){
    var res = fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.then((data)=>{
        data = data.json();
        return data.then((data)=>{
            return data;
        })
    })
}
(async ()=>{
    var response = getResponse();
    console.log(response);
})();