class Ship
{
    constructor(name, hull, firepower, accuracy)
    {
        this.name=name;
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy= accuracy
    }
   
       
}
class fleet
{
    constructor(name)
    {
        this.name= name
        this.hull= Math.floor(Math.random()*4)+3
        this.firepower=Math.floor(Math.random()*3)+2
        this.accuracy= ((Math.random()*2)+6)/10
    }   
    // damageUSS(x)
    // {
    //     if(Math.random()<alienShips[x].accuracy)
    //     {
    //         console.log("You have been hit!")
    //     }
    // }
}
let alienShips= 
[
    new fleet("Ship1"), 
    new fleet("Ship2"),
    new fleet("Ship3"),
    new fleet("Ship4"),
    new fleet("Ship5"),
    new fleet("Ship6")
]
let myShip = new Ship("USS HelloWorld", 20, 5, 0.7)
console.log(myShip,alienShips)
const attackEnemy = (ship) => {ship.hull -=myShip.firepower;}
const damageUSS = (myShip) =>{myShip.hull -=alienShips[x].firepower;}

if(myShip.hull<=0)
{
    console.log("You Loose!")
}
else if(Math.random()< myShip.accuracy)
{
    attackEnemy(alienShips[x])
    console.log("Got you!")
}

else if(alienShips[x]<=0)
{
    console.log(`${alienShips[x].name} is destroyed`)
}
else if(Math.random()< alienShips[x].accuracy)
{
    damageUSS(myShip)
    console.log("You have been hit!")   
}



//alienship hit uss HelloWorld

// alienShips.damageUSS(1)


// let my_Ship = document.getElementById('my-ship')

// my_Ship.addEventListener('click', () => {
//     document.getElementById("name")=myShip.name
    // we pretend the enemy ship attacks
//     let currentHull = +shipHullElement.innerText
//   // the enemy ship hit for 3 damage
//  let enemyDamage = 3;
//     let finalHull = currentHull - enemyDamage;
//     shipHullElement.innerText = finalHull;
    
// })