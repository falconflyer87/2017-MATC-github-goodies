/**
 * Created by mac on 3/2/17.
 */
var car = {
    make:"Toyota"
    model:"Corolla"
    color:"White"
    capacity:"5 Passengers"
    MPG:"26 street, 34 highway"
    Extras:"Sun roof"
};

var gameProperties = {
    level
    playerNumber
    Time
    score


}


var Reflector = function(obj){

    this.getProperties = function() {
        var properties = [];
        for (var prop in obj) {
            if (typeof obj[prop] != 'function') {
                properties.push(prop);
            }
        }
        return properties;
    };
}


function Fish(){
    this.speed = 5
    this.scalecolor = "orange";

}

var Reflector = function(fish){

    this.getProperties = function() {
        var properties = [];
        for (var prop in fish) {
            if (typeof fish[prop] != 'function') {
                properties.push(prop);
            }
        }
        return properties;
    };
}

var reflector = new Reflector(fish);
document.getElementById("mycard").innerHTML = reflector.getProperties().join('<br />');
