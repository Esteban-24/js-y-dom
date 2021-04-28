'use strict';
function getData(link) {
    return fetch(link)
    .then((response) => response.json())
    .then((lista) => lista.results[0])
};

const usuarios = prompt ('Introduce el número de usuarios')
const arrayUsuarios = Array();
for (let i = 0; i < usuarios; i++) {

    async function user() {
        const url = 'https://randomuser.me/api/'
        const infoUser = await getData(url)
        const sexo = infoUser.gender
        const username = infoUser.login.username
        const nombre = infoUser.name.first
        const apellido = infoUser.name.last
        const pais = infoUser.location.country
        const email = infoUser.email
        const foto = infoUser.picture.large
        const array = [username,nombre, apellido, sexo, pais, email, foto]
        //console.log(array)
        arrayUsuarios.push(array)
    }
    
    user()
    
}
console.log(arrayUsuarios)
//------------------------------------------------------Estructura del API
/*{
"results":
    [
        {
        "gender":"male",
        "name":{"title":"Mr","first":"Leroy","last":"Berry"},
        "location":{"street":{"number":7514,"name":"The Crescent"},
        "city":"Portmarnock","state":"Kildare",
        "country":"Ireland",
        "postcode":79001,
        "coordinates":{"latitude":"25.1154","longitude":"-40.8055"},
        "timezone":{"offset":"+3:00","description":"Baghdad, Riyadh, Moscow, St. Petersburg"}},
        "email":"leroy.berry@example.com",
        "login":{
            "uuid":"a08cdc6c-5746-4704-9437-858b24c9b73a",
            "username":"blueladybug565",
            "password":"david1",
            "salt":"wDqyBdq2",
            "md5":"f0d38e4308c7b72b774e6d4a74f9ce70",
            "sha1":"884dd32c3a15ccee51ba91c7b661a52465068da3",
            "sha256":"2bd7366f7c6f24b07a2255c5ff0df6459b515d7f7781f9ffbaae0137f64e1c59"},
        "dob":{"date":"1963-02-19T04:36:40.740Z","age":58},
        "registered":{"date":"2011-01-14T19:56:30.731Z","age":10},
        "phone":"021-385-7426",
        "cell":"081-078-1972",
        "id":{"name":"PPS","value":"3416502T"},
        "picture":{"large":"https://randomuser.me/api/portraits/men/72.jpg","medium":"https://randomuser.me/api/portraits/med/men/72.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/72.jpg"},
        "nat":"IE"
        }
    ],"info":{"seed":"bd4dca6b4889c51e","results":1,"page":1,"version":"1.3"}
}*/

