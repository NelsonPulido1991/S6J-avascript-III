let persona = {
    nombre: "Nelson Pulido",
    edad: 32,
    ciudad: "Bogotá",
    profesion: "Ingeniero",
}
const keys = Object.keys(persona)
for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    console.log(keys[i] + ":" , persona[key])
  }
/*nombre: Nelson Pulido
edad: 32
ciudad: Bogotá
profesion: Ingeniero
*/

let array;
function presentacion (array){
    let mensaje= "";
    for(let i=0;i<array.length;i++){
        if(i !== 0){
            mensaje += " ";
        }
        mensaje += array[i];
    }
    return mensaje;
}
console.log(presentacion([persona.nombre, persona.edad, persona.ciudad ])) //  Nelson pulido 32 Bogotá
persona.hobbies = [ "Viajar", "Comer", "bailar"]
console.log(presentacion([persona.hobbies ]))// viajar, comer, bailar,