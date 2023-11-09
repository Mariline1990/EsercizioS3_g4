

const number =[]

for(i = 1 ; i < 77 ; i++){
    number.push(i)
}

const tabellone = document.querySelector("#tabellone")
let cell = document.querySelector("#cell")

const ciclo = function(){
    for(i = 0 ; i < number.length ; i++){
        document.createElement("div")
        
    }
}




const colonne = 19
const file = 4

for (let j = 1; j < file; j++) {
    let  fila = document.createElement("div");
      fila.className = "fila";

      for (let i = 1; i < colonne; i++) {
        let colonna = document.createElement("div");
         colonna.className = "colonna";
         
        fila.appendChild(colonna)

     }
 
 console.log(fila)
  }
  





