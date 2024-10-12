function getDataFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Dati ottenuti dall\'API');
      }, 2000);
    });
  }
  
  async function fetchData() {
    console.log('Richiesta avviata...');
    let data =  getDataFromAPI(); // Attende che la promessa si risolva
    console.log(data); // Stampa: Dati ottenuti dall'API
    console.log('Richiesta conclusa...')
  }
  
  fetchData(); // Avvia la funzione asincrona 
