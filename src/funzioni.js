const funzioneReturnOggetto = () => {
    const nome = "Mario";
    const cognome = "Rossi";
    const eta = 30;

    return {nome, cognome, eta};
}

// medoto 2
const {nome, cognome, eta} = funzioneReturnOggetto();
console.log(nome);
console.log(cognome);
console.log(eta);



// Funzione che ritorna un array
// Il primo elemento è una variabile
// Il secondo elemento è una funzione
const funzioneReturnArray = () => {
    let nomeVecchio = "Mario";

    const setNome = (nuovoNome) => {
        nomeVecchio = nuovoNome;
    }

    return [nomeVecchio, setNome];
}

// Estraggo dall'array ritornato dalla funzione i due 
// valori e li utilizzo
const [nomeVecchio] = funzioneReturnArray();
console.log(nomeVecchio);
