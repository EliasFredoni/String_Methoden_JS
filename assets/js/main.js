let nachName = " Fredoni "
let vorName = " Elias "

let name = (nachName + vorName);

console.log(name);

let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h"));
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent."

console.log(txt2.search(";"));
console.log(txt2.search("green"));
console.log(txt2.search("blue"));

let A = 'Sam is going to coding school'

console.log(A.slice(0, 3));
console.log(A.slice(4, 6));

console.log(A.slice(1, 15) + A.slice(-6));

console.log(A.slice(4, 15) + A.slice(-6));
console.log(A.slice(0, 6) + A.slice(-6));

let myVar = (A.slice(0, 3))

document.write(myVar + "<br>");

let text = 'Sam is back from coding school'

console.log(text.substring(0, 3));
console.log(text.substring(4, 6));
console.log(text.substring(24));
console.log(text.substring(0, 6) + (text.substring(23)));

let variable = (text.substring(0, 6) + (text.substring(23)))

document.write(variable + "<br>");

let text1 = "Sam is working at coding school"

console.log(text1.substr(0, 3));
console.log(text1.substr(3, 4));

let variable2 = (text1.substr(0, 3));

document.body.innerHTML = (variable2);

let text2 = "Sam is good at school"

console.log(text2.replace("good", "bad"));
console.log(text2.replace("Sam", "Tom"));
console.log(text2.replace("school", "tennis"));

let variable3 = (text2.replace("school", "tennis"))

document.body.innerHTML = (variable3);

let text3 = "Sam is going to school"
let text4 = "Sam"
let text5 = "is going to"
let text6 = "school"

console.log(text3.toUpperCase("Sam is going to school"));
console.log(text3.toLowerCase("Sam is going to school"));
console.log(text4.toUpperCase("Sam") + (text5.toLowerCase("is going to ") + (text6.toUpperCase("School"))));
console.log(text4.toLowerCase("Sam") + (text5.toUpperCase("is going to ") + (text6.toLowerCase("School"))));

let variable4 = (text4.toLowerCase("Sam") + (text5.toUpperCase("is going to ") + (text6.toLowerCase("School"))));

document.body.innerHTML = (variable4);

let text7 = "Sam is going to coding school";
let text8 = "Tom"
let text9 = "programming bike"
let text10 = "and"

console.log(text7.concat(" an to the movie theater "));
console.log(text7.replace("coding school", "").concat("movie theater"));
console.log(text8.concat(" and Sam are going to school "));
console.log(text8.concat(" and Sam are going to gym and to the movie theater "));
console.log(text8.concat(" is going to school and to the movie theater"));

let variable5 = (text8.concat(" and Sam are going to school "));

document.body.innerHTML = (variable5);
















