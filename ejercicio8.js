let number=[0,2,1,1];
number.length;
let sum=0;
for(let i=0;i<number.length;i++){
    if(i>number[i]){
        sum+=number[i];
    }
}
console.log(sum);