'use strict';


/*let rrr="";
for (let i = 1; i <= 3; i++) {
	for(let j=1; j<=3; j++){
		rrr=rrr + i+j+" "
	}
}
console.log(rrr)*/


/********************/


/*let arr=[];

for(let i = 0; i<=99; i++){
	arr[i]=i+1;
}
console.log(arr)*/


/*********************/


/*let arr=[];

for(let i = 1, j = 0; i<=99; i+=2, j++){
	arr[j]=i;

}
console.log(arr)*/


/**********************/


/*let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

for(let i=0; i<=arr.length-1; i++){
	arr[i]=arr[i]**2;
}
console.log(arr)*/


/**********************/


/*let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
for(let i = 0; i<=arr.length-1; i++){
	arr[i]*=10;
}
console.log(arr)*/


/*********************/

/*
let arr=[];

for(let i = 1; i<10; i++){
	arr.push(i);
}
console.log(arr)*/


/*******************/


/*let arrFirst = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
	arrSecond = [];

	for(let elem of arrFirst){
		if(elem%2==0){
			arrSecond.push(elem);
		}
	}
	console.log(arrSecond)*/


	/*****************/



/*let arr = ['a', 'b', 'c', 'd', 'e'],
	result=[];

for( let i = arr.length-1; i>=0; i--){
	result.push(arr[i])
}
console.log(result)*/


/**********************/


/*let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for(let key in obj){
	obj[key]+=obj[key]/100*10;
}
console.log(obj)*/


/*********************/


/*let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};


	for(let key in obj){
		if(obj[key]<=400){
		obj[key]+=obj[key]/100*10;
	}
}
console.log(obj)*/


/***************/


/*let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3],
	counterThree = 0,
	counterTwo = 0;
for(let elem of arr){
	if (elem==3){
		counterThree++;
	}
	else if(elem==2){
		counterTwo++
	}
}
console.log(counterThree);
console.log(counterTwo);*/


/******************/

/*
let arr = ['a', 'b', 'c', 'a', 'a', 'b'],
	arrSecond = {};

for (let elem of arr){
	if (arrSecond[elem] === undefined){
		arrSecond[elem] = 1;
	}
	else{
		arrSecond[elem]++;
	}
}
console.log(arrSecond);*/


/***********************/


/*let first = 0, second = 1, third =2;

for (let i = 1; i <= 10; i++) {
	let current = first + second + third;
	
	first = second;
	second = third;
	third = current;
	
	console.log(current);
}*/


/******************/


/*let arr=[];

for (let i=1; i<=9; i++){
  let str="";
    for(let j=1; j<=i; j++){
      str+=i;

    }
    arr.push(str);
    console.log(str);
    
}
console.log(arr)*/


/**************/

/*
let factorial=4, result=1;
for(let i=1; i<=4; i++){
	result*=i;
	console.log(result)

}
console.log(result)*/


/****************/


/*let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]],
	result=0;

for (let firstLevel of arr){
	for(let nextLevel of firstLevel){
		result+=nextLevel;
	}

}
console.log(result)*/


/*******************************/


/*let arr2=[];
for(let i=0, k=1; i<=2; i++){
	 arr2[i]=[];
	for(let j=0; j<=2; j++, k++){
		arr2[i][j]=k
	}
	
}
console.log(arr2)
*/

/****or*****/


/*
let arr2=[],
k=1;
for(let i=0; i<=2; i++){
     arr2[i]=[];
    for(let j=0; j<=2; j++){
        arr2[i][j]=k++
    }
    
}
console.log(arr2)*/


/*let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
},
result = 0;
for(let elem in obj){
	let subObj = obj[elem];
	for(let subElem in subObj){
		result+=subObj[subElem]
	}
}
console.log(result)*/


/**************/


/*let months = {
	'ru': [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
	'en': [
		'january',
		'february',
		'march',
		'april',
		'may',
		'june',
		'july',
		'august',
		'september',
		'october',
		'november',
		'december',
	],
},
	lang='ru', month=5;

console.log(months[lang][month])*/


/*let employees = [
	{
		name: 'name1',
		salary: 300,
	},
	{
		name: 'name2',
		salary: 400,
	},
	{
		name: 'name3',
		salary: 500,
	},
];

console.log(employees[0].salary+employees[1].salary)*/

/*let students = {
	'boys':  ['Коля', 'Вася', 'Петя'],
	'girls': ['Даша', 'Маша', 'Лена'],
};
console.log(students["boys"][1])*/
