/**
 * Created by mac on 4/24/17.
 */
var backgroundSprite;
var phantom;

function Sprite(img, x, y, width, height){
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

}

Sprite.prototype.draw = function(renderingContext, x, y){
    renderingContext.drawImage(this.img, this.x, this.y, this.width, this.height, x, y, this.width, this.height)

};

function initSprites(img){
    phantom = new Sprite(img, 0, 250, 100, 100);
    backgroundSprite = new Sprite(img, 100, 0, 900, 500);

}