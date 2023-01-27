let number=[63,2,8,4,5];
number.length;
let sum=0;
for(let i=0;i<number.length;i++){
    if(number[i]>10){
        sum+=number[i];
    }
}
console.log(sum);