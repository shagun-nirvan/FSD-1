function fetchdata() {
    return new Promise((resolve,reject) => {
        // let data = { id : 1, name : "Abhishek" , city: "GZB"};
        // setTimeout(() =>{
        //     resolve(data);
        // },3000);
        const students=[
            {name:'Alice',score: 50},
            {name:'Bob',score: 60},
            {name:'Charlie',score: 78},
            {name:'David',score: 89},
            {name:'Joe',score: 64},
        
        
        ];
        setTimeout(()=>{
            resolve(students);
        },3000)
    });
}
fetchdata().then((data)=>{
    // console.log(data);
    // let sum = data.map((x)=>x.score).reduce((x,y)=>x+y,0);
    let x=0;
    data.forEach((element) => {
        x=x+element.score;
    });
    console.log(sum)
})
.catch((err)=>{
    console.log(err);
});