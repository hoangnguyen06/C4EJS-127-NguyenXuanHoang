// bài 1
// const operator = prompt('Enter operator ( either +, -, * or / ): ');
// let a=parseFloat(prompt("nhập số bất kỳ thứ nhất:"));
// let b=parseFloat(prompt("nhập số bất kỳ thứ hai:"));
// if (operator=="+"){
//     let sum=a+b;
//     console.log(`kết quả phép cộng là:${sum}`);
// }else if(operator=="-"){
//     let sub=a-b;
//     console.log(`kết quả phép trừ là:${sub}`);
// }
//bài 2
function snt(n){
let flag =1;
if(n<2){
    return flag = 0;
}else{
    for(let i=2; i<n-1;i++){
        if(n%i==0){
            flag = 0;
            break;
        }
    }
}
return flag;
}
let n=prompt("nhập n:");
let check = snt(n);
if(check==1){
    console.log(n + "là số nguyên tố");
}else{
    console.log(n + " không là số nguyên tố");
}


