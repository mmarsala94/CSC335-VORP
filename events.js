var computeButton = document.getElementById("computeButton");
var data; 
computeButton.addEventListener("click", function() {
	          data = document.getElementById("player-data").value;
	      

var splitData = data.split("***");
//splitData = splitData.toLowerCase();
//document.getElementById("results").value = splitData;
//Lowercasing the data here works for some reason, but not when we were doing it later
//There are two printouts here that confirm that everything is in lowercase.
splitData[0] = splitData[0].toLowerCase();
splitData[1] = splitData[1].toLowerCase();
//document.getElementById("results").value = splitData[0];
//document.getElementById("results").value += splitData[1];
var arr = splitData[0].split("\n");
var arr2 = [];
for(var i = 0; i < arr.length; i++)
{
    arr2[i] = arr[i].split("\t");
}

var arr3 = splitData[1].split("\n");
var arr4 = [];
for(var i = 0; i < arr3.length; i++)
{
    arr4[i] = arr3[i].split("\t");
}
//document.getElementById("results").value += arr4[1][1];
//document.getElementById("results").value += arr2[624][0];
//document.getElementById("results").value += arr2[624][0] === arr4[1][1];
//document.getElementById("results").value += arr2[742][0];
//document.getElementById("results").value += arr4[86][1];
//document.getElementById("results").value += arr4[86][1] === arr2[742][0];
var players = {};
var teamList = {};

/*function split_Data (dataArr) // will want to insert splitData[0] || splitData[1]
{
	var arr = dataArr.split("\n");
	var resultArr=[];
	for (var i =0; i<arr.length; i++)
	{
	resultArr[i]  = arr[i].split("\t");
	}
	return resultArr;
}//function to split data
var arr3 = splitData[1].split("\n");
var arr4 = [];
for(var i = 0; i < arr3.length; i++)
{
    arr4[i] = arr3[i].split("\t");
}

var newData = split_Data(splitData);
*/

function addPlayer(name,position,salary,vorp)
{
    players[name]= {
        Name: name,
       Position: position,
        Salary: salary,
        Vorp : vorp
    };
    return players[name];
}

teamList[name] = {
  
    Pitcher: null,
    PitcherSalary: 0,
    PitcherVorp: 0,
    Catcher: null,
    CatcherSalary: 0,
    CatcherVorp: 0,
    FirstBase: null,
    FirstBaseSalary: 0,
    FirstBaseVorp: 0,
    SecondBase: null,
    SecondBaseSalary: 0,
    SecondBaseVorp: 0,
    ThirdBase: null,
    ThirdBaseSalary: 0,
    ThirdBaseVorp: 0,
    ShortStop: null,
    ShortStopSalary: 0,
    ShortStopVorp: 0,
    LeftField: null,
    LeftFieldSalary: 0,
    LeftFieldVorp: 0,
    CenterField: null,
    CenterFieldSalary: 0,
    CenterFieldVorp: 0,
    RightField: null,
    RightFieldSalary: 0,
    RightFieldVorp: 0,
    SalaryTotal: 0,
    VorpTotal: 0
};

//This function adds a player to the teamObject
//A switch statement is used. 
//Depending on the position of the player, it enters a specific case
//In each case, a specific position is filled, along with the salary
//The SalaryTotal and VorpTotal are also increased.
//In each case, the first player for each position is added intially.
//From then on, when each case is entered, it checks whether the player has a higher vorp
//If he does, he replaces the player that was there.
function addPlayerToTeam(playerList, i)//Realistically, you pass a letter then use that as the player object(name, position, salary, vorp)
{
    
        switch (playerList[i].Position) {
  case "p":
  //document.getElementById("results").value += 'yo';
  if(teamList.Pitcher === undefined)
    {teamList.Pitcher = playerList[i].Name;
    teamList.PitcherSalary = playerList[i].Salary;
    teamList.PitcherVorp = playerList[i].Vorp;
    }
    else if(teamList.PitcherVorp < playerList[i].Vorp)
    {
        teamList.Pitcher = playerList[i].Name;
    teamList.PitcherSalary = playerList[i].Salary;
    teamList.PitcherVorp = playerList[i].Vorp;
    }
    //teamList.Pitcher = playerList[i].Name;
    //teamList.PitcherSalary = playerList[i].Salary;
    //teamList.PitcherVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "c":
    if(teamList.Catcher === undefined)
    {teamList.Catcher = playerList[i].Name;
    teamList.CatcherSalary = playerList[i].Salary;
    teamList.CatcherVorp = playerList[i].Vorp;
    }
    else if(teamList.CatcherVorp < playerList[i].Vorp)
    {
        teamList.Catcher = playerList[i].Name;
    teamList.CatcherSalary = playerList[i].Salary;
    teamList.CatcherVorp = playerList[i].Vorp;
    }
    //teamList.Catcher = playerList[i].Name;
    //teamList.CatcherSalary = playerList[i].Salary;
    //teamList.CatcherVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "1b":
    if(teamList.FirstBase === undefined)
    {teamList.FirstBase = playerList[i].Name;
    teamList.FirstBaseSalary = playerList[i].Salary;
    teamList.FirstBaseVorp = playerList[i].Vorp;
    }
    else if(teamList.FirstBaseVorp < playerList[i].Vorp)
    {
        teamList.FirstBase = playerList[i].Name;
    teamList.FirstBaseSalary = playerList[i].Salary;
    teamList.FirstBaseVorp = playerList[i].Vorp;
    }
    //teamList.FirstBase = playerList[i].Name;
    //teamList.FirstBaseSalary = playerList[i].Salary;
    //teamList.FirstBaseVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "2b":
    if(teamList.SecondBase === undefined)
    {teamList.SecondBase = playerList[i].Name;
    teamList.SecondBaseSalary = playerList[i].Salary;
    teamList.SecondBaseVorp = playerList[i].Vorp;
    }
    else if(teamList.SecondBaseVorp < playerList[i].Vorp)
    {
        teamList.SecondBase = playerList[i].Name;
    teamList.SecondBaseSalary = playerList[i].Salary;
    teamList.SecondBaseVorp = playerList[i].Vorp;
    }
    //teamList.SecondBase = playerList[i].Name;
    //teamList.SecondBaseSalary = playerList[i].Salary;
    //teamList.SecondBaseVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "3b":
    if(teamList.ThirdBase === undefined)
    {teamList.ThirdBase = playerList[i].Name;
    teamList.ThirdBaseSalary = playerList[i].Salary;
    teamList.ThirdBaseVorp = playerList[i].Vorp;
    }
    else if(teamList.ThirdBaseVorp < playerList[i].Vorp)
    {
        teamList.ThirdBase = playerList[i].Name;
    teamList.ThirdBaseSalary = playerList[i].Salary;
    teamList.ThirdBaseVorp = playerList[i].Vorp;
    }
    //teamList.ThirdBase = playerList[i].Name;
    //teamList.ThirdBaseSalary = playerList[i].Salary;
    //teamList.ThirdBaseVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "ss":
    if(teamList.ShortStop === undefined)
    {teamList.ShortStop = playerList[i].Name;
    teamList.ShortStopSalary = playerList[i].Salary;
    teamList.ShortStopVorp = playerList[i].Vorp;
    }
    else if(teamList.ShortStopVorp < playerList[i].Vorp)
    {
        teamList.ShortStop = playerList[i].Name;
    teamList.ShortStopSalary = playerList[i].Salary;
    teamList.ShortStopVorp = playerList[i].Vorp;
    }
    //teamList.ShortStop = playerList[i].Name;
    //teamList.ShortStopSalary = playerList[i].Salary;
    //teamList.ShortStopVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "lf":
    if(teamList.LeftField === undefined)
    {teamList.LeftField = playerList[i].Name;
    teamList.LeftFieldSalary = playerList[i].Salary;
    teamList.LeftFieldVorp = playerList[i].Vorp;
    }
    else if(teamList.LeftFieldVorp < playerList[i].Vorp)
    {
        teamList.LeftField = playerList[i].Name;
    teamList.LeftFieldSalary = playerList[i].Salary;
    teamList.LeftFieldVorp = playerList[i].Vorp;
    }
    //teamList.LeftField = playerList[i].Name;
    //teamList.LeftFieldSalary = playerList[i].Salary;
    //teamList.LeftFieldVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "cf":
    if(teamList.CenterField === undefined)
    {teamList.CenterField = playerList[i].Name;
    teamList.CenterFieldSalary = playerList[i].Salary;
    teamList.CenterFieldVorp = playerList[i].Vorp;
    }
    else if(teamList.CenterFieldVorp < playerList[i].Vorp)
    {
        teamList.CenterField = playerList[i].Name;
    teamList.CenterFieldSalary = playerList[i].Salary;
    teamList.CenterFieldVorp = playerList[i].Vorp;
    }
    //teamList.CenterField = playerList[i].Name;
    //teamList.CenterFieldSalary = playerList[i].Salary;
    //teamList.CenterFieldVorp = playerList[i].Vorp;
    //teamList.SalaryTotal += playerList[i].Salary;
    //teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "rf":
    if(teamList.RightField === undefined)
    {teamList.RightField = playerList[i].Name;
    teamList.RightFieldSalary = playerList[i].Salary;
    teamList.RightFieldVorp = playerList[i].Vorp;
    }
    else if(teamList.RightFieldVorp < playerList[i].Vorp)
    {
        teamList.RightField = playerList[i].Name;
    teamList.RightFieldSalary = playerList[i].Salary;
    teamList.RightFieldVorp = playerList[i].Vorp;
    }
    //teamList.RightField = playerList[i].Name;
    //teamList.RightFieldSalary = playerList[i].Salary;
    //teamList.RightFieldVorp= playerList[i].Vorp;
    //teamList.SalaryTotal = teamList.RightFieldSalary;
    //teamList.VorpTotal = playerList[i].Vorp;
    break;
  default:
    console.log("There's no way you can get here. Every player has a position.");
}

    teamList.SalaryTotal = teamList.LeftFieldSalary + teamList.CenterFieldSalary + teamList.RightFieldSalary + teamList.ShortStopSalary+ teamList.ThirdBaseSalary + teamList.SecondBaseSalary + teamList.FirstBaseSalary + teamList.PitcherSalary + teamList.CatcherSalary;
    teamList.VorpTotal = teamList.LeftFieldVorp + teamList.CenterFieldVorp + teamList.RightFieldVorp + teamList.ShortStopVorp + teamList.ThirdBaseVorp + teamList.SecondBaseVorp + teamList. FirstBaseVorp + teamList.CatcherVorp + teamList.PitcherVorp;         
}
var playerList = [];
/*
for(var i = 0; i < arr2.length; i++)
{
    addPlayer(arr2[i][0],arr2[i][2],arr2[i][3], "No Vorp");
}
for(var i = 0; i < arr4.length; i++)
{
	addPlayer(arr4[i][1], arr4[i][3], "No Salary", arr4[i][16]);
}
*/
/*function changeToLowerCase(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        arr[]
    }
}*/
/*var inBothCount = 0;
for(var i = 0; i < arr4.length; i++)
{
    //arr4[i][1] = arr4[i][1].toLowerCase();
   //document.getElementById("results").value += arr4[i][1];
//}
for(var j = 0; j < arr2.length; j++)
{
    if(arr4[i][1] === arr2[j][0])
        {   //document.getElementById("results").value += arr4[i][1];
            //document.getElementById("results").value += arr2[j][0];
    inBothCount += 1;
}
    //arr2[j][0] = arr2[j][0].toLowerCase();
    //document.getElementById("results").value += arr2[j][0];
}
}*/
//document.getElementById("results").value += inBothCount;
for(var i = 0; i < arr4.length; i++)
{
    //arr4[i][1] = arr4[i][1].toLowerCase();
    //document.getElementById("results").value += arr4[i][1];
    for(var j = 0; j < arr2.length; j++)
    {
        //arr2[j][0] = arr2[j][0].toLowerCase();
        //document.getElementById("results").value += arr2[j][0];
        if(arr4[i][1] === arr2[j][0])
        {
            playerList.push(addPlayer(arr4[i][1], arr4[i][3], arr2[j][3], arr4[i][16]));// I changed position from arr2[j][2] to arr4[i][3]. This way, we pull position from the vorp data instead of the salary data.
            
        }
    }
}

//playerList.push(players["Matt Duffy"]);
//playerList.push(players["Josh Hamilton"]);


//document.getElementById("results").value = newData; 

for(i=0 ; i< playerList.length; i++){
    playerList[i].Vorp = Number(playerList[i].Vorp);
    playerList[i].Salary = Number((playerList[i].Salary).slice(1).replace(/,/g,''));
    addPlayerToTeam(playerList, i); //This just adds players until the end of the list. So, the last of each position should be filled
//document.getElementById("results").value += Number(playerList[i].Vorp) + ' ' + Number((playerList[i].Salary).slice(1).replace(/,/g,'')) + '\n' ;
}
teamList.SalaryTotal = teamList.PitcherSalary;
teamList.SalaryTotal += teamList.CatcherSalary;
teamList.SalaryTotal += teamList.FirstBaseSalary;
teamList.SalaryTotal += teamList.SecondBaseSalary;
teamList.SalaryTotal += teamList.ThirdBaseSalary;
teamList.SalaryTotal += teamList.ShortStopSalary;
teamList.SalaryTotal += teamList.LeftFieldSalary;
teamList.SalaryTotal += teamList.RightFieldSalary;
teamList.SalaryTotal += teamList.CenterFieldSalary;
teamList.VorpTotal = teamList.PitcherVorp;
teamList.VorpTotal += teamList.CatcherVorp;
teamList.VorpTotal += teamList.FirstBaseVorp;
teamList.VorpTotal += teamList.SecondBaseVorp;
teamList.VorpTotal += teamList.ThirdBaseVorp;
teamList.VorpTotal += teamList.ShortStopVorp;
teamList.VorpTotal += teamList.LeftFieldVorp;
teamList.VorpTotal += teamList.RightFieldVorp;
teamList.VorpTotal += teamList.CenterFieldVorp;
//document.getElementById("results").value = teamList.SalaryTotal;
//document.getElementById("results").value += teamList.VorpTotal;
//These all test and work except the last two. I think because they don't get reset and may be getting increased to too big of a number.

document.getElementById("results").value += teamList.Pitcher;
document.getElementById("results").value += ' ' + teamList.PitcherVorp;
document.getElementById("results").value += ' ' + teamList.PitcherSalary + '\n\n';
document.getElementById("results").value += teamList.Catcher;
document.getElementById("results").value += ' ' + teamList.CatcherVorp;
document.getElementById("results").value += ' ' + teamList.CatcherSalary + '\n\n';
document.getElementById("results").value += teamList.FirstBase;
document.getElementById("results").value += ' ' + teamList.FirstBaseVorp;
document.getElementById("results").value += ' ' + teamList.FirstBaseSalary + '\n\n';
document.getElementById("results").value += teamList.SecondBase;
document.getElementById("results").value += ' ' + teamList.SecondBaseVorp;
document.getElementById("results").value += ' ' + teamList.SecondBaseSalary + '\n\n';
document.getElementById("results").value += teamList.ThirdBase;
document.getElementById("results").value += ' ' + teamList.ThirdBaseVorp;
document.getElementById("results").value += ' ' + teamList.ThirdBaseSalary + '\n\n';
document.getElementById("results").value += teamList.ShortStop;
document.getElementById("results").value += ' ' + teamList.ShortStopVorp;
document.getElementById("results").value += ' ' + teamList.ShortStopSalary + '\n\n';
document.getElementById("results").value += teamList.LeftField;
document.getElementById("results").value += ' ' + teamList.LeftFieldVorp;
document.getElementById("results").value += ' ' + teamList.LeftFieldSalary + '\n\n';
document.getElementById("results").value += teamList.CenterField;
document.getElementById("results").value += ' ' + teamList.CenterFieldVorp;
document.getElementById("results").value += ' ' + teamList.CenterFieldSalary + '\n\n';
document.getElementById("results").value += teamList.RightField;
document.getElementById("results").value += ' ' + teamList.RightFieldVorp;
document.getElementById("results").value += ' ' + teamList.RightFieldSalary + '\n\n';
document.getElementById("results").value += teamList.SalaryTotal + '\n\n';
document.getElementById("results").value += teamList.VorpTotal;

/*document.getElementById("results").value += players["matt duffy"].Vorp;
document.getElementById("results").value += players["matt duffy"].Salary;
document.getElementById("results").value += players["jung ho kang"].Vorp;
document.getElementById("results").value += players["jung ho kang"].Salary;
document.getElementById("results").value += players["joc pederson"].Salary;
document.getElementById("results").value += players["joc pederson"].Vorp + players["joc pederson"].Vorp;
document.getElementById("results").value += '\n\n' + players["joc pederson"].Position;
document.getElementById("results").value += players["matt duffy"].Position;
document.getElementById("results").value += players["jung ho kang"].Position;*/
//document.getElementById("results").value = splitData; //logs //data to the textarea
});
