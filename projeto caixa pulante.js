var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;

function preload(){
    // carregue o som aqui

}

function setup(){
    tela = createTela(800,600);

    bloco1 = createSprite(0,580,360,30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295,580,200,30);
    bloco2.shapeColor = "orange";

    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(590,580,200,30);
    bloco3.shapeColor = "Red";
    bloco4 = createSprite(800,580,200,30);
    bloco4.shapeColor = "Green";
    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
     bola.velocityX = 4;
     bola.velocityY = 4;
}

function draw() {
    background(rgb(169,169,169));
    arestas=createArestasprites();
    bola.bounceOff(arestas);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola) && bola.bounceOff(bloco1)){
        bola.shapeColor = "blue";
        music.play();
    }


    if(bloco2.isTouching(bola)){
        bola.shapeColor = "orange";
    }

        //escreva o código para definir velocityX e velocityY da bola como 0
        if(bloco3.isTouching(bola) && bola.bounceOff(bloco3)){
            bola.shapeColor = "Red";
            music.play();
        }
        if(bloco4.isTouching(bola) && bola.bounceOff(bloco4)){
            bola.shapeColor = "Green";
            music.play();
        }
        //escreva o código para parar a música
    

    //escreva o código de ricochete de bola para bloco3

    //escreva o código de ricochete de bola para bloco4

bloco1.dispaly;
bloco2.display;
bloco3.display;
bloco4.display;
    drawSprites();
}