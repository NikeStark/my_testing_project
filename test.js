

//Конструктор с объектами
function Fruit(color,shape){
this.color = color;
this.shape = shape;
}
var melon = new Fruit ('yellow', 'round');
var apple = new Fruit ('red', 'round');


//Конструкторы при создании объектов
//var apple = new Object();
  //apple.color = 'Green';
  //apple.shape = 'round';
  //apple.weight = 'hundred gramm';

  apple.discribe = function(){
    return 'As apple is '+ this.color;
  }

  console.log (apple.discribe());


//Обькты
var FirstName = {
  name: 'Bred',
  age: 25,
  childrens: ['Liza','Petya'],
  adress: {
    city: 'Boston',
    state: 'st',
    street: '555 some st'
  },

NameAge: function(){
  return this.name + this.age;
}
}
console.log (FirstName.NameAge());

document.write ("Name: "+FirstName.name+" , "+"age: "+FirstName.age+" , "+"city: "+FirstName.adress.city+"."+"<br>");

//Функции
function write(word){
  document.write(word);
}
write("Hello");
write("<br>");
write("World")
write("<br>");

function sum (a,b,c){
  return (a+b)*2;
}
document.write(sum (25,25)+("<br>"));

//Операторы условий
var num_1 = 15;
var num_2 = 20;
if (num_1 == num_2) {
  console.log("Answer is false: "+num_1+" == "+num_2);
}
else if (num_1 != num_2){
  console.log("Answer is true: "+num_1+" != "+num_2);
}
else {
  console.log("Not right answers");
}

var res = 3;
switch (res) {
  case 1:
    alert("Введите пороль: "+res);
    break;
  case 2:
    alert("Введите пороль: "+res);
    break;
  case 3:
    var rez = 123;
    console.log("Введите пороль: ");
    if (rez = 123) {
      console.log("Password is true!!!");
    } else {
      console.log("Password is wrong!!!");
    }
    break;
  default:
    alert("wrong is password");
}


//Циклы
var color = new Array ("Red","Blue","Yellow","Silver");
for(var i = 0;i < color.length; i++)
console.log (color[i]);

/*var i = 20;
do {
console.log(i);
} while (i < 10);/


/*var i = 300;
while (i>=10) {
console.log(i);
  i/=10;
}*/

//for (var i = 0; i < 10; i++){
  //console.log (i);}


//Массивы
var colors = new Array ("Red","Green","Grey","Blue");
colors.push ("Yellow");
document.write(colors[4]+"<br>");

//Математические операции и переменные;
var FirstNum = 55;
var SecondNum = 45;
var ThirdNum = 100;
FirstNum -=5;
ThirdNum++;
document.write (Math.PI +"<br>");
document.write (Math.round (2.8) +"<br>");
document.write ("Ваш результат: ",FirstNum + SecondNum - ThirdNum);
var num = "Hello world!";
var Num = 2;
console.log (num);

//Conclusion is messages
//var name = prompt ("What your name?");
//console.log ("My name is " + name);

function changeColor (newColor){
  var element = document.getElementById('text');
  element.style.color = newColor;
}

function validateForm (){
  var element = document.forms["myForm"] ["fname"].value;
    var tel = document.forms["myForm"] ["ftel"].value;
  if (element == ""){
    alert("Имя должно быть заполнено!");
    return false;
  } else if(tel == ""){
      alert("Введите телефон!");
      return false;
  }
}
