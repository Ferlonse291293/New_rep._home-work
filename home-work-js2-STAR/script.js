'use strict'



// ////////////////////////////////////////////// УСЛОВИЯ //////////////////////////////////////////////////////////////



// В переменной day лужит какое-то число от 1-31. узнать в какой декаде месяца это число.  
let day = 14;


 if(day <=8){
  console.log('Первая декада')
 }
 else if(day >8 && day <=16 ){
    console.log('Вторая декада')
   }
  else if(day >16 && day <=24 ){
    console.log('Третья декада')
   }
   else{
    console.log('Четвертая декада')

   }


   // В переменной month лежит число из интервала от 1 до 12.Определите в какую пору года попадает этот месяц.


let month = 9;


 if(month <=2 || month == 12){
  console.log('Это зима')
 }
 else if(month >2 && month <=5 ){
    console.log('Это весна')
   }
  else if(month >5 && month <=8 ){
    console.log('Это лето')
   }
  
   else{
    console.log('Это осень')

   }


   //Дана строка состоящая из символов, например 'abcde'. Проверьте, что первым символом этой  строки является буква "а". Если это так выведете 'да' или в противном 'нет'.

  let text = '1gfhxyj';

  function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

  if(isNumber((text.charAt(0))) == false){
    console.log('да')
  }
  
  else{
    console.log('нет')
  }

//Дана строка с цифрами ,наприме "12345". Проверьте , что первый символ этой строки является цифра 1,2,3 если это так то "да если нет то "нет"


let number = 'h2345';

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

if(isNumber((number.charAt(0))) == true){
  console.log('да')
}

else{
  console.log('нет')
}

// Дана строка из 3 цифр, найдите сумму 3 цифр

let num = '234';

console.log( Number(num.charAt(0)) + Number(num.charAt(1)) + Number(num.charAt(2)));

// Дана строка из 6 цифр, проверить равна ли сумма первых 3 чисел сумме 3 последним числам

let numsix = '321114';

let num1 =Number(numsix.charAt(0)) + Number(numsix.charAt(1)) + Number(numsix.charAt(2));
let num2 =Number(numsix.charAt(3)) + Number(numsix.charAt(4)) + Number(numsix.charAt(5));

if(num1 == num2){
  console.log('да');
}
else{
  console.log('нет');
}

console.log('                                        Циклы                                                         ')


// ////////////////////////////////////////////// ЦИКЛЫ //////////////////////////////////////////////////////////////

// Дан масив с элементами 2 , 5 , 9 ,15 , 0 , 4 c помощью цикла  for и оператора if на экране выведите столбец тех элементов которые меньше 10 и больше 3

let numderMas = ['2','5', '9' , '15' , '0' , '4'];

for(let i=0;i<numderMas.length;i++){

  if(numderMas[i]>3 && numderMas[i]<10){
  console.log(numderMas[i]);
  }

}

// Дан масив с числами . числа могут быть  положительными и отрецательными. Найдите сумму положительных числе.

let numderMas2 = ['-21','5', '-9' , '15' , '45' , '4' , '-1112' , '53' , '19' , '-15' , '0' , '4'];
let summ = 0;
for(let i=0;i<numderMas2.length;i++){
  
  if(numderMas2[i]>0){
  summ+=Number(numderMas2[i]);
  }
  

}

console.log(summ)

// дан массив с элементами ['1','2', '5' , '9' , '4' , '13' , '4' , '10'] с помощью цикла for 
//и оператора if проверьте есть ли в масиве элемент со значение , равным 4. Если есть -выведите на экран Есть если нет то нечего делать не нужно

let numderMas3 = ['1','2', '5' , '9' , '4' , '13' , '4' , '10'];

for(let i=0;i<numderMas3.length;i++){
  
  
  if(numderMas3[i].indexOf(4) == 0){
    console.log('Есть')
  };
  
  

}

// В масиве ['10','20', '30' , '50' , '235' , '3000'] отобразить только те элементы которые начинаются на 1,2,5

let numderMas4 = ['10','20', '30' , '50' , '235' , '3000'];


for(let i=0;i<numderMas4.length;i++){

            if(numderMas4[i].charAt(0) == 1 || numderMas4[i].charAt(0) == 2 || numderMas4[i].charAt(0) == 5){

              console.log(numderMas4[i])

            }

}

// Дан масив ['1','2', '3' , '4' , '5' , '6', '7', '8', '9',] превратите с помощью цикла в -1-2-3-4-5-6-7-8-9-

let numderMas5 = ['1','2', '3' , '4' , '5' , '6', '7', '8', '9',];

let minstring = '';
for(let i=0;i<numderMas5.length;i++){

minstring+=String('-' + numderMas5[i])

}
minstring+= '-';

console.log(minstring );

//Составте масив дней недели и выведдите все дни недели,а текущий день недели поместите в переменную day  и выведите курсивом

let weak2 = ['Понедельник','Вторник', 'Среда' , 'Четверг' , 'Пятница' , 'Суббота', 'Воскресение'];

let day2 = weak2[5];

for(let i=0;i<weak2.length;i++){

  if(weak2[i] == day2){
   document.write(weak2[i].italics() + ' ');
  }
 else{
  document.write(weak2[i] + ' ');
 }

  
  
}

// Дано число n=1000 . Делите его на 2пока результат деления не станет меньше 50.Каое число получится?
// Посчитайте количество интераций и запишите в переменную num(num3);

let numberDelate = 1000;
let num3 = 0;
for(let i=numberDelate;numberDelate>50;i++){
  numberDelate/=2;
num3+=1;

}

console.log(numberDelate);
console.log(num3);



