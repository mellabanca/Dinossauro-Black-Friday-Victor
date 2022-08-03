//variáveis
var dinossauroCorrendoNaBlackFriday;
var irmaoDoDinossauronaBlackFriday;
var asfaltoquenaoeasfalto;
var irmaodoasfalto;
var aviaodamulhermaravilha;

//arquivos
function preload(){
irmaoDoDinossauronaBlackFriday = loadAnimation("trex1.png","trex3.png","trex4.png");  
irmaodoasfalto = loadImage ("ground.png");
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
}

function oporcovoltou(){

}