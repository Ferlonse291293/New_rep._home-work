"use strict"


//DZ1

function searchArrayWord(wordSerch,wordMass){
  let ifIsset = 0;
   for(let i =0;i<=wordMass.length-1;i++){
        if(wordMass[i] === wordSerch){
           ifIsset = true;
         break
        } else{
           ifIsset = false;
        } 
   }
   return ifIsset;
}

console.log(searchArrayWord('Кот', ['Кот', 'Собака', 'Жираф' ]));

//DZ2

let arr1 = [1, 2, 3, 7, 6, 9];

function midleMass(numArr){

  let summ =0;
  let x = 0

  for(let i = 0 ;i<=numArr.length-1;i++){
    summ+=numArr[i];
    x+=1;
  }
 return summ/x;


}

console.log(midleMass(arr1));

//DZ 3

let arr2 = [1, 2, 3, 7, 6, 9];

function reverseMass(numArr){

  let mass = '';
  
  for(let i = numArr.length-1 ;i>=0;i--){

      mass+= `${numArr[i]}`+' ';
     }
 return mass;
}

console.log(reverseMass(arr2));

//DZ 4

let obj1 ={
  html:'HTML',
   css: 'CSS',
    js: 'ECMA'
  };
  for(let key in obj1){
    console.log( key );
}

//DZ 5

let obj2 = {
  name:'Вася',
   phoneNumber: '+380974836362',
    adress: 'Полтава,Фрунзе 23',
    summitems: '830',
    allweight: '2700',
    itemsBay: {
      items1: ['чашка',100,200],
      items2: ['чашка',30,100],
      items3: ['чашка',550,2000],
      items4: ['чашка',150,400]
    }
  };
  console.log(obj2);


  
 



