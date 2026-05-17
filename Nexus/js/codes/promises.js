// Format 
// const obj = fetch("Your API Key")
// obj.then((data)=>{
//     console.log(data);
// });


const Promises = fetch("http://api.weatherapi.com/v1/current.json?key=1ed1fe0c45d9498f92a105746261105&q=London&aqi=yes")

// First Method(Easy)
Promises.then((Response)=>{
    return Response.json();
}).then((Response2)=>{
        console.log(Response2);
    }).catch((Error)=>{
        console.log(Error)
    });

// Second Method
// Promises.then((Response)=>{
//     const Promises2 = Response.json();
//     Promises2.then((Response2)=>{
//         console.log(Response2)
//     })
// });