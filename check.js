window.addEventListener("load", renderStatus);


window.onload=function(){
 var but = document.getElementById('but');
if(but){
  but.addEventListener('click', renderStatus, false);
}
else
  console.log("but not exist");
}

 function summonerPastGames(uid) {
   var API_EY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4) {
      var obj = JSON.parse(xhttp.responseText);
      
      var lastGame = obj['games'][0]['createDate'];
      var last3Game = obj['games'][2]['createDate'];
      var last5Game = obj['games'][5]['createDate'];
      var last9Game = obj['games'][9]['createDate'];
      
      var date = new Date(lastGame);
      var date3 = new Date(last3Game);
      var date5 = new Date(last5Game);
      var date9= new Date(last9Game);
      var hours3 = Math.floor(Math.abs(date3 - date) / 36e5);
      var hours5 = Math.floor(Math.abs(date5 - date) / 36e5);
      var hours9 = Math.floor(Math.abs(date9 - date) / 36e5);

      if (hours3 < 5)
      { 
        var str = "3 games in " + hours3 + " hours";
        document.getElementById("pastgames3").innerHTML = str
      }
      else
      { 
        var str = "3 games in " + hours3 + " hours";
        document.getElementById("pastgames3").innerHTML = str
      }
      if (hours5 < 5)
      { 
        var str = "6 games in " + hours3 + " hours";
        document.getElementById("pastgames5").innerHTML = str
      }
      else
      { 
        var str = "6 games in " + hours5 + " hours";
        document.getElementById("pastgames5").innerHTML = str
      }
      if(hours9 < 10)
      { 
        var str = "10 games in " + hours5 + " hours";
        document.getElementById("pastgames10").innerHTML = str
      }
      else
      { 
        var str = "10 games in " + hours9 + " hours";
        document.getElementById("pastgames10").innerHTML = str;
      }
    }
   }
   var des = "https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/"+uid+"/recent?api_key=6ee2214a-80ef-4554-89f3-80aa72c22f29";
   xhttp.open("GET", des, true);
   xhttp.send();
 }

 function summonerIdLookUp() { 
   var SUMMONER_NAME = document.getElementById('myTextField').value;
   var API_KEY = "6ee2214a-80ef-4554-89f3-80aa72c22f29";
   var SUMMONER_ID= "";
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4) {
       var myArr = JSON.parse(xhttp.responseText);
       var SUMMONER_ID = myArr[SUMMONER_NAME].id;
       console.log(SUMMONER_ID);
       document.getElementById("user").innerHTML = SUMMONER_ID;
       summonerPastGames(SUMMONER_ID);
    }
   }
   xhttp.open("GET", "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/"+SUMMONER_NAME+"?api_key="+API_KEY, true);
   xhttp.send();
}

function renderStatus() {
  console.log('check');
  summonerIdLookUp();
  change();
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

function change(){
    
   var myNewTitle = document.getElementById('myTextField').value;
   if( myNewTitle.length==0 ){
       alert('Write Some real Text please.');
   return;
   }
   
   var title = document.getElementById('title');
   title.innerHTML = myNewTitle;
    
}
