"use strict"

/*DZ 1 function  это задание самостоятельно уже делал с помощью масивов 
и на данный момент не представляю как его можно решить по другому 
не подглядываю на чужой код*/

let arrNumber = [1,1];
let  number = '';
function  fib(n){   

  for(let i=1;i<=n;i++){
    arrNumber.push(arrNumber[arrNumber.length-2] +arrNumber[arrNumber.length-1]);
  };

   for(let i=0;i<=arrNumber.length-1;i++){
       number+= ` ${arrNumber[i]}`
   };


return console.log(number);
}
fib(5)

/* DZ 2 Сбрасываю повторно
Дано число n=1000 . Делите его на 2пока результат деления не станет меньше 50.Каое число получится?
 Посчитайте количество интераций и запишите в переменную num(num3);*/

let n = 1000;
let num = 0;
for(let i=n;n>50;i++){
  n/=2;
num+=1;

}

console.log(n);
console.log(num);



