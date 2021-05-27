var msg1 = "hi,good morning";
var msg2 = "GoodMorning";
var msg3 = "HI HOW ARE YOU";
var msg4 = "  GOOD MORNING   "

//charAt method
var char = msg1.charAt("morning");
console.log("1.Index of the character:" + " " + char);

//indexOf method
var index = msg1.indexOf("good");
console.log("2.The index value of specifed string:" + " " + index);

//replace method
var repl = msg1.replace("morning", "evening");
console.log("3.Replace morning with evening:" + " " + repl);

//replace all method(using i flag)
var replAl = msg1.replace(/MORNING/i, "evening");
console.log("3(a).Replace using i tag:" + " " + replAl);

//replace all method(using g flag)
var replAll = msg1.replace(/morning/g, "noon");
console.log("3(b).Replacing using g tag:" + " " + replAll);

//slice method(extract a part of string and return with new string)
var sli = msg1.slice(8, 15);
console.log("4(a).Extracting morning from the string:" + " " + sli);

//slice method(without mentioning the second parameter i.e without end number)
var sli1 = msg1.slice(8);
console.log("4(b).Extracting morning from the string(without end):" + " " + sli1);

//slice method(using negative index number)
var sliNeg = msg1.slice(-7, -1);
console.log("4(c).Extracting morning from the string(with negative index):" + " " + sliNeg);

//slice method(using neg index without end no)
var sliNeg1 = msg1.slice(-7);
console.log("4(d).Extracting morning from the string:" + " " + sliNeg1);

//split method(used to convert string into array)
var slit = msg2.split("");
console.log("5(a).Converting to array(split in character):" + " " + slit);
console.log("extracting the 3 index value" + " " + slit[3]);

//split method(using space)
var slit1 = msg3.split(" ");
console.log("5(b).Converting to array(using space):" + " " + slit1)
console.log("extracting 2 index value:" + slit1[2]);

//trim method
console.log("6.Triming space using trim method(before):" + " " + msg4);
var trm = msg4.trim();
console.log("Triming space using trim method(after):" + " " + trm);

//tolowercase(convert all char to lowercase)
var lowcas = msg3.toLowerCase();
console.log("7.Convert the string to lower case" + " " + lowcas);

//subStr method(extract part of string using lenth as second parameter)
var sub = msg3.substr(3, 7);
console.log("8.Etract string from 3 index to length of 7:" + " " + sub);

//subStr method(extract part of string)
var sub1=msg3.substr(3);
console.log("9.Etract string from 3 index without second parameter:" + " " + sub1)
