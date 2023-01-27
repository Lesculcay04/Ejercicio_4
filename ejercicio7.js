let number=[2,1,4,3];
number.length;
let sum=0;
for(let i=0;i<number.length;i++){
    if(number[i]==i){
        sum+=number[i];
    }
}
console.log(sum);