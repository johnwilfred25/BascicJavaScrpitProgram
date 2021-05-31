//callback function is passed as argument to another function and used to run after another function 
function myCar(){
    console.log("Benz");
}
function myCar1(){
    console.log("Bmw");
}
function myCar2(){
    console.log("Audi");
    
}
function myGarage(carOwner,myCallback1,myCallback2,myCallback3){
    //let myCar=carName;
    console.log(carOwner+" "+"owns these cars");
    myCallback1();
    myCallback2();
    myCallback3();
}
myGarage("John",myCar2,myCar1,myCar);