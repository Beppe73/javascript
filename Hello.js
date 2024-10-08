const team = {
    _players : [
      {firstName: 'Beppe', lastName: 'Rubino', age:51},
      {firstName: 'Gianni', lastName: 'Latorre', age:33},
      {firstName: 'Raffaele', lastName: 'Laguardia', age:35}
    ],
    _games : [
      {opponent: 'Juventus', teamPoints: 3, opponentPoints: 2},
      {opponent: 'Milan', teamPoints: 4, opponentPoints: 1},
      {opponent: 'Inter', teamPoints: 4, opponentPoints: 5},
    ],
    get players () {
      return this._players;
    },
    get games () {
      return this._games;
    },
    addPlayer (newFirstName, newLastName, newAge){
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game);
    }
    };
    team.addPlayer('Bugs', 'Bunny', 76)
    team.addGame('Titans', 100 , 98)
    console.log(team.players);
    console.log(team.games);

    
    