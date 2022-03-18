// bài 1
function checkAge(age){
    let age=prompt("nhap do tuoi cua ban");
    return (age > 18) ? true : confirm('Did parents allow you?');
}
//bài 2 
function min(a,b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}
//bài 3
let ask = (question, yes, no) => confirm(question) ? yes() : no();
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution."),
  )
//bài 4
function dangnhap(){
    array = ["admin","","cafedev","chào mừng","mật khẩu sai","esc"]
    let text=prompt("nhap chuoi bat ky");
    if(text==array[0]){
        console.log("hay nhap mat khau");
        let password=prompt("hay nhap mat khau");
        if(password==array[2]){
            console.log("Chao mung");
        }
        else if(password!=array[2]){
            console.log("mat khau sai")
        }else{
            console.log("da huy");
        }
    }
}
    