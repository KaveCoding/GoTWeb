
var index1 = 0;
var index2 = 0;

class WhiteWalker{
  constructor(Y, X){
    this.X = X
    this.Y = Y
  }
}

class Ally{
  constructor(Y, X, name){
    this.X = X
    this.Y = Y 
    this.name = name
  }
}

let walker1 = new WhiteWalker(Math.floor(Math.random()*4) + 1, Math.floor(Math.random()*4) + 1);
let walker2 = new WhiteWalker(Math.floor(Math.random()*4) +1, Math.floor(Math.random()*4)+ 1);
let Edd = new Ally(Math.floor(Math.random()*3) +1, Math.floor(Math.random()*4))
let Ghost = new Ally(Math.floor(Math.random()*3) +1, Math.floor(Math.random()*4))
let Grenn = new Ally(Math.floor(Math.random()*3) +1, Math.floor(Math.random()*4))
let Sam = new Ally(Math.floor(Math.random()*3) +1, Math.floor(Math.random()*4))

function partyadd(ally, name)
{
  if (index1 == ally.Y && index2 == ally.X) 
  {
    ally.Y = -1
    ally.X = -1
    party.push(name)
      alert(name + " has joined the party");
    }
  }

var party = []


function walkermove(walker)
  {
    var chance = Math.floor(Math.random()*4)
if (chance >=1)
{
  if (index1 > walker.Y)
  {
   walker.Y++
  }
  if (index2 > walker.Y)
  {
   walker.X++
  }
  if (index1 < walker.Y)
  {
   walker.Y--
  }
  if (index2 < walker.X)
  {
   walker.X--
  }
} 
  }

function mapprinter()
{
  let table  = "";

  table += "<table>"

  for (let i = 0; i <= 4; i++) {

    table += "<tr>"

      table += "<td>" + map[i] + "</td>"

    table += "</tr>"

  }

  table += "</table>"
  document.getElementById("map").innerHTML = table
}
function resetmap()
{
  var map = [['X', "X","X","X", "X"],
  ['X', "X","X","X", "X"],
  ['X', "X","X","X", "X"],
  ['X', "X","X","X", "X"],
  ['X', "X","X","X", "X"]]
  return map
}
function BadEnding() {
  window.location.href = "BadEnding.html";
}
function GoodEnding(){
  window.location.href = "GoodEnding.html"
}
function NeutralEnding()
{
    window.location.href = "NeutralEnding.html"
}

map = resetmap();
map[index1][index2] = "O"

mapprinter();

document.addEventListener('keydown', (event)=>{
    map = resetmap();

    

  if(event.key == "a") {index2--}

  if(event.key == "d") {index2++}
  
  if(event.key == "w") {index1--}
  
  if(event.key == "s") {index1++}
  
  partyadd(Edd,'Edd')
  partyadd(Ghost,'Ghost')
  partyadd(Grenn,'Grenn')
  partyadd(Sam,'Sam')

  walkermove(walker1)
  walkermove(walker2)


  if (index1 == walker1.Y  && index2 == walker1.X && party.length > 0) 
  {
    walker1.Y = -1000
    alert(party.pop() + " was sacrificed to help the party flee from the white walker")
  }
  
  if (index1 == walker2.Y  && index2 == walker2.X && party.length > 0) 
  {
    walker2.Y = -1000
    alert(party.pop() + " was sacrificed to help the party flee from the white walker")
  }

  the_image.src = images[index1][index2];
    
    var fullPath = document.getElementById('main-image').src;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
    filename = filename.replace('.webp','')
    filename = filename.replace('.jpg','')
    filename = filename.replace('_',' ')
    filename = filename.replace('.png','')
    document.getElementById("infotext").innerHTML = "He then traveled to " + filename


   if (walker1.Y < -500 && walker2.Y < -500 && party.length == 2)
  {
    NeutralEnding()

  } 

   if (walker1.Y < -500 && party.length == 3  || walker2.Y <-500 && party.length == 3)
  {
    NeutralEnding()
  } 

  if (index1 == walker1.Y && index2 == walker1.X && party.length == 0) 
  {
      BadEnding();
  }

  if (party.length == 4)
  {
    GoodEnding();

  }

  map[index1][index2] = "O"
  mapprinter();
  map = resetmap();
  document.getElementById("partyinfo").innerHTML = party
})
  
var images =   
  [
    ["Locations/The_Fist_of_the_First_Men.jpg", 'Locations/The_inn_at_the_crossroads.jpg', 'Locations/Castamere.webp', 'Locations/Castle_black.webp', 'Locations/Harrenhal.webp'], 
    ['Locations/Highgarden.webp', 'Locations/Kings_Landing.webp','Locations/Lys.webp','Locations/Maidenpool.png','Locations/Meereen.webp'],
    ['Locations/Pentos.webp', 'Locations/Pyke.webp','Locations/Qarth.webp','Locations/Riverrun.webp','Locations/Moat_Cailin.webp'],
    ['Locations/StormsEnd.webp', 'Locations/Sunspear.webp','Locations/The_Eyrie.webp','Locations/The_Twins.webp','Locations/The_Shadow_Lands.webp'],
    ['Locations/The_Dreadfort.webp', 'Locations/Braavos.webp','Locations/Vaes_Dothrak.jpg','Locations/WhiteHarbour.jpg','Locations/Winterfell.webp']
  ];


var the_image = document.getElementById("main-image");
the_image.src = images[0][0];