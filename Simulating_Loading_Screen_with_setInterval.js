let intervalid = setInterval(() =>{
    console.log("Loding....");
},1000);

setTimeout(()=>{
    clearInterval(intervalid);
    console.log("Loaded Successfully");
},6000)
