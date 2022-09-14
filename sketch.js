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
var jorginho4;
var jorginho5;
var jorginho6;
var PONTOSSSS;
var lanhouse;
var viajandonamaionese;
var correnegada = 1;
var morreumorreu = 0;
var estado = correnegada;
var meugatopuloueabriuaporta;
var ogatomatouoscabo;
var notade200;
var dinossauronaoconseguiucomprarnaBF;
var perdel;
var perdeltrizte;
var botau;
var botauperdeltrizte;
//variável para mostrar uma mensagem
var mensagem = "Isso é uma mensagem";

//arquivos
function preload(){
irmaoDoDinossauronaBlackFriday = loadAnimation("trex1.png","trex3.png","trex4.png");
dinossauronaoconseguiucomprarnaBF = loadAnimation("trex_collided.png");
eupensaqueanuvemeraalgodaodoce = loadImage ("cloud.png");
perdeltrizte = loadImage("gameOver.png");
botauperdeltrizte = loadImage("restart.png");
irmaodoasfalto = loadImage ("ground.png");
jorginho1 = loadImage("obstacle1.png");
jorginho2 = loadImage("obstacle2.png");
jorginho3 = loadImage("obstacle3.png");
jorginho4 = loadImage("obstacle4.png");
jorginho5 = loadImage("obstacle5.png");
jorginho6 = loadImage("obstacle6.png");
meugatopuloueabriuaporta = loadSound("jump.mp3");
ogatomatouoscabo = loadSound("die.mp3");
notade200 = loadSound("checkPoint.mp3");
}

//configuração
function setup(){

    //valor dos pontos
    PONTOSSSS = 0;
    
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
    dinossauroCorrendoNaBlackFriday.addAnimation("trizte", dinossauronaoconseguiucomprarnaBF);
    
    //escala da variável
    dinossauroCorrendoNaBlackFriday.scale = 0.5;
    
    //bordas
    borda = createEdgeSprites();
    
    //número aleatório
    var aleatorio = Math.round(random(1,100));
    //console.log(aleatorio);
    
    //criando os grupos de sprites
    lanhouse = new Group();
    viajandonamaionese = new Group();
    
    //Verificando a colisão do dino
    dinossauroCorrendoNaBlackFriday.debug = false;
    dinossauroCorrendoNaBlackFriday.setCollider("circle", 0, 0, 56);
    //gamerover
    perdel = createSprite(300,100);
    perdel.addImage(perdeltrizte);
    //restart
    botau = createSprite(300,140);
    botau.addImage(botauperdeltrizte);
    botau.scale = 0.5;

    }
    
    //desenho
    function draw(){

    //console.log(mensagem);

    //console.log (dinossauroCorrendoNaBlackFriday.y);
    
    //cor de fundo
    background("white");
    
    if(estado === correnegada){
     perdel.visible = false;
     botau.visible = false;
     PONTOSSSS+=Math.round(frameCount/60);
     if(PONTOSSSS>0&&PONTOSSSS%100===0){
    notade200.play()
     };
     asfaltoquenaoeasfalto.velocityX = -(4+PONTOSSSS/100);
    if(asfaltoquenaoeasfalto.x<0) {
     asfaltoquenaoeasfalto.x = asfaltoquenaoeasfalto.width/2;
     }
     //tecla de espaço
    if(keyDown("space")&&dinossauroCorrendoNaBlackFriday.y>=150){
     dinossauroCorrendoNaBlackFriday.velocityY = -12;
     meugatopuloueabriuaporta.play();
     }
     //gravidade
    dinossauroCorrendoNaBlackFriday.velocityY += 1;
    //Chamar a função que vai criar as nuvens
    oporcovoltou();
    
    //Chamar a função que vai criar os cactos
    jorge();
    if(viajandonamaionese.isTouching(dinossauroCorrendoNaBlackFriday)) {
    estado = morreumorreu
    ogatomatouoscabo.play();
    }
    } else if(estado === morreumorreu){
    perdel.visible = true;
    botau.visible = true;
    dinossauroCorrendoNaBlackFriday.changeAnimation("trizte");
    asfaltoquenaoeasfalto.velocityX = 0;
    lanhouse.setVelocityXEach(0);
    viajandonamaionese.setVelocityXEach(0);
    lanhouse.setLifetimeEach(-666);
    viajandonamaionese.setLifetimeEach(-666);
    dinossauroCorrendoNaBlackFriday.velocityX = -1;
    dinossauroCorrendoNaBlackFriday.velocityY = 0;
    }
    //dinossauro não cai da tela
    dinossauroCorrendoNaBlackFriday.collide(aviaodamulhermaravilha);
    
    //Verifica se apertou o botão
    if(mousePressedOver(botau)){
        reset();
    }

    //Desenha todos os sprites
    drawSprites();
    text(PONTOSSSS,500,50);
    
    }

    function reset(){

    }
    
    function oporcovoltou(){
    if(frameCount%60 === 0) {
        algodaodoce = createSprite(600,100,40,10);
        algodaodoce.velocityX = -3;
        algodaodoce.addImage (eupensaqueanuvemeraalgodaodoce);
        algodaodoce.y = Math.round(random(10,100));
        algodaodoce.depth = dinossauroCorrendoNaBlackFriday.depth;
        dinossauroCorrendoNaBlackFriday.depth +=1;
        algodaodoce.lifetime = 300;
        lanhouse.add(algodaodoce);
    }
    
    }
    
    function jorge(){
       if(frameCount%60 === 0) {
        var jorginhos = createSprite(600, 165, 10, 40);
        jorginhos.velocityX = -(6+PONTOSSSS/100);
        
        var zeninguem = Math.round(random(1,6));
    
        switch(zeninguem){
            case 1: jorginhos.addImage(jorginho1);
            break;
            case 2: jorginhos.addImage(jorginho2);
            break;
            case 3: jorginhos.addImage(jorginho3);
            break;
            case 4: jorginhos.addImage(jorginho4);
            break;
            case 5: jorginhos.addImage(jorginho5);
            break;
            case 6: jorginhos.addImage(jorginho6);
            break;
            default: break;
        }
        jorginhos.scale = 0.5;
        jorginhos.lifetime = 300;
        jorginhos.depth = dinossauroCorrendoNaBlackFriday.depth;
        dinossauroCorrendoNaBlackFriday.depth +=1;
        viajandonamaionese.add(jorginhos);
       }
    }