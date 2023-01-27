let number=[12,3,9,7,3];
number.length;
let sum=0;
for(let i=0;i<number.length;i++){
    if(number[i]%3==0){
        sum+=number[i];
    }
}
console.log(sum);