//bài 1 
let person = {
    name:       'Bob',
    occupation: 'web developer',
    hobbies:    'painting',
  };
  console.log('name:' + person.name);
  console.log('occipation:' + person[occupation]);
  console.log('hobbies:' + person['hobbies']);
 //bài 2
  let obj = {
    b: 2,
    a: 1,
    c: 3
  };
  let arr=Object.keys(obj);
  console.log(arr);
  function upper(arr) {
    return arr.map(element => {
      return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
  }
  console.log(upper(arr));
  
  //bài 3 
  let myFamily = {
    quantity: 4,
    member: ["Dad", "Mom", "Me", "Daughter"],
    location: "Vietnam",
  };
///-let family=object.creat(myFamily.prototype);????

  
// //bài 4
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};
//c1
obj.bar.xyz=606;
console.log(obj);
//c2


    
  