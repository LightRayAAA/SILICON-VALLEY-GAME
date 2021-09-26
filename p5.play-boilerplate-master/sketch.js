var backgroundImg
var spaceship, spaceshipImg
var bullet, bulletGroup
var inviswall1, inviswall2
var asteroid, asteroidImg, asteroidGroup

function preload() {
backgroundImg = loadImage("images/space.jpg")
spaceshipImg = loadImage("images/spaceship.png")
asteroidImg = loadImage("images/asteroid.png")
}

function setup() {
createCanvas(600,400);
spaceship = createSprite(300, 350, 50, 50);
spaceship.addImage("rocket", spaceshipImg)
spaceship.scale = 0.3
spaceship.depth = spaceship.depth - 1
asteroidGroup = new Group();
bulletGroup = new Group();
}

function draw() {
background(backgroundImg);  

if(keyDown(LEFT_ARROW)){
spaceship.x = spaceship.x - 10
}
if(keyDown(RIGHT_ARROW)){
spaceship.x = spaceship.x + 10
}
if(keyDown("space")||keyDown("z")){
shoot();
}
spawnAsteroids();
if(asteroidGroup.isTouching(bulletGroup)){
asteroidGroup.destroyEach();
}
drawSprites();
}

function shoot() {
bullet = createSprite(300,200,10,20)
bullet.shapeColor = "red"
bullet.x = spaceship.x
bullet.y = spaceship.y
bullet.velocityY = -20
bullet.depth = spaceship.depth
bulletGroup.add(bullet);
}

function spawnAsteroids() {
if(frameCount%60 == 0){
asteroid = createSprite(random(100,500),0)
asteroid.addImage("asteroids", asteroidImg)
asteroid.velocityY = 5
asteroid.scale = 0.3
asteroidGroup.add(asteroid);
}
}