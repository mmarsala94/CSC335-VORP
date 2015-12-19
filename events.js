var computeButton = document.getElementById("computeButton");
var data;
computeButton.addEventListener("click", function() {
    
    data = document.getElementById("player-data").value;

    var splitData = data.split("***");

    splitData[0] = splitData[0].toLowerCase();
    splitData[1] = splitData[1].toLowerCase();

    var arr = splitData[0].split("\n");
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) 
    {
        arr2[i] = arr[i].split("\t");
    }

    var arr3 = splitData[1].split("\n");
    var arr4 = [];
    for (var i = 0; i < arr3.length; i++) 
    {
        arr4[i] = arr3[i].split("\t");
    }

    var players = {};

    function addPlayer(name, position, salary, vorp) 
    {
        players[name] = {
            Name: name,
            Position: position,
            Salary: salary,
            Vorp: vorp
        };
        return players[name];
    }

    var playerList = [];

    for (var i = 0; i < arr4.length; i++) 
    {
        for (var j = 0; j < arr2.length; j++) 
        {
            if (arr4[i][1] === arr2[j][0]) 
            {
                playerList.push(addPlayer(arr4[i][1], arr4[i][3], arr2[j][3], arr4[i][16])); 
            }
        }
    }

    for (i = 0; i < playerList.length; i++) 
    {
        playerList[i].Vorp = Number(playerList[i].Vorp);
        playerList[i].Salary = Number((playerList[i].Salary).slice(1).replace(/,/g, ''));
    }
    // function to add players to position.
    
    function addPlayerToPosition(pos,list)
    {
        var counter = 0;
        var arry = [];
        for (var i = 0; i < list.length; i++)
        {
            if(list[i].Position === pos && list[i].Vorp >= 0)
            {
                arry[counter]= list[i];
                counter += 1;
            }
        }
        return arry;
    }//function to create an array of players for a given position
    
    var p = addPlayerToPosition('p', playerList);
    var c = addPlayerToPosition('c', playerList);
    var first = addPlayerToPosition('1b', playerList);
    var second = addPlayerToPosition('2b', playerList);
    var ss = addPlayerToPosition('ss', playerList);
    var third = addPlayerToPosition('3b', playerList);
    var cf = addPlayerToPosition('cf', playerList);
    var rf = addPlayerToPosition('rf', playerList);
    var lf = addPlayerToPosition('lf', playerList);
    // creates separate position arrays.
    
    p[p.length] = addPlayer('undefined','p', 0, 0);
    c[c.length] = addPlayer('undefined','c', 0, 0);
    first[first.length] = addPlayer('undefined', '1b', 0, 0);
    second[second.length] = addPlayer('undefined', '2b', 0, 0);
    third[third.length] = addPlayer('undefined', '3b', 0, 0);
    ss[ss.length] = addPlayer('undefined', 'ss', 0, 0);
    lf[lf.length] = addPlayer('undefined', 'lf', 0, 0);
    cf[cf.length] = addPlayer('undefined', 'cf', 0, 0);
    rf[rf.length] = addPlayer('undefined', 'rf', 0, 0);

    var positionsArr = [];

    positionsArr[0] = (addPlayerToPosition('p', p));
    positionsArr[1] = (addPlayerToPosition('c', c));
    positionsArr[2] = (addPlayerToPosition('1b', first));
    positionsArr[3] = (addPlayerToPosition('2b', second));
    positionsArr[4] = (addPlayerToPosition('ss', ss));
    positionsArr[5] = (addPlayerToPosition('3b', third));
    positionsArr[6] = (addPlayerToPosition('cf', cf));
    positionsArr[7] = (addPlayerToPosition('rf', rf));
    positionsArr[8] = (addPlayerToPosition('lf', lf));

    var positionMutable = positionsArr.slice();

    var memo = {};
    var key;

    function generateKey(a,b)
    {
        return a.toString() + ',' + b.toString();
    }//function to generate key to be used in memo 


    var teamBudget = prompt("Enter a team budget","$-------")
    function maxVorp(salaryCap, positions)
    {

        if (positions.length === 0)
        {
            return [];
        }

        var maxVorpSoFar = 0;
        var maxVorpTeam = [];
        var ary = [];
        var tempVorp = 0;

            key = generateKey(positions.length, salaryCap); 
            if (key in memo)
            {
                return memo[key];
            }
            
                var playerPerPosition = positions[0];

                playerPerPosition.forEach(function(currentPlayer,ii) {

                    if (salaryCap - currentPlayer.Salary >= 0 && currentPlayer.Vorp >= 0)
                    {
                        //console.log('got here');
                        positionMutable = positions.slice(1);

                        ary = (maxVorp(salaryCap - currentPlayer.Salary, positionMutable)).concat(currentPlayer);
                        
                        
                        ary.forEach(function(ele){
                            tempVorp += ele.Vorp;
                        });

                        if (tempVorp > maxVorpSoFar)
                        {
                            maxVorpSoFar = tempVorp;
                            maxVorpTeam = ary;
                        }

                        tempVorp = 0;   

                    }
                       
                });

                     key = generateKey(positions.length, salaryCap); 
                     return (memo.key = maxVorpTeam);         
    }

    var maximumVorp = maxVorp(teamBudget, positionsArr);
    var vorpTotal = 0;
    var salaryTotal = 0;

    maximumVorp.forEach(function(player){
        vorpTotal += player.Vorp;
        salaryTotal += player.Salary;
    });
   
    document.getElementById("results").value = "Team with overall highest Vorp within budget of $" + teamBudget + '\n' + '\n';
    maximumVorp.forEach(function(player){ if (player.Name != "undefined")
        switch (player.Position)
        {
            case "p":
            document.getElementById("results").value += "Pitcher: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n' ;
            break;

            case "c":
            document.getElementById("results").value += "Catcher: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "1b":
            document.getElementById("results").value += "1st Baseman: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "2b":
            document.getElementById("results").value += "2nd Baseman: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "3b":
            document.getElementById("results").value += "3rd Baseman: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "ss":
            document.getElementById("results").value += "Shortstop: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "lf":
            document.getElementById("results").value += "Left Fielder: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "rf":
            document.getElementById("results").value += "Right Fielder " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;

            case "cf":
            document.getElementById("results").value += "Center Fielder: " + '\n\t\t' + "Name: " + player.Name + '\n\t\t' + "Salary: " + player.Salary + '\n\t\t' + "Vorp: " + player.Vorp + '\n';
            break;'\n\t\t'

            default : document.getElementById("results").value += "No Position";

        }});
    document.getElementById("results").value +=  '\n' + "Teams Total Salary: "  + salaryTotal + '\n' +"Teams Total Vorp:   " + vorpTotal;

});
