var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
//var pieces = []
var frames = 0;
var interval;
var images = {
  baby: "./tile000.png",
  Monster: "./aliens000.png"
  
};
var time = Math.floor(frames / 60)

class Baby {
  constructor() {
    this.x = 0;
    this.y = 50;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = "./tile000.png";
    this.image2 = new Image();
    this.image2.src = "./tile001.png";
    this.image3 = new Image();
    this.image3.src = "./tile002.png";
    this.image4 = new Image();
    this.image4.src = "./tile003.png";
    this.theImage=this.image1;
    
    


    // this.image.onload = () => {
    //   this.draw();
    // };
  }
  animate(){
    if(frames % 10 === 0){
        if(this.theImage === this.image1) this.theImage = this.image2
        else if(this.theImage === this.image2) this.theImage = this.image3
        else if(this.theImage === this.image3) this.theImage = this.image1
    }
}

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
   
  }
  derecha() {
    if (this.x >= canvas.width - this.width) return;
    this.x += 50;
  }
  izquierda() {
    if (this.x === 0) return;
    this.x -= 50;
  }
  up() {
    if (this.y === 0) return;
    this.y -= 50;
  }
  down() {
    if (this.y >= canvas.height - this.height) return;
    this.y += 50;
  }
  checkColl(item){
    var coll =  this.x < item.x + item.width &&
               this.x + this.width > item.x &&
               this.y < item.y + item.height &&
               this.height + this.y > item.y
    
    return coll               
    }

}

class Monster {
  constructor() {
    this.x = 950;
    this.y = 400;
    this.width = 50;
    this.height = 50;
    this.image = new Image();
    this.image.src = images.Monster;
    // this.image.onload = () => {
    //   this.draw();
    // };
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  derecha() {
    if (this.x >= canvas.width - this.width) return;
    this.x += 50;
  }
  izquierda() {
    if (this.x === 0) return;
    this.x -= 50;
  }
  up() {
    if (this.y < 0) return;
    this.y -= 50;
  }
  down() {
    if (this.y >= canvas.height - this.height) return;
    this.y += 50;
  }
  checkColl(char) {
    var crash =
      this.x < char.x + char.width &&
      this.x + this.width > char.x &&
      this.y < char.y + char.height &&
      this.y + this.height > char.y;

    return crash
  }
}
class cuadro {
  constructor(x, y, color, width, height) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.music = new Audio()
    this.music.src = './Invader Zim - Main Theme (extended).mp3';
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    
  }
}

var baby = new Baby();
var monster = new Monster();

var myGamePiece = new cuadro(0,0 , "#27FFBA", canvas.width, 50);
var myGamePiece2 = new cuadro(0, 450, "#27FFBA", 1000, 50);
var myGamePiece3 = new cuadro(950, 0, "#27FFBA", 50, 350);
var myGamePiece4 = new cuadro(450, 100, "#27FFBA", 100, 100);
var myGamePiece5 = new cuadro(0, 150, "#27FFBA", 50, 450);
var myGamePiece6 = new cuadro(450, 300, "#27FFBA", 100, 100);
var myGamePiece7 = new cuadro(350, 200, "#27FFBA", 50, 100);
var myGamePiece8 = new cuadro(100, 200, "#27FFBA", 50, 100);
var myGamePiece9 = new cuadro(200, 200, "#27FFBA", 100, 100);
var myGamePiece10 = new cuadro(200, 350, "#27FFBA", 100, 50);
var myGamePiece11 = new cuadro(200, 100, "#27FFBA", 100, 50);
var myGamePiece12 = new cuadro(100, 100, "#27FFBA", 50, 50);
var myGamePiece13 = new cuadro(600, 100, "#27FFBA", 50, 50);
var myGamePiece14 = new cuadro(600, 200, "#27FFBA", 50, 100);
var myGamePiece15 = new cuadro(100, 100, "#27FFBA", 50, 50);
var myGamePiece16 = new cuadro(600, 350, "#27FFBA", 50, 50);
var myGamePiece17 = new cuadro(700, 350, "#27FFBA", 100, 50);
var myGamePiece18 = new cuadro(700, 200, "#27FFBA", 100, 100);
var myGamePiece19 = new cuadro(700, 100, "#27FFBA", 100, 50);
var myGamePiece20 = new cuadro(850, 100, "#27FFBA", 50, 50);
var myGamePiece21 = new cuadro(850, 200, "#27FFBA", 50, 100);
var myGamePiece22 = new cuadro(850, 350, "#27FFBA", 50, 50);
var myGamePiece23 = new cuadro(100, 350, "#27FFBA", 50, 50);
var myGamePiece24 = new cuadro(350, 100, "#27FFBA", 50, 50);
var myGamePiece25 = new cuadro(350, 350, "#27FFBA", 50, 50);
var pieces = [
  myGamePiece,
  myGamePiece2,
  myGamePiece3,
  myGamePiece4,
  myGamePiece5,
  myGamePiece6,
  myGamePiece7,
  myGamePiece8,
  myGamePiece9,
  myGamePiece10,
  myGamePiece11,
  myGamePiece12,
  myGamePiece13,
  myGamePiece14,
  myGamePiece15,
  myGamePiece16,
  myGamePiece17,
  myGamePiece18,
  myGamePiece19,
  myGamePiece20,
  myGamePiece21,
  myGamePiece22,
  myGamePiece23,
  myGamePiece24,
  myGamePiece25,
  
];
  
     
function drawMaze() {
  pieces.forEach(function(p) {
    p.draw();
    
  });
}


//classes

//instancias

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frames++;
    baby.draw();
    monster.draw();
    if ((frames / 60)===17){
        babyWins()
    }


    drawMaze();
    if(baby.checkColl(monster))monsterWins()
    
    ctx.font = "50px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(Math.floor(frames / 60),10,40)

  
}

//funciones principales
function start(){
    interval = setInterval(update, 1000 / 60);
    myGamePiece.music.play()

}

//funciones aux

function babyWins(){    
    console.log('babyyyy')            
    clearInterval(interval)
    ctx.fillStyle='#27FFBA'
    ctx.font='30 Arial'
    ctx.fillText("Baby Wins", 380, 90)
   
}
function monsterWins(){      
    console.log('monster')              
    clearInterval(interval)
    ctx.fillStyle='#27FFBA'
    ctx.font='30 Arial'
    ctx.fillText("Monster Wins", 380, 90)
   
}


//eventos

document.onkeydown = function(e) {
  e.preventDefault()
    switch (e.keyCode) {
      
    case 13:
      start()
      break;
    case 68:
      baby.derecha();
      pieces.forEach(function(p) {
        if (baby.checkColl(p))baby.x-=50
      });
      break;

    case 65:
      baby.izquierda();
      pieces.forEach(function(p) {
        if (baby.checkColl(p))baby.x+=50
      });
      break;

    case 83:
      baby.down();
      pieces.forEach(function(p) {
        if (baby.checkColl(p)) baby.y-=50
      });
      break;

    case 87:
      baby.up();
      pieces.forEach(function(p) {
        if (baby.checkColl(p))baby.y+=50
      });
      break;

    case 39:
      monster.derecha();
      pieces.forEach(function(p) {
        if (monster.checkColl(p)) {
          monster.x -= 50;
        }
      });
      break;
    case 37:
      monster.izquierda();
      pieces.forEach(function(p) {
        if (monster.checkColl(p)) {
          monster.x += 50;
        }
      });
     break;
  case 38:
  monster.up();
  pieces.forEach(function(p){
      if (monster.checkColl(p)){
          monster.y +=50;
      }
  });
    break;
  case 40:
  monster.down();
  pieces.forEach(function(p){
      if (monster.checkColl(p)){
          monster.y -=50;
      }
    });
  }
}
