/**
 * Created by mac on 4/12/17.
 */
var currentState,
    width,
    height,
    frames = 0,
    theHero;


var states = {
    splash: 0,
    game: 1,
    score: 2

};
var canvas;
var renderingContext;

function OctoGroup(){
    this.collection =[];

    this.reset = function(){
        this.collection = [];
    }

    this.add = function(){
        this.collection.push(new Octorok());
    }

    this.update = function(){
        if(frames % 100 === 0){//Add an octorok every 100 frames
            this.add();
        }
        for(vsr i = 0; len = this.collection.length; i < len; i++){
            var octorok = this.collection[i];

            if(i === 0){
                octorok.detectCollision();
            }

            octorok.x -= 2;
            if(octorok.x < -octorok.width){
                this.collection.splice(i, 1);
                i --;
                len --;
            }
        }
    }
    this.draw = function () {
        for (var i = 0, len = this.collection.length; i < len; i++){
            var octorok = this.collection[i];
            octorok.draw();
        }
    }
}

function Octorok() {
    this.x = 400;
    this.y = 340;

    this.width = octorokSprite.width;
    this.height = octorokSprite.height;

    this.detectCollision = function(){
        if(this.x === (theHero.x + theHero.width)){
            console.log("you're dead");
        }
    }
    this.draw = function(){
        octorokSprite.draw(renderingContext, 220, 340)
    }
}

function Hero(){
    this.x = 120;
    this.y = 180;
    this.width = link.width;

    this.frame = 0;
    this.velocity = 0;
    this.animation = [0,1,2,1];

    this.rotation = 0;
    this.radius = 12;

    this.gravity = 0.25;
    this._jump = 5.6;
    this.jumpcount = 2;

    this.jump = function () {
        if(this.jumpcount > 0) {
            this.velocity = -this._jump;
            this.jumpcount --;
        }
    };
    this.update = function(){
        var h = currentState === states.splash ? 10 : 5;
        this.frame += frames % h === 0 ? 1 : 0;
        this.frame %= this.animation.length;
        console.log(this.frame);

        if(currentState === states.splash){
            this.updateIdleHero();

        }
    else{
            this.updatePlayingHero();
        }
    };
    this.updateIdleHero = function (){

    };

    this.updatePlayingHero = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;

        //check to see if hit the ground and stay there.
        if(this.y >= 180){
            //console.log("hit ground");
            this.y = 180;
            this.jumpcount = 2;
            this.velocity = this._jump;
        }
    };

    this.draw = function(renderingContext){
        renderingContext.save();

        renderingContext.translate(this.x, this.y);
        renderingContext.rotate(this.rotation);

        var f = this.animation[this.frame];
        link[f].draw(renderingContext, 20, this.y);

        renderingContext.restore();

    }


}

function main() {
    windowSetup();
    canvasSetup();
    currentState = states.splash;
    document.body.appendChild(canvas);

    loadGraphics();
    theHero = new Hero();
    ogroup = new OctoGroup();

}

function windowSetup() {
    var inputEvent = "touchstart";
    var windowWidth = $(window).width();
    console.log(windowWidth);
    if(windowWidth < 500){
        width = 320;
        height = 430;

    }
    else{
        width = 400;
        height = 430;
        inputEvent = "mousedown";
    }

    document.addEventListener(inputEvent, onpress);
}

function onpress(evt){
    console.log("click happened");

    switch (currentState){
        case states.Splash:
            theHero.jump();
            currentState = states.Game;
            break;
        case states.Game:
            theHero.jump();
            break;

    }


}

function canvasSetup(){
    canvas = document.createElement("canvas");
    canvas.style.border = "3px solid black";
    canvas.width = width;
    canvas.height = height;
    renderingContext = canvas.getContext("2d");

}

function loadGraphics(){
    var img = new Image();
    img.src = "linkSheet.png";
    img.onload = function(){
        initSprites(this);
        renderingContext.fillStyle = "#3db0dd";

        //link.draw(renderingContext, 100, 100);
        gameLoop();

    };

}

function gameLoop(){
    update();
    render();
    window.requestAnimationFrame(gameLoop);

}

function update(){
    frames ++;
    if(currentState = states.Game){
        ogroup.update();
    }
    theHero.update();

}

function render(){
    renderingContext.fillRect(0, 0, width, height);
    backgroundSprite.draw(renderingContext, 0, 200);
    //octorok.draw(renderingContext, 220, 340);
    ogroup.draw(renderingContext);
    theHero.draw(renderingContext);



}