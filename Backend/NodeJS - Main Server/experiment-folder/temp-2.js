const response = await fetch();
response = response.json();

response = fetch();
response.then((data)=>{

})


const fetch = new Promise((res,err)=>{
    //here code execures synchronously
    result = someIOOperation();
    return result;
    res(result);
})