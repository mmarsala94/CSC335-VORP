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

    var positionsObj = {};

    function addPlayerToPosition(name, position, salary, vorp)
    {
        positionsObj[position] = {
            Name: name,
            Position: position,
            Salary: salary,
            Vorp: vorp
        }
    }
/*
    var positions = [];

    for (var i = 0; i < arr4.length; i++) 
    {
        for (var j = 0; j < arr2.length; j++) 
        {
            if (arr4[i][1] === arr2[j][0]) 
            {
                positionsObj.push(addPlayerToPosition(arr4[i][1], arr4[i][3], arr2[j][3], arr4[i][16])); 
            }
        }
    }

    for (i = 0; i < positionsObj.length; i++) 
    {
        positionsObj[i].Vorp = Number(positionsObj[i].Vorp);
        positionsObj[i].Salary = Number((positionsObj[i].Salary).slice(1).replace(/,/g, ''));
    }
*/
    var p = [];
    var c = [];
    var first = [];
    var second = [];
    var ss = [];
    var third = [];
    var cf = [];
    var rf = [];
    var lf = [];

    var positions = [p,c,first,second,ss,third,cf,rf,lf];

    function addToPosition(position, playerList)
    {
        for (var i = 0; i < playerList.length-1; i++)
        {
            if (playerList[i].position === 'P')
            {
                position[0].push(playerList[i]);
            }
            if (playerList[i].position === 'C')
            {
                position[1].push(playerList[i]);
            }
            if (playerList[i].position === '1B')
            {
                position[2].push(playerList[i]);
            }
            if (playerList[i].position === '2B')
            {
                position[3].push(playerList[i]);
            }
            if (playerList[i].position === 'SS')
            {
                position[4].push(playerList[i]);
            }
            if (playerList[i].position === '3B')
            {
                position[5].push(playerList[i]);
            }
            if (playerList[i].position === 'CF')
            {
                position[6].push(playerList[i]);
            }
            if (playerList[i].position === 'RF')
            {
                position[7].push(playerList[i]);
            }
            if (playerList[i].position === 'LF')
            {
                position[8].push(playerList[i]);
            }
        }
    }

    addToPosition(positions, playerList);

    function maxVorp(salaryCap, positions)
    {
        //if (positions is empty)
        //{
        //    
        //}
        if (salary <= 0)
        {
            return 0;
        }
        else
        {
            for (var i = 0; i < positions[0].length-1; i++)
            {
                if (positions )
            }
        }
    }




/*
    var possibleTeams = {};

    function createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams)
    {
        var team = {p[p.length-1], c[c.length-1], first[first.length-1], second[second.length-1], ss[ss.length-1], third[third.length-1],
         cf[cf.length-1], rf[rf.length-1], lf[lf.length-1]};
        currentTeams.push(team);

        if (p.length > 0)
        {
            p.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (c.length > 0)
        {
            c.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (first.length > 0)
        {
            first.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (second.length > 0)
        {
            second.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (ss.length > 0)
        {
            ss.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (third.length > 0)
        {
            third.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (cf.length > 0)
        {
            cf.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (rf.length > 0)
        {
            rf.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (lf.length > 0)
        {
            lf.pop();
            createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
        }
        if (p.lenghth === 0 && c.length === 0 && first.length === 0 && 2b.length === 0 && ss.length === 0 && third.length === 0
         && cf.length === 0 && rf.length === 0 && lf.length === 0)
        {
            return team;
        }
    }
*/


});

