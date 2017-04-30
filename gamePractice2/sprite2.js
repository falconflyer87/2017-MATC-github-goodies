/**
 * Created by mac on 4/24/17.
 */
var width = 900;
var height = 500;
var canvas;
var renderingContext;
var frames;
var currentState;
var states = {
    Splash: 0,
    Game: 1,
    Score: 2
};


var thebomb;

function main(){
    windowSetup();
    canvasSetup();

    document.body.appendChild(canvas);
    myphantom = new Hero();
    loadGraphics();



}

function windowSetup(){
    document.addEventListener("keydown", onpress);
    document.addEventListener("keyup", removeMotion);

}

function canvasSetup(){
    document.createElement("canvas");
    canvas.style.border = "2px solid black";

    canvas.width = width;
    canvas.height = height;

    renderingContext = canvas.getContent("2d");

}

function removeMotion(evt){
    myphantom._direction = "";
}

function onpress(evt){
    console.log(evt.keyCode + "hey key");
    switch(evt.keyCode){
        case 37:
            myphantom._direction = "left";
            break;
        case 39:
            myphantom._direction = "right";
        break;
    }


}

function loadGraphics(){
    var img = new Image();
    img.src = "SpritesSheet2.png";
    img.onload = function(){
        initSprites(this);
        gameLoop()

    };

    function Hero() {
        this.x = 400;
        this.y = 14;
        this.width = 100;
        this.height = 100;
        this.direction = "";
        this.friction = 0.94;
        this.speed = 6;
        this.velX = 0;

        this.update = function () {
            if(currentState === states.Splash){
                this.updatePlayingHero();
            }
        }

        this.updatePlayingHero = function () {
            if(this._direction === "left"){
                if(this.velX > -this.maxspeed){
                    this.velX --;
                }
            }
            if(this._direction === "right"){
                if(this.velX < this.maxspeed){
                    this.velX
                }
            }
        }
        this.draw = function(renderingContext){
            renderingContext.save();
            phantom.draw(renderingContext, this.x, this.y);
            renderingContext.restore();

        }
    }

    function gameLoop() {

        update();
        render();
        window.requestAnimationFrame(gameLoop);

    }

    function update() {
    myphantom.update();
    }

    function render() {
        backgroundSprite.draw(renderingContext, 0, 0);
        phantom.draw(renderingContext);
    }
}