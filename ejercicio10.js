let pasword=prompt("Ingrese su clave");
const PASWORD_DEFAULT=1234;
let cont=0;
do{
    if(pasword==PASWORD_DEFAULT){
    cont++;}
    else{
        cont++;
        console.log("Clave incorrecta, ingrese nuevamente");
    }


} while(pasword!=PASWORD_DEFAULT);
console.log("Cajero cerrado");
