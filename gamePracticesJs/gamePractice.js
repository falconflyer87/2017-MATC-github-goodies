/**
 * Created by mac on 4/12/17.
 */
var currentState,
    width,
    height,
    frames = 0,
    score = 0,
    hiScore = 0,
    ogroup,
    theHero;


var states = {
    Splash: 0,
    Game: 1,
    Score: 2

};
var canvas;
var renderingContext;
var thescore = 0;

function OctoGroup(){
    this.collection =[];

    this.reset = function(){
        this.collection = [];
    };

    this.add = function(){
        this.collection.push(new Octorok());
    };

    this.update = function(){
        if(frames % 100 === 0){//Add an octorok every 100 frames
            this.add();
        }
        for(var i = 0, len = this.collection.length; i < len; i++) {
            var octorok = this.collection[i];

            if(i === 0){
                octorok.detectCollision();
                octorok.checkScore();
            }

            octorok.x -= 2;
            if(octorok.x < -octorok.width){
                this.collection.splice(i, 1);
                i --;
                len --;
            }
        }
    };
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
    this.scored = false;

    this.detectCollision = function(){
        //console.log(this.x + "-the player is at : " + (thehero.x && the hero.y >= 135) {
        if(this.x <= (theHero.x + theHero.width) && this.x >= theHero.x && theHero.y >= 135){
            console.log("Better luck next time!");
            currentState = states.Score;
            document.getElementById("resetbtn").style.display = "block";
        }
    };

    this.checkScore = function (){
        if((this.x + this.width) < theHero.x){
            console.log("add one");
            thescore ++;
            this.score = true;
            document.getElementById("scorebox"),innerHTML = thescore
        }
    };

    this.draw = function(){
        octorokSprite.draw(renderingContext, this.x, this.y);
    }
}

function Hero(){
    this.x = 50;
    this.y = 160;
    this.width = 45;
    this.height = 55;

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
        var h = currentState === states.Splash ? 10 : 5;
        //console.log(h + "hero h rate");
        this.frame += frames % h === 0 ? 1 : 0;
        this.frame %= this.animation.length;
        //console.log(this.frame);

        if(currentState === states.Splash){
            this.updateIdleHero();

        }
    else{
            this.updatePlayingHero();
        }
    };
    this.updateIdleHero = function (){
        //this.y = 250
    };

    this.updatePlayingHero = function(){
        this.velocity += this.gravity;
        this.y += this.velocity;

        //check to see if hit the ground and stay there.
        if(this.y >= 160){
            //console.log("hit ground");
            this.y = 160;
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
    currentState = states.Splash;
    document.body.appendChild(canvas);
    if (localStorage.hiScore) {
        hiScore = localStorage.hiScore;
    }
    loadGraphics();
    theHero = new Hero();
    ogroup = new OctoGroup();
    localStorage.setItem("Highscore", 0);

}

function resetgame(){
    ogroup.reset();
        currentState = states.Splash;
        if(thescore > Number(localStorage.getItem("Highscore"))){
            localStorage.setItem("Highscore", thescore);
        }
        document.getElementById("myhighscore").innerHTML = localStorage.getItem("Highscore");
        thescore = 0;
        documetn.getElementById("scorebox").innerHTML = thescore;
        document.getElementById("resetbtn".style.display = "none");
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

    switch (currentState){
        case states.Splash:
            theHero.jump();
            currentState = states.Game;
            break;
        case states.Game:
            theHero.jump();
            break;
        case states.Score:
            ogroup.reset();
            o2group.reset();
            if (score > hiScore) {
                localStorage.hiScore = score;
                hiScore = localStorage.hiScore;
            }
            score = 0;
            velocity = 3;
            currentState = states.Splash;
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
    if(currentState === states.Game){
        ogroup.update();
    }
    theHero.update();

}

function render(){
    renderingContext.fillRect(0, 0, width, height);
    backgroundSprite.draw(renderingContext, 0, 180);
    //octorok.draw(renderingContext, 220, 340);
    ogroup.draw(renderingContext);
    theHero.draw(renderingContext);


}