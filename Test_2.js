/*
Questa volta abbiamo richiesto una funzione, 
cookBeanSouffle()che restituisce una promessa che risolve o rifiuta in modo casuale. 
Quando si risolve, la promessa si risolve con un valore di 'Bean Souffle'e, quando rifiuta, 
rifiuta con un valore di 'Dinner is ruined!'. 
Se sei interessato, puoi vedere come funziona la funzione guardando nel file library.js */

let randomSuccess = () =>{
    let num = Math.random();
    if (num >0.5){

        return true
}

    else {
    return false;
}
};

let cookBean = () => {
   return new Promise ((resolve, reject)=>{
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(()=>{
    let success = randomSuccess();
    
    if (success) {
        resolve('ben souffle')
    }

    else{
        reject ('la cena è rovinata')
        }

    },2000)
   })
};


cookBean()