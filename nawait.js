let myPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Yay, I resolved!');
      }, 1000);
    });
  }

async function noAwait() {
    let value = myPromise();
    console.log(value);
   }
   
   async function yesAwait() {
    let value = await myPromise();
    console.log(value);
   }
   
   noAwait(); // Stampa: Promise { <pending> }
   yesAwait(); // Stampa: Yay, I resolved!