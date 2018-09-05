

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//var pieces = []
var frames = 0;
var interval;
var images={
    baby:'./tile000.png',
    Monster:'./tile000.png',
}
class Baby{
    constructor(){
        
        this.x=50
        this.y=100
        this.width=50
        this.height=50
        this.image = new Image()
        this.image.src = images.baby
        this.image.onload = () => {
            this.draw()
        }
    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    derecha(){
        if(this.x>=canvas.width-this.width)return
        this.x+=this.width
    }
    izquierda(){
        if(this.x<this.width)return
        this.x-=this.width
    }
    up(){
        if(this.y<this.height)return
        this.y-=this.height
    }
    down(){
        if(this.y>=canvas.height-this.height)return
        this.y+=this.height
    }
    crashWith(char){        
        var crash = (this.x < char.x + char.width) &&
                (this.x + this.width > char.x) &&
                (this.y < char.y + char.height) &&
                (this.y + this.height > char.y)

        
        // if(crash) {
        //      console.log(this.x < char.x + char.width)
        //     console.log(this.x + this.width > char.x)
        //     console.log(this.y < char.y + char.height)
        //     console.log(this.y + this.height > char.y)
        //     console.log('choqué')
        // }
        console.log(crash)
        return  crash;
    }
}
            
class Monster{
    constructor(){
        this.x=950
        this.y=400
        this.width=50
        this.height=50
        this.image = new Image()
        this.image.src = images.Monster
        this.image.onload = () =>{
            this.draw()
        } 
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    derecha(){
        if(this.x>=canvas.width-this.width)return
        this.x+=this.width
    }
    izquierda(){
        if(this.x<this.width)return
        this.x-=this.width
    }
    up(){
        if(this.y<this.height)return
        this.y-=this.height
    }
    down(){
        if(this.y>=canvas.height-this.height)return
        this.y+=this.height
    }
}
class component{
    constructor(width,height,color,x,y){
        this.width=width;
        this.height=height;
        this.color=color
        this.x=x;
        this.y=y;
    }    
    draw(){
        ctx.fillStyle=this.color;
        ctx.fillRect(this.width,this.height,this.y,this.x)
    }
    
}

var baby = new Baby()
var monster = new Monster()

var myGamePiece = new component(0,150,"pink",350,50);    
var myGamePiece2 = new component(450,100,"pink",100,100);
var myGamePiece3 = new component(0,450,"pink",50,1000);
var myGamePiece4 = new component(100,100,"pink",50,50);
var myGamePiece5 = new component(0,0,"pink",50,1000);
var myGamePiece6 = new component(100,350,"pink",50,50);
var myGamePiece7 = new component(350,100,"pink",50,50);
var myGamePiece8 = new component(350,350,"pink",50,50);
var myGamePiece9 = new component(350,200,"pink",100,50);
var myGamePiece10 = new component(200,350,"pink",50,100);
var myGamePiece11 = new component(200,100,"pink",50,100)
var myGamePiece12 = new component(100,200,"pink",100,50)
var myGamePiece13 = new component(200,200,"pink ",100,100)
var myGamePiece14 = new component(950,0,"pink",350,50)
var myGamePiece15 = new component(450,300,"pink",100,100);
var myGamePiece16 = new component(600,200,"pink",100,50);
var myGamePiece17 = new component(600,100,"pink",50,50)
var myGamePiece18 = new component(600,350,"pink",50,50)
var myGamePiece19 = new component(700,200,"pink",100,100);
var myGamePiece20 = new component(700,100,"pink",50,100)
var myGamePiece21 = new component(700,350,"pink",50,100)
var myGamePiece22 = new component(850,200,"pink",100,50);
var myGamePiece23 = new component(850,100,"pink",50,50)
var myGamePiece24 = new component(850,350,"pink",50,50)



var pieces = [myGamePiece,
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

    
]

function startGame(){

    pieces.forEach(function(p){
        p.draw();
        //baby.crashWith(p)
    })

}


//classes


//instancias



//funciones principales
interval = setInterval(update, 1000/60)

function update(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    frames++
    baby.draw()
    monster.draw()
    startGame()

}

//funciones aux

//eventos

document.onkeydown=function(e){
    
   /* switch(e.keyCode){
        case 68:
            
            baby.derecha()
            pieces.forEach(function(p){            
                if(baby.crashWith(p))baby.x-=50
            })
            break;

        case 65:
            baby.izquierda()
            pieces.forEach(function(p){
                if(baby.crashWith(p))baby.x+=50
            })
            break;

        case 83:
            baby.down()
            pieces.forEach(function(p){
                if(baby.crashWith(p))baby.y-=50
            })
            break;

        case 87:
            baby.up()
            pieces.forEach(function(p){
                if(baby.crashWith(p))baby.y+=50
            })
            break;

        case 39:
            console.log('ñoooo')
    }*/

    //if(bChoque) return
    if(e.keyCode==68){
        baby.derecha()
        
    }

    if(e.keyCode==65)baby.izquierda()

    if(e.keyCode==87)baby.up()

    if(e.keyCode==83)baby.down()

    if(e.keyCode==39){

        monster.derecha()
    }
    
    if(e.keyCode==37)monster.izquierda()
    
    if(e.keyCode==38)monster.up()
    
    if(e.keyCode==40)monster.down()
    
}











