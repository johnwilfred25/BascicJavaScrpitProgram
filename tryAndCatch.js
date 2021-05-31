//using try catch
function mySum(x, y) {
    const summ = x + y;
    //try (block of code to try)
    try {
        mySum(10,10);
    }
    //catch(block of code to handle error)
    catch {
        if (summ > 30) {
            console.log("sum is greater than or equal to 30");
        }
        else if (summ==30) {
            console.log("sum is equal to 30");
        }
        else{
            console.log("sum is less than 30")
        }
    }
}
mySum();
