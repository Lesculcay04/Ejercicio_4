let number=[1,1,0,0,1,0];
number.length;
let sum=0;
for(let i=0;i<number.length;i++){
    if(number[i]==0){
        sum+=i;
    }
}
console.log(sum);