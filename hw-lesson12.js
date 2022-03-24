function validate(){
var flag=true;
const username=getValue('username')
if(username== ""){
    flag=false
    alert('Check your username')
    }
const password=getValue('password')
if(password== "" || password.length<8){
    flag=false
    alert('Check your password')
}
return flag
}
var submit=document.getElementById("submit")
submit.addEventListener('submit',validate)

