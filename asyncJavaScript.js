//async program,myLastName()will excetue after 3000 milisec
 function myFristName (){
    console.log('async:john');
}
 function myLastName(){
    console.log("async:wilfred");
}
setTimeout(myLastName,3000);
myFristName();

//sync function
function myFirstname(){
    console.log("sync:john");
}
function myLastname(){
    console.log('sync:wilfred');
}

myFirstname();
myLastname();