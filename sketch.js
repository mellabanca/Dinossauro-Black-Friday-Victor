//Criando as variáveis
var dinossauroCorrendoNaBlackFriday;
var irmaoDoDinossauronaBlackFriday;
var asfaltoquenaoeasfalto;
var irmaodoasfalto;
//Função para carregar os arquivos
function preload(){
irmaoDoDinossauronaBlackFriday = loadAnimation("trex1.png","trex3.png","trex4.png");  
irmaodoasfalto = loadImage ("ground.png");
}
//Função de configuração
function setup(){
//Cria a tela
createCanvas(600,200);
asfaltoquenaoeasfalto = createSprite (200,180,400,20);
asfaltoquenaoeasfalto.addImage (irmaodoasfalto);
asfaltoquenaoeasfalto.x = asfaltoquenaoeasfalto.width/2
//Cria o sprite do dinossauro
dinossauroCorrendoNaBlackFriday = createSprite(50,160,20,50);
//Adiciona a animação ao dinossauro
dinossauroCorrendoNaBlackFriday.addAnimation("correndo", irmaoDoDinossauronaBlackFriday);
//Diminui ou aumenta a escala da variável
dinossauroCorrendoNaBlackFriday.scale = 0.5;
//Criando as bordas
borda = createEdgeSprites();
}
//Função de desenho
function draw(){
//Definindo a cor de fundo
background("white");
asfaltoquenaoeasfalto.velocityX = -2;
if(asfaltoquenaoeasfalto.x<0) {
asfaltoquenaoeasfalto.x = asfaltoquenaoeasfalto.width/2;
}
//Se apertar a tecla de espaço, o dinossauro pula
if(keyDown("space")){
dinossauroCorrendoNaBlackFriday.velocityY = -12;
}
//Sistema de gravidade
dinossauroCorrendoNaBlackFriday.velocityY += 1;
//Impede o dinossauro de cair da tela
dinossauroCorrendoNaBlackFriday.collide(asfaltoquenaoeasfalto);
//Desenha todos os sprites
drawSprites();
}