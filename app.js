var dest = new Date("oct 1, 2019, 23:55:00").getTime();


var x = setInterval(function(){
    var now = new Date().getTime();
    var diff = (dest - now);

    var day = Math.floor(diff/ (1000*24*60*60));

    var hour = Math.floor((diff % (1000*24*60*60)) / (1000*60*60));

    var min = Math.floor((diff % (1000*60*60) / (1000 * 60)));

    var sec = Math.floor((diff % (1000*60) / (1000)));
 
    document.getElementById("countdown").innerHTML = day + "d: " + hour +"hr: " +min+"min: "+ sec+"sec ";

}, 1000);