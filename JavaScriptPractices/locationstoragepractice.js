/**
 * Created by mac on 3/14/17.
 */
(function () {


    window.db = {
    save: save,
    get: get,
    remove: remove,
    update: update

}

function save(key, value) {
    localStorage.setItem(key, value);
}

function get(key) {
    return localStorage.getItem(key);

}

function remove(key) {
    localStorage.removeItem(key);
}

function update(key, value) {
    if (localStorage.getItem(key)) {
        localStorage.setItem(key, value);
        return true;
    }

    return false;

})();

var cart = [];
if(!db.get('cart')) {
    db.save('cart', []);

}

//var db = window.db;

document.getElementById('add').onclick(function() {
    var candyName = document.getElementById('candyName').value;
    var candy = {name: candyName};
    cart.push(candy);
    db.update('cart', candy);
});

var cart = db.get('cart');
var falsy = false; //NaN, //null, //undefined, //0, //'';
if (cart.length) {
    var candyList ='';

    cart.forEach(function (candy) {
        candyList = candyList + '<li>' + candy.name + '</li>';
    });


}

document.getElementById('cart').innerText = candyList;