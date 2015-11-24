var computeButton = document.getElementById("computeButton");
var data; 
computeButton.addEventListener("click", function() {
	          data = document.getElementById("player-data").value;
	      

var splitData = data.split("***");

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
	//return players[name];
}

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
  
    Pitcher: undefined,
    PitcherSalary: 0,
    Catcher: undefined,
    CatcherSalary: 0,
    FirstBase: undefined,
    FirstBaseSalary: 0,
    SecondBase: undefined,
    SecondBaseSalary: 0,
    ThirdBase: undefined,
    ThirdBaseSalary: 0,
    ShortStop: undefined,
    ShortStopSalary: 0,
    LeftField: undefined,
    LeftFieldSalary: 0,
    CenterField: undefined,
    CenterFieldSalary: 0,
    RightField: undefined,
    RightFieldSalary: 0,
    SalaryTotal: 0,
    VorpTotal: 0
};

//This function adds a player to the teamObject
//A switch statement is used. 
//Depending on the position of the player, it enters a specific case
//In each case, a specific position is filled, along with the salary
//The SalaryTotal and VorpTotal are also increased.
function addPlayerToTeam(playerList, i)//Realistically, you pass a letter then use that as the player object(name, position, salary, vorp)
{
    
        switch (playerList[i].Position) {
  case "P":
    teamList.Pitcher = playerList[i].Name;
    teamList.PitcherSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "C":
    teamList.Catcher = playerList[i].Name;
    teamList.CatcherSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "1B":
    teamList.FirstBase = playerList[i].Name;
    teamList.FirstBaseSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "2B":
    teamList.SecondBase = playerList[i].Name;
    teamList.SecondBaseSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "3B":
    teamList.ThirdBase = playerList[i].Name;
    teamList.ThirdBaseSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "SS":
    teamList.ShortStop = playerList[i].Name;
    teamList.ShortStopSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "LF":
    teamList.LeftField = playerList[i].Name;
    teamList.LeftFieldSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "CF":
    teamList.CenterField = playerList[i].Name;
    teamList.CenterFieldSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  case "RF":
    teamList.RightField = playerList[i].Name;
    teamList.RightFieldSalary = playerList[i].Salary;
    teamList.SalaryTotal += playerList[i].Salary;
    teamList.VorpTotal += playerList[i].Vorp;
    break;
  default:
    console.log("There's no way you can get here. Every player has a position.");
}

    
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
for(var i = 0; i < arr4.length; i++)
{
    for(var j = 0; j < arr2.length; j++)
    {
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
//These all test and work except the last two. I think because they don't get reset and may be getting increased to too big of a number.
document.getElementById("results").value = teamList.Pitcher;
document.getElementById("results").value += teamList.PitcherSalary + '\n\n';
document.getElementById("results").value += teamList.Catcher;
document.getElementById("results").value += teamList.CatcherSalary + '\n\n';
document.getElementById("results").value += teamList.FirstBase;
document.getElementById("results").value += teamList.FirstBaseSalary + '\n\n';
document.getElementById("results").value += teamList.SecondBase;
document.getElementById("results").value += teamList.SecondBaseSalary + '\n\n';
document.getElementById("results").value += teamList.ThirdBase;
document.getElementById("results").value += teamList.ThirdBaseSalary + '\n\n';
document.getElementById("results").value += teamList.ShortStop;
document.getElementById("results").value += teamList.ShortStopSalary + '\n\n';
document.getElementById("results").value += teamList.LeftField;
document.getElementById("results").value += teamList.LeftFieldSalary + '\n\n';
document.getElementById("results").value += teamList.CenterField;
document.getElementById("results").value += teamList.CenterFieldSalary + '\n\n';
document.getElementById("results").value += teamList.RightField;
document.getElementById("results").value += teamList.RightFieldSalary + '\n\n';
document.getElementById("results").value += teamList.SalaryTotal + '\n\n';
document.getElementById("results").value += teamList.VorpTotal;
/*
document.getElementById("results").value = players["Matt Duffy"].Vorp;
document.getElementById("results").value += players["Matt Duffy"].Salary;
document.getElementById("results").value += players["Jung Ho Kang"].Vorp;
document.getElementById("results").value += players["Jung Ho Kang"].Salary;
document.getElementById("results").value += players["Joc Pederson"].Salary;
document.getElementById("results").value += players["Joc Pederson"].Vorp + players["Joc Pederson"].Vorp;
document.getElementById("results").value += '\n\n' + players["Joc Pederson"].Position;
document.getElementById("results").value += players["Matt Duffy"].Position;
document.getElementById("results").value += players["Jung Ho Kang"].Position;*/
//document.getElementById("results").value = splitData; //logs //data to the textarea
});
