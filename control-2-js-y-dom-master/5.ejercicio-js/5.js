'use strict';
function getCharacters(link) {
    return fetch(link)
    .then((response) => response.json())
    .then((data) => 
    fetch (data.characters))
    .then((response) => response.json())
    .then((data) => console.log(data.results))
};

getCharacters('https://rickandmortyapi.com/api/')


////////----------------------------------------
//----------------------------------Ejercicio 4
function eliminarIguales(a, b){
    
    for (let k = 0; k<b.length; k++){
    
        if (!a.find((al) => al === b[k])) {
            a.push(b[k])
        }
    }
    return(a)
}
//---------------------------------------------

function getEpisodes(link) {
    return fetch(link)
    .then((response) => response.json())
    .then((data) => data.results)
};

const arrayEpisodiosLimpio = []
const personajes = []
const arrayPersonajesLimpio = []
async function episodes() {
    const infoEpisodes = await getEpisodes('https://rickandmortyapi.com/api/episode')
    //console.log(infoEpisodes)
    for (let i = 0; i < (infoEpisodes.length); i++) {
        const elemento = infoEpisodes[i]
        //console.log(elemento)
        const fecha = (elemento.air_date).split(' ')
        if (fecha[0] === "January"){
            arrayEpisodiosLimpio.push((infoEpisodes)[i])
        }
    }
    console.log(arrayEpisodiosLimpio)

    for (let j = 0; j < (arrayEpisodiosLimpio.length); j++) {
    //le pongo "..." para que no me genere un array de arrays
    personajes.push(...arrayEpisodiosLimpio[j].characters) 

    }
    //console.log(personajes)
    eliminarIguales(arrayPersonajesLimpio, personajes)
}
episodes() //--------------------Lista de capitulos en enero

console.log(arrayPersonajesLimpio) //----Lista de personajes

/*const listaId = Object.values(arrayPersonajesLimpio)
console.log(listaId)
console.log(typeof(arrayPersonajesLimpio))
*/


/*const listaIdPersonajes = []
for (let l = 0; l < (arrayPersonajesLimpio.size); l++) {
    listaIdPersonajes.push((arrayPersonajesLimpio[l]).slice(42))
}
console.log(listaIdPersonajes) //----Id de personajes
*/
 //-----------------------------no consigo sacar el contenido de arrayPersonajesLimpio 
 //-----------------------------para poner mediante un slice el numero de ID en un array