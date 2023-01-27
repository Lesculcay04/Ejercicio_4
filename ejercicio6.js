let number=[12,14,5,7];
number.length;
let sum=0;
for(let i=0;i<number.length;i++){
    if(number[i]%7!=0){
        sum+=number[i];
    }
}
console.log(sum);