async function myPromise () {
 return new Promise ((resolve, reject) =>{
  setTimeout(()=>{
    let resolvProm = !true
    if (resolvProm){
      resolve ('ok funzione risolta')}
    else {
      reject ( 'problema nella risoluzione della funzione')
    }
  }, 2000)

 })
}
myPromise()
.then((resVal)=>{
  console.log(resVal);
})
.catch(err=>
  console.log(err)
)



// utilizzo della funzione async e await

function myPromise () {
  return new Promise ((resolve, reject) =>{
   setTimeout(()=>{
     let resolvProm = true
     if (resolvProm){
       resolve ('ok funzione risolta')}
       else {
          reject ( 'problema nella risoluzione della funzione')
        }
     
   }, 2000)
 
  })
 }
async function myFunctionAsync(){
  try {
      let resolveVal = await myPromise()
  console.log(resolveVal);
} catch (error) {
  console.log('errore gestito ', error);

}

}

myFunctionAsync()