let banner = 1;

document.getElementById("banner1").checked = true;


setInterval( function(){

    if(banner == 4){
        banner = 0;
    }
    banner++;
    document.getElementById("banner"+banner).checked = true;

}, 5000)

