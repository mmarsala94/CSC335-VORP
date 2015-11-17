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

function addPlayer(name,position,salary,vorp)
{
    players[name]= {
        Position: position,
        Salary: salary,
        Vorp : vorp
    };
}

for(var i = 0; i < arr2.length; i++)
{
    addPlayer(arr2[i][0],arr2[i][2],arr2[i][3], "No Vorp");
}
for(var i = 0; i < arr4.length; i++)
{
	addPlayer(arr4[i][1], arr4[i][3], "No Salary", arr4[i][16]);
}
for(var i = 0; i < arr4.length; i++)
{
    for(var j = 0; j < arr2.length; j++)
    {
        if(arr4[i][1] === arr2[j][0])
        {
            addPlayer(arr4[i][1], arr2[j][2], arr2[j][3], arr4[i][15]);
            
        }
    }
}

//document.getElementById("results").value = splitData; //logs //data to the textarea
//});

document.getElementById("results").value = players["Michael Conforto"].Salary;
document.getElementById("results").value += players["Michael Conforto"].Position;
document.getElementById("results").value += players["Michael Conforto"].Vorp;
document.getElementById("results").value += players["Kris Bryant"].Salary;
document.getElementById("results").value += players["Kris Bryant"].Position;
document.getElementById("results").value += players["Kris Bryant"].Vorp;
document.getElementById("results").value += players["Matt Duffy"].Salary;
document.getElementById("results").value += players["Matt Duffy"].Position;
document.getElementById("results").value += players["Matt Duffy"].Vorp;
document.getElementById("results").value += players["Francisco Lindor"].Salary;
document.getElementById("results").value += players["Francisco Lindor"].Position;
document.getElementById("results").value += players["Francisco Lindor"].Vorp;
document.getElementById("results").value += players["Taylor Featherston"].Salary;
document.getElementById("results").value += players["Taylor Featherston"].Position;
document.getElementById("results").value += players["Taylor Featherston"].Vorp;
document.getElementById("results").value += players["Darin Ruf"].Salary;
document.getElementById("results").value += players["Darin Ruf"].Position;
document.getElementById("results").value += players["Darin Ruf"].Vorp;
});


