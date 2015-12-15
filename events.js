var computeButton = document.getElementById("computeButton");
var data;
computeButton.addEventListener("click", function() {
    alert();
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
function positionArr(pos,list)
{
    var playerCounter = 0;
    var Arr = [];
    for (var i = 0; i<list.length;i++)
    {
        
        if(list[i].Position === pos && list[i].Vorp >= 0)
        {
            Arr[playerCounter] = list[i];
            playerCounter +=1; 
        }
    }
    return Arr;
}// function for mapping players of a postition to their position array
// pass the characters associated with that position to pos     ex. pitcher would be  pos = 'p'
//document.getElementById("results").value = p[0].Name;
    var p = [];
    var c = [];
    var first = [];
    var second = [];
    var ss = [];
    var third = [];
    var cf = [];
    var rf = [];
    var lf = [];


// p[0] = addPlayer('undefined','p', 0, 0);
// c[0] = addPlayer('undefined','c', 0, 0);
// first[0] = addPlayer('undefined', '1b', 0, 0);
// second[0] = addPlayer('undefined', '2b', 0, 0);
// third[0] = addPlayer('undefined', '3b', 0, 0);
// ss[0] = addPlayer('undefined', 'ss', 0, 0);
// lf[0] = addPlayer('undefined', 'lf', 0, 0);
// cf[0] = addPlayer('undefined', 'cf', 0, 0);
// rf[0] = addPlayer('undefined', 'rf', 0, 0);
p = positionArr('p', playerList);
c = positionArr('c', playerList);
first = positionArr('1b', playerList);
second = positionArr('2b', playerList);
third = positionArr('3b', playerList);
ss = positionArr('ss', playerList);
lf = positionArr('lf', playerList);
rf = positionArr('rf', playerList);
cf = positionArr('cf', playerList);

p[p.length] = addPlayer('undefined','p', 0, 0);
c[c.length] = addPlayer('undefined','c', 0, 0);
first[first.length] = addPlayer('undefined', '1b', 0, 0);
second[second.length] = addPlayer('undefined', '2b', 0, 0);
third[third.length] = addPlayer('undefined', '3b', 0, 0);
ss[ss.length] = addPlayer('undefined', 'ss', 0, 0);
lf[lf.length] = addPlayer('undefined', 'lf', 0, 0);
cf[cf.length] = addPlayer('undefined', 'cf', 0, 0);
rf[rf.length] = addPlayer('undefined', 'rf', 0, 0);

    var positions = [];
    // positions[0] = 'p';
    // positions[1] = 'c';
    // positions[2] = 'first';
    // positions[3] = 'second';
    // positions[4] = 'third';
    // positions[5] = 'ss';
    // positions[6] = 'lf';
    // positions[7] = 'rf';
    // positions[8] = 'cf';

    // for(var i = 0; i < p.length; i++)
    // {
    //     positions[0].push(p[i]);
    // }
    // for(var i = 0; i < c.length; i++)
    // {
    //     positions[1].push(c[i]);
    // }
    // for(var i = 0; i < first.length; first++)
    // {
    //     positions[2].push(first[i]);
    // }
    // for(var i = 0; i < second.length; second++)
    // {
    //     positions[3].push(second[i]);
    // }
    // for(var i = 0; i < third.length; third++)
    // {
    //     positions[4].push(third[i]);
    // }
    // for(var i = 0; i < ss.length; ss++)
    // {
    //     positions[5].push(ss[i]);
    // }
    // for(var i = 0; i < lf.length; lf++)
    // {
    //     positions[6].push(lf[i]);
    // }
    // for(var i = 0; i < rf.length; rf++)
    // {
    //     positions[7].push(rf[i]);
    // }
    // for(var i = 0; i < cf.length; cf++)
    // {
    //     positions[8].push(cf[i]);
    // }
    positions[0] = (positionArr('p', p));
    positions[1] = (positionArr('c', c));
    positions[2] = (positionArr('1b', first));
    positions[3] = (positionArr('2b', second));
    positions[4] = (positionArr('3b', third));
    positions[5] = (positionArr('ss', ss));
    positions[6] = (positionArr('lf', lf));
    positions[7] = (positionArr('rf', rf));
    positions[8] = (positionArr('cf', cf));

    // function addToPosition(position, playerList)
    // {
    //     for (var i = 0; i < playerList.length; i++)
    //     {
            
    //         if (playerList[i].position === 'p')
    //         {
    //             position[0].push(playerList[i]);
    //         }
    //         if (playerList[i].position === 'c')
    //         {
    //             position[1].push(playerList[i]);
    //         }
    //         if (playerList[i].position === '1b')
    //         {
    //             position[2].push(playerList[i]);
    //         }
    //         if (playerList[i].position === '2b')
    //         {
    //             position[3].push(playerList[i]);
    //         }
    //         if (playerList[i].position === 'ss')
    //         {
    //             position[4].push(playerList[i]);
    //         }
    //         if (playerList[i].position === '3b')
    //         {
    //             position[5].push(playerList[i]);
    //         }
    //         if (playerList[i].position === 'cf')
    //         {
    //             position[6].push(playerList[i]);
    //         }
    //         if (playerList[i].position === 'rf')
    //         {
    //             position[7].push(playerList[i]);
    //         }
    //         if (playerList[i].position === 'lf')
    //         {
    //             position[8].push(playerList[i]);
    //         }
    //     }
    // }
    
    // addToPosition(positions, playerList);
    
    // for(var i = 0; i < cf.length; i++)
    // {
    //     console.log(positions[8][i]);
    // }
    for(var i = 0; i < positions.length; i++)
    {
        for(var j = 0; j < positions[i].length; j++)
        {
            //document.getElementById("results").value += positions[i][j].Name;
            //console.log(typeof(positions[i][j]));
        }
    }
    // console.log(positions[1][3].Name);
    // console.log(positions[1][1].Name);
   // console.log(positions[1][4].Name);
    // console.log(positions.length);
    // positions.pop();
    // console.log(positions.length);
    // console.log(positions[8].length);

    positions.forEach(function(element, index){
        element.forEach(function(ele, ind){
            // document.getElementById("results").value += positions[index][ind].Name + ' ' + positions[index][ind].Salary + ' ' + positions[index][ind].Vorp + '\n';
            console.log(positions[index][ind].Name + ' ' + positions[index][ind].Salary + ' ' + positions[index][ind].Vorp + '\n');
        });
        console.log("------");
    });
    positionsMutable = positions.slice();
    console.log("Here: ", positions);
    

    var memo =[];

    function maxVorp(salaryCap, position)//positionsMutable)
    {
        //console.log("Here2: ", position);
        //var testPositions = [];
        if (position.length === 0) //if position is empty
        {
            return [];
        }
        //console.log("POS")
        //console.log("POS", position.length);
        // if (salary <= 0)
        // {
        //     return 0;
        // }
        var maxVorpSoFar = 0;
        var maxVorpArr = [];
        var arr = [];
        var tempVorp = 0;
        //position.forEach(function(playersForOnePosition, i){
            // var arr;
            // tempVorp = 0;
            //console.log("PFOP: ");
            //console.log(playersForOnePosition);
            //console.log("PFOP: ");
            var playersForOnePosition = position[0];
        if (playersForOnePosition.length !== 0)
        {
            playersForOnePosition.forEach(function(player, j){
                //console.log("PLAYER:", player);
                if(salaryCap - player.Salary >= 0)
                {
                    //document.getElementById("results").value += salaryCap - playersForOnePosition[j].Salary + '\n';
                    positionsMutable = position.slice(1);
                   
                    if(memo[player.Position, player.Salary] !== undefined)
                    {
                        arr = memo[player.Position, player.Salary].concat(player);
                        arr.forEach(function(ele, k){
                        tempVorp += arr[k].Vorp; 
                        //document.getElementById("results").value += tempVorp + '\n';
                        });
                    //console.log(tempVorp);
                        if(tempVorp > maxVorpSoFar)
                        {
                            maxVorpSoFar = tempVorp;
                            maxVorpArr = arr;
                        }
                        tempVorp = 0;
                    }
                    else
                    {
                        // arr = (maxVorp(salaryCap - player.Salary, positionsMutable)).concat(player);
                        memo[player.Position, player.Salary] =  (maxVorp(salaryCap - player.Salary, positionsMutable));
                        arr = memo[player.Position, player.Salary].concat(player);

                    //document.getElementById("results").value += arr[0].Name + ' ' + arr[0].Position;// positionsMutable)).concat(player);
                        arr.forEach(function(ele, k){
                        tempVorp += arr[k].Vorp; 
                        //document.getElementById("results").value += tempVorp + '\n';
                        });
                    //console.log(tempVorp);
                        if(tempVorp > maxVorpSoFar)
                        {
                            maxVorpSoFar = tempVorp;
                            maxVorpArr = arr;
                        }
                        tempVorp = 0;
                    }
                }
                //document.getElementById("results").value += '\n\n';
            });
        }
        else
        {
            //If a position has no people in it, step over
            positionsMutable = position.slice(1);
            arr = maxVorp(salaryCap, positionsMutable);
            arr.forEach(function(ele, k){
                tempVorp += arr[k].Vorp; 
                        //document.getElementById("results").value += tempVorp + '\n';
            });
                    //console.log(tempVorp);
            if(tempVorp > maxVorpSoFar)
                {
                    maxVorpSoFar = tempVorp;
                    maxVorpArr = arr;
                }
                    tempVorp = 0;

        }

            //         Case of picking no one
            // positionsMutable = position.slice(1);
            // arr = (maxVorp(salaryCap, positionsMutable)).concat([]);
            // arr.forEach(function(ele, k){
            //             tempVorp += arr[k].Vorp; 
            //             //document.getElementById("results").value += tempVorp + '\n';
            //         });
            //         //console.log(tempVorp);
            //         if(tempVorp > maxVorpSoFar)
            //         {
            //             maxVorpSoFar = tempVorp;
            //             maxVorpArr = arr;
            //         }
            //         tempVorp = 0;
                
        
            //document.getElementById("results").value += '\n\n';
        //});
        //document.getElementById("results").value += maxVorpSoFar;
        // for(var i = 0; i < position.length; i++)
        // {
        //     tempVorp = 0;
        //     for(var j = 0; j < position[i].length; j++)
        //     {
        //         //testPositions[j] = positions[i][j];
        //         //console.log(testPositions[j].Name);
        //         if(salaryCap - position[i][j].Salary >= 0)
        //         {
        //             //positionsMutable = positions.slice();
        //             positionsMutable = position.slice();
        //             arr = position[i][j].concat(maxVorp(salaryCap - position[i][j].Salary, positionsMutable));
        //             arr.forEach(function(ele, k){
        //                 tempVorp += arr[k].Vorp; 
        //             });
        //             if(tempVorp > maxVorpSoFar)
        //             {
        //                 maxVorpSoFar = tempVorp;
        //                 maxVorpArr = arr;
        //             }
        //         }
        //     }
        // }


        // else
        // {
        //     for (var i = 0; i < positions[0].length-1; i++)
        //     {
        //         if (positions )
        //     }
        // }
        //console.log(maxVorpArr);
        return maxVorpArr;
    }

var maximumVorp = maxVorp(10000000, positions);//positionsMutable);
var vorpTotal = 0
var salaryTotal = 0;
maximumVorp.forEach(function(player){
    vorpTotal += player.Vorp;
    salaryTotal += player.Salary;
});
console.log("MAX:", maximumVorp);
//console.log(memo);

document.getElementById("results").value += maximumVorp + '\n' + vorpTotal + '\n' + salaryTotal;
alert(maximumVorp + '\n' + vorpTotal + '\n' + salaryTotal);

});

