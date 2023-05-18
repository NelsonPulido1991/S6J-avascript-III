let Pedro = {
    nombre:  "Pedro Perez",
    edad:  30, 
    activo: true,
    hobbies:[ "programar", "squash", "piano"],
    

}
console.log(Pedro.edad) //  30
Pedro.estatura = 1.8 
delete Pedro.activo

const keys = Object.keys(Pedro)
/*nombre: Pedro Perez
edad: 30
hobbies: [ 'programar', 'squash', 'piano' ]
estatura: 1.8
*/

for (let i = 0; i < keys.length; i++) {
  const key = keys[i]
  console.log(keys[i] + ":" , Pedro[key])
}

let array;
function saluda (array){
    let arreglo= "";
    for(let i=0;i<array.length;i++){
        if(i !== 0){
            arreglo += " ";
        }
        arreglo += array[i];
    }
    return arreglo;
}
console.log(saluda(["hola, me llamo",Pedro.nombre ])) //  hola, me llamo Pedro Perez  