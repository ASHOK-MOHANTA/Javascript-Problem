function fatchdata(){
  return new Promise((resolve,reject) =>{
    setTimeout(function() {
      const issuccess = Math.random() >= 0.5;
      if(issuccess){
        resolve("Fatch data is Successful.")
      }
      else{
        reject("Server Error")
      }
    }, 1000);
  })
}

async function fatchDataHanderHler(){
  try {
    const result = await fatchdata();
    console.log(result)
  } catch (e) {
    console.log("Error Fatching Data",e)
  }
}
fatchDataHanderHler();
