const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Risultato 1'), 1000); // Si risolve dopo 1 secondo
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      let virDue = true;
      if (virDue) {
        resolve('Risultato 2');
      }
    }, 2000); // Si risolve dopo 2 secondi
  });
  
  const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('Risultato 3'), 1500); // Si risolve dopo 1,5 secondi
  });
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
        const[valUno, valDue, valTre]=values
      console.log(valUno);
      console.log(valDue);
      console.log(valTre);
       // Output: ['Risultato 1', 'Risultato 2', 'Risultato 3']
    })
    .catch((error) => {
      console.error('Errore:', error); // In caso di errore, verrà gestito qui
    });
  