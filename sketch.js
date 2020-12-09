var dance,mountains,food,pillar,been,bird,king,lotus,painting,painting1,
palace,sitar,tabla,thali,tiger,veena,danceImg, mtImg,foodImg,pillarImg,
beenImg,birdImg,kingImg,lotusImg,mountainsImg,paintingImg,painting1Img,
palaceImg,sitarImg,tablaImg,thaliImg,tigerImg,veenaImg,bgImg,img1,img2,img3,img4,img5,img6;

var r1c1,r2c1,r3c1,r1c2,r1c3,r2c2,r2c3,r3c2,r3c3

function preload(){
  danceImg = loadImage("images/kathakali.png");
  mtImg = loadImage("images/mountains.png");
  foodImg = loadImage("images/Thali.png"); 
  pillarImg = loadImage("images/ashokstambh.png");
  beenImg = loadImage("images/been.png");
  birdImg = loadImage("images/bird.png");
  kingImg = loadImage("images/king.png");
  lotusImg = loadImage("images/lotus.png");
  paintingImg = loadImage("images/painting.png");
  painting1Img = loadImage("images/painting1.png");
  palaceImg = loadImage("images/palaces.png");
  sitarImg = loadImage("images/sitar.png");
  tablaImg = loadImage("images/Tabla.png");
  thaliImg = loadImage("images/Thali.png");
  tigerImg = loadImage("images/tiger.png");
  veenaImg = loadImage("images/veena.png");
  bgImg = loadImage("images/bg.png");
  img1 = loadImage("images/img1.png");
  img2 = loadImage("images/img2.png");
  img3 = loadImage("images/img3.png");
  img4 = loadImage("images/img4.png");
  img5 = loadImage("images/img5.png");
  img6 = loadImage("images/img6.png");

}

function setup() {
  createCanvas(displayWidth, displayHeight);

  r1c1 = createSprite(200, 200, 50, 50);
  setInterval(randomImg,1000);

  r1c1.scale = 0.8;

  r1c2 = createSprite(500,200,50,50);
  r1c2.addImage("mt.",mtImg);
  r1c2.scale = 0.8;

  r1c3 = createSprite(800,200,50,50);
  r1c3.addImage("been",beenImg);
  r1c3scale = 0.8;



}

function draw() {
  background(bgImg);  
  drawSprites();
}

function randomImg(){
  var x = Math.round(random(1,6))
  switch(x){
    case 1: r1c1.addImage("image",img1);break
    case 2: r1c1.addImage("image",img2);break
    case 3: r1c1.addImage("image",img3);break
    case 4: r1c1.addImage("image",img4);break
    case 5: r1c1.addImage("image",img5);break
    case 6: r1c1.addImage("image",img6);break
  }

}