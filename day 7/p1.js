// const myPromise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("Data Sent Successfully");

//     }else{
//         reject("Data failed to send")
//     }
// });

// myPromise.then((message) => {console.log("Data Recieved "+ message);

// })
// .catch((err) => {
//     console.log("Failed to fetch data"+ err);
// })


const myPromise=new Promise((resolve,reject)=>{
    let success=false;
    setTimeout(() => {
        if(success){
            resolve("Data Sent Successfully");
    
        }else{
            reject("Data failed to send")
        }
    },4000);
   
});

myPromise.then((message) => {console.log("Data Recieved "+ message);

})
.catch((err) => {
    console.log("Failed to fetch data"+ err);
})