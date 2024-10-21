// sayhello=() => {
//     console.log("I am in hello function");

// };
// console.log("Task started");
// setTimeout(sayhello,3000);
// console.log("Task End");










console.log("start");
setTimeout(() => {
    console.log("first task completed");
    setTimeout(() => {
        console.log("first task completed");
        setTimeout(() => {
            console.log("first task completed");
        },3000);
    },2000);       
        
},1000);
console.log("End");










