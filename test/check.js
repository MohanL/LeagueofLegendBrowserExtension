 
 function renderStatus(statusText) {
  document.getElementById('status').textContent = "Hi how are you?";
  summonerIdLookUp();
  //summonerCurrentGame();
}

function summonerIdLookUp() {
   var SUMMONER_NAME = "zeroelov";
   var API_KEY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
   var SUMMONER_ID= "";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4 && xhttp.status == 200) {
      var myArr = JSON.parse(xhttp.responseText);
      var SUMMONER_ID = myArr["zeroelov"].id;
      document.getElementById("status").innerHTML = SUMMONER_ID;
      summonerCurrentGame();
    }
   }
   xhttp.open("GET", "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+SUMMONER_NAME+"?api_key="+API_KEY, true);
   xhttp.send();

}
function summonerCurrentGame(){
   var API_KEY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   //if (xhttp.readyState == 4 && xhttp.status == 200) {
      //var myArr = JSON.parse(xhttp.responseText);
   //   document.getElementById("currentgame").innerHTML = "in a game";
      //document.getElementById("status").innerHTML = xhttp.responseText;
   // }
   // else if(xhttp.readyState == 4 && xhttp.status == 0)
   // {
   //   document.getElementById("currentgame").innerHTML = "not in a game";
   // }
   // else
   // {
      if(xhttp.responseText!="")
        document.getElementById("currentgame").innerHTML = xhttp.responseText;
      else
        document.getElementById("currentgame").innerHTML = "Not in a game";

   // }
   }
   xhttp.open("GET", 
   "https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/38996502?api_key=6ee2214a-80ef-4554-89f3-80aa72c22f29",
   true);
   //xhttp.open("GET", "https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/38996502?api_key="+API_KEY, true);
   //"https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/"+SUMMONER_ID+"?api_key="+API_KEY, true);
   xhttp.send();
}

//funtion summonerPastGames()
//{
//  var API_KEY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//   if (xhttp.readyState == 4 && xhttp.status == 200) {
//      //var myArr = JSON.parse(xhttp.responseText);
//      document.getElementById("currentgame").innerHTML = "In a Game";
//      //document.getElementById("status").innerHTML = xhttp.responseText;
//    }
//    else if(xhttp.readyState == 4 && xhttp.status == 0)
//    {
//      document.getElementById("currentgame").innerHTML = "Not in a Game";
//    }
//    else
//    {
//      document.getElementById("currentgame").innerHTML = "usnexpected";
//    }
//   }
//   xhttp.open("GET", "https://na.api.pvp.net/api/lol/{region}/v1.3/game/by-summoner//38996502?api_key=" +API_KEY, true);
//   //"https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/"+SUMMONER_ID+"?api_key="+API_KEY, true);
//   xhttp.send();
//}


document.addEventListener('DOMContentLoaded', function(){ renderStatus("Hello World!"); });