let fighter1 = {
    name: "Warrior x 100",
    accuracy: 0.6,
    hp: 3000,
    attack: 30,
}

let fighter2 = {
    name: " Gorilla ",
    accuracy: 0.3,
    hp: 200,
    attack: 10,
}

console.log(" Commencez ")

while (fighter1.hp > 0 && fighter2.hp > 0) { // Si hp < 0 continue
    
let attack1 = Math.random()
  if (attack1 <= fighter1.accuracy) // si accu + ba attaque sans miss
  {
    fighter2.hp = fighter2.hp - fighter1.attack
    console.log(fighter1.name + " attaque " + fighter2.name + " et deal " + fighter1.attack + " dégats")
  } else //sinon rate
    {
    console.log(fighter1.name + " rate son coup")
  }

let attack2 = Math.random() // same mais pour le 2eme
  if (attack2 <= fighter2.accuracy) {
    fighter1.hp = fighter1.hp - fighter2.attack
    console.log(fighter2.name + " attaque " + fighter1.name + " et deal " + fighter2.attack + " dégats")
  } else {
    console.log(fighter2.name +  " à rate son attaque")
  } 

  if (fighter2.hp <= 0) {
    console.log(fighter2.name + " ded")
    break // boucle stop:)
  } 
  if (fighter1.hp <= 0) {
    console.log(fighter1.name + " ded ")
    break 
  } 
  console.log(
    "HP restant = " + fighter1.name + ": " + fighter1.hp + " et " + fighter2.name + " : " + fighter2.hp
  )
 }

 if (fighter1.hp > 0 ) {
    console.log("Le vainqueur est : " + fighter1.name + " !")
 } else {
    console.log("Le vainqueur est : " + fighter2.name + " !")
 }