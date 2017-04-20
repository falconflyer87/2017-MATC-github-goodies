/**
 * Created by mac on 3/9/17.
 */
var anotherArray = ['banana', [], 3232, function(){}, 'orange'];

function filterNonStringItemAsync(array, callback) {
    var delay = Math.random() * 2000 + 1000;

    setTimeout(filterNonStringItems, delay, array, callback);

}

    function filterNonStringItems(anArray, aCallback) {
        var filteredArray = [];
        anArray.forEach(function(item) {
            if(typeof item == 'string') {
                filteredArray.push(item);
            }

        });
        aCallback(filteredArray);
}

filterNonStringItemAsync(anotherArray, function (shinyfilteredArray) {
    document.getElementById("filtered").innerText = shinyfilteredArray

}

filterNonStringItemAsync(anotherArray, display);