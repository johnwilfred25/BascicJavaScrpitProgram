try{
    console.log("try block get excuted");
    Mytryblock;
    console.log("after the error occured");
}catch(err){
    console.log("error has occured :"+" "+err);
}
finally{
    console.log("finally will exceute even there is a error");
}
console.log("program still excutes after finally ")

//using throw (to get custom error of our own)
const name1 =["john","mad","jean"];
try{
    if(!name1[5]){
        throw new SyntaxbasedError("data mot found");
    }
    console.log(name1);
}catch(e){
    console.log("Array error "+" "+e.message);
    console.log("Array error "+" "+e);
    console.log("Array error "+" "+e.name);
}