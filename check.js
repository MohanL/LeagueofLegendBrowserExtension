 function summonerPastGames() {
   var API_KEY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4) {
      document.getElementById("pastgames").innerHTML = xhttp.responseText;
    }
   }
   xhttp.open("GET", "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/38996502/recent?api_key=6ee2214a-80ef-4554-89f3-80aa72c22f29", true);
   xhttp.send();
 }

 function summonerIdLookUp() { 
   var SUMMONER_NAME = "zeroelov";
   var API_KEY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
   var SUMMONER_ID= "";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4) {
       var myArr = JSON.parse(xhttp.responseText);
       var SUMMONER_ID = myArr["zeroelov"].id;
       document.getElementById("user").innerHTML = SUMMONER_ID;
    }
   }
   xhttp.open("GET", "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+SUMMONER_NAME+"?api_key="+API_KEY, true);
   xhttp.send();
}

function renderStatus() {
  summonerPastGames();
}



function summonerCurrentGame(){
   var xh = new XMLHttpRequest();
   xh.open("GET", 
   "https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/38996502?api_key=6ee2214a-80ef-4554-89f3-80aa72c22f29",
   true);
   xh.onreadystatechange = function() {
   if (xh.readyState == 4) {
      document.getElementById("currentgame").innerHTML = xh.responseText;
    }
   }
   xh.send();
  }