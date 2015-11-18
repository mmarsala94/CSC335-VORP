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

function splitData (dataArr) // will want to insert splitData[0] || splitData[1]
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

var newData = [];
newData = splitData(splitData);


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

var playerList = [];

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
            playerList.push(addPlayer(arr4[i][1], arr2[j][2], arr2[j][3], arr4[i][15]));
            
        }
    }
}

//playerList.push(players["Matt Duffy"]);
//playerList.push(players["Josh Hamilton"]);


document.getElementById("results").value = newData; 

/*for(i=0 ; i< playerList.length; i++){
document.getElementById("results").value += playerList[i].Vorp + ' ' + playerList[i].Salary +'\n';
}*/


//document.getElementById("results").value = splitData; //logs //data to the textarea
});
