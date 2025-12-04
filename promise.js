function fun1(id){
    return new Promise((resolve,reject)=>{
        console.log("The id is: ",id);
        resolve("Visalakshi");
    })
}
function fun2(name){
    return new Promise((resolve,reject)=>{
        console.log("The name is: ",name);
        resolve("success");
    })
}
function fun3(){
    return new Promise((resolve,reject)=>{
        resolve("The details are saved successfully");
    })
}
fun1("123").then((result)=>{
    return fun2(result)
}).then(()=>{
return fun3();
}).then((msg)=>{
    console.log(msg);
})