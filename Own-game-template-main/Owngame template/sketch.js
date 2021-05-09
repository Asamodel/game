var player 
var sword_fragment1
var ground
var villagernpc
var wisenpc
var rope
var stone 
var walls 
var backgroundimg
var backgroundimg2
var platform 
function preload(){


backgroundimg = loadImage("Images'/villages.png")


platform = loadImage("Images'/platformimg.jpg")

}

function setup(){
    createCanvas(2000,2000)
backgroundimg2 = createSprite(500,500,1000,1000)
backgroundimg2.addImage(backgroundimg)
backgroundimg2.scale = 6.7
    
ground = createSprite(1000,1970,1000,100)
ground.shapeColor = "#2D1918"

villagernpc = createSprite(970,900,40,40)
villagernpc.shapeColor = "green"

player = createSprite(80,900,40,40)
player.shapeColor = "yellow"

}

function draw(){
    background("white")
    if (keyDown (RIGHT_ARROW)) {
      player.x = player.x +3
        
    }

    if (keyDown(LEFT_ARROW)){
        player.x = player.x -3

    }

   if (keyDown(UP_ARROW)){
player.velocityY = -10
   }
   player.velocityY += 0.8;
   player.collide(ground)




   
    drawSprites()
    textSize(35)
    stroke("green")
    fill("white")
    text("press space to continue",300,900)

    
   if(keyDown("space")){
background("black")


textSize(20)
fill("white")

text("this was once a peaceful town... the people all lived with harmony and tranquiity",200,200)
text("But now it has all been ravaged for every penny... everyone above the age of 50 has been killed... the rest have been taken to work as slaves,including you're family",200,400)
text("You are their only hope... legends tell of a ancient sword capable of making thier weilder a warrior...i happen to know its location but i dont have long to live...Its up to you now..good luck on your journey little hero",200,700)
text("move forward towards the fiery cavern to obtain the legendary sword and free your family",200,1000)

}

}

function spawnPlatforms() {
    //write code here to spawn the platforms

      platform = createSprite(600,100,40,10);
      platform.addImage(platformImage)
      platform.y = Math.round(random(30,110))
      platform.scale = Math.random(0.3,0.8)
      platform.velocityX = -4-score/100;
      //console.log("platform"+platform.depth)
      platform.depth = trex.depth
      trex.depth = trex.depth+1
      platform.lifetime = 197
      platformsGroup.add(platform)
      }
  

