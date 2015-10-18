# LightWeightExtensions
Chrome/Firefox Extensions

This extension automatically detects summoner's game status
Goal for now: 1. popup to show if summoner is in a game. 
              2. check out past games in 10 hours and return prediction. 
              3. differentiate time (diurnal or nocturnal)

Implementation details: 
			  1. Incorporating League of Legend API into JS. Using following API:
			  	 a. summoner-v1.4  
			  	    na.api.pvp.net/api/lol/{region}/v1.4/summoner/by-name/{summonerNames}?api_key=
			  	    need to retrive summonerID
			  	 b. current-game-v1.0 
			  	    /observer-mode/rest/consumer/getSpectatorGameInfo/{platformId}/{summonerId}api_key=
			  	   	check game time. 
			  	 c. game-v1.3
			  	 	/api/lol/{region}/v1.3/game/by-summoner/{summonerId}/recent
			  	    retrieve recent 10 games information:
			  	    analyze the time of the games
Progress: 
			  1. retrieve SummonerID and SummerName.
			  2. retrieve current game info, the xmlhttprequest is broken
			  
