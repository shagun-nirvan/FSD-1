// function display() {
//     alert("hello 20!!");
// }
// function display(){
//     console.log("Hello 25!!");
// }

// display();
// let x=12.23;
// let y="hello";
// let z=true;
// let obj={
//     "name" : "rahul",
//     id:12,
// }
// let ar=[12,2,3,54,7]

// console.log(typeof ar);

function validate(){
    let un=document.getElementById("un").value;
    let pass=document.getElementById("pass").value;
    // alert(un);
    if(un=="admin" && pass=="admin"){
        document.getElementById("res").innerHTML="Login Success";
    }
    else
    document.getElementById("res").innerHTML="Login Failed";
}


// let x="120";
// let b=Boolean(0);
// // console.log(typeof x);
// console.log(b);

// let a=(x,y)=>{
//     console.log(x+y);
// };

// let x = a(12,36);
// console.log(x);

// let say=()=> console.log("Hello");
// say();

function display(){
    let p1 = document.querySelector("p");
    p1.innerHTML="Result";
    p1.style.backgroundColor="red";
}