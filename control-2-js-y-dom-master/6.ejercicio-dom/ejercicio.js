'use strict'
const p = document.querySelector('p')
const txt = p.textContent
const txtsplit = txt.split(' ')
function analizarTexto(a){

/*    for (let i = 0; i < a.length; i++){
        if (a[i].length >4) {
            a[i].color = 'red'
        }

    }
    return(a)
    
}
*/
console.log(p.textContent.length)
p.style.color = 'blue'
//p.textContent.split(' ')
analizarTexto(txtsplit)

