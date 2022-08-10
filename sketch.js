//variáveis
var dinossauroCorrendoNaBlackFriday;
var irmaoDoDinossauronaBlackFriday;
var asfaltoquenaoeasfalto;
var irmaodoasfalto;
var aviaodamulhermaravilha;
var algodaodoce;
var eupensaqueanuvemeraalgodaodoce;
var jorginho1;
var jorginho2;
var jorginho3;

//arquivos
function preload(){
irmaoDoDinossauronaBlackFriday = loadAnimation("trex1.png","trex3.png","trex4.png");  
eupensaqueanuvemeraalgodaodoce = loadImage ("cloud.png");
irmaodoasfalto = loadImage ("ground.png");
jorginho1 = loadImage("obstacle1.png");
jorginho2 = loadImage("obstacle2.png");
jorginho3 = loadImage("obstacle3.png");
}

//configuração
function setup(){

//tela
createCanvas(600,200);
asfaltoquenaoeasfalto = createSprite (200,180,400,20);
asfaltoquenaoeasfalto.addImage (irmaodoasfalto);
asfaltoquenaoeasfalto.x = asfaltoquenaoeasfalto.width/2;
aviaodamulhermaravilha = createSprite (50,190,400,10);
aviaodamulhermaravilha.visible = false;

//sprite do dinossauro
dinossauroCorrendoNaBlackFriday = createSprite(50,160,20,50);

//animação ao dinossauro
dinossauroCorrendoNaBlackFriday.addAnimation("correndo", irmaoDoDinossauronaBlackFriday);

//escala da variável
dinossauroCorrendoNaBlackFriday.scale = 0.5;

//bordas
borda = createEdgeSprites();

//número aleatório
var aleatorio = Math.round(random(1,100));
console.log(aleatorio);
}

//desenho
function draw(){
//console.log (dinossauroCorrendoNaBlackFriday.y);

//cor de fundo
background("white");
asfaltoquenaoeasfalto.velocityX = -2;
if(asfaltoquenaoeasfalto.x<0) {
asfaltoquenaoeasfalto.x = asfaltoquenaoeasfalto.width/2;
}

//tecla de espaço
if(keyDown("space")&&dinossauroCorrendoNaBlackFriday.y>=150){
dinossauroCorrendoNaBlackFriday.velocityY = -12;
}

//gravidade
dinossauroCorrendoNaBlackFriday.velocityY += 1;

//dinossauro não cai da tela
dinossauroCorrendoNaBlackFriday.collide(aviaodamulhermaravilha);

//Desenha todos os sprites
drawSprites();

//Chamar a função que vai criar as nuvens
oporcovoltou();

//Chamar a função que vai criar os cactos
jorge();
}

function oporcovoltou(){
if(frameCount%60 === 0) {
    algodaodoce = createSprite(600,100,40,10);
    algodaodoce.velocityX = -3;
    algodaodoce.addImage (eupensaqueanuvemeraalgodaodoce);
    algodaodoce.y = Math.round(random(10,100));
    algodaodoce.depth = dinossauroCorrendoNaBlackFriday.depth;
    dinossauroCorrendoNaBlackFriday.depth +=1;
}

}

function jorge(){
   if(frameCount%60 === 0) {
    var jorginhos = createSprite(600, 165, 10, 40);
    jorginhos.velocityX = -6;
    
    var zeninguem = Math.round(random(1,6));

    switch(zeninguem){
        case 1: jorginhos.addImage(jorginho1);
        break;
        case 2: jorginhos.addImage(jorginho2);
        break;
        case 3: jorginhos.addImage(jorginho3);
        break;
        default: break;
    }
   }
}