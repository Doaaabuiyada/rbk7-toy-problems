var rockPaperScissors = function (n) {
    var RPS = ['R', 'P', 'S'];
    var output = []
     
      for (var i = 0 ; i <3 ; i++){
          for (var j = 0 ; j <3 ; j++){
              for (var k = 0 ; k <3 ; k++){
                  var possible = RPS[i]+ RPS[j] + RPS[k]; 
                output.push(possible)
              }
          }
      }
      return output ; 
    };
    
 /// trying with n player ....
    var rockPaperScissors = function (n) {
          // TODO: your solution here
          var RPS = ['R', 'P', 'S'] ; 
          var updateRPS = ['R', 'P', 'S']; 
          var output = []; 
          while (n!==0){
              
              for (var i = 0 ; i < updateRPS.length ; i++){
                for (var j = 0 ; j <3 ; j++){
                    var newoput = [];
                    output.push(RPS[j]+updateRPS[i]) ; 
                }
              }
               
              n--; 
              updateRPS = output ; 
          }



          return updateRPS ; 
        };
        