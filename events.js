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
  var teamList = {};

  function addPlayer(name, position, salary, vorp) {
    players[name] = {
      Name: name,
      Position: position,
      Salary: salary,
      Vorp: vorp
    };
    return players[name];
  }

  function addTeam(number) {
    teamList[number] = {

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
  }

    var possibleTeams = {};

  function createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams)
  {
    var team = {p[p.length-1], c[c.length-1], first[first.length-1], second[second.length-1], ss[ss.length-1], third[third.length-1], cf[cf.length-1], rf[rf.length-1], lf[lf.length-1]};
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
    if (1b.length > 0)
    {
        1b.pop();
        createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
    }
    if (2b.length > 0)
    {
        2b.pop();
        createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
    }
    if (ss.length > 0)
    {
        ss.pop();
        createTeam(p, c, first, second, ss, third, cf, rf, lf, currentTeams);
    }
    if (3b.length > 0)
    {
        3b.pop();
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
    if (p.lenghth === 0 && c.length === 0 && first.length === 0 && 2b.length === 0 && ss.length === 0 && third.length === 0 && cf.length === 0 && rf.length === 0 && lf.length === 0)
    {
        return team;
    }
  }


  var playerList = [];

  for (var i = 0; i < arr4.length; i++) {
    //arr4[i][1] = arr4[i][1].toLowerCase();
    //document.getElementById("results").value += arr4[i][1];
    for (var j = 0; j < arr2.length; j++) {
      //arr2[j][0] = arr2[j][0].toLowerCase();
      //document.getElementById("results").value += arr2[j][0];
      if (arr4[i][1] === arr2[j][0]) {
        playerList.push(addPlayer(arr4[i][1], arr4[i][3], arr2[j][3], arr4[i][16])); 
      }
    }
  }

  function addPlayerPosition()

  for (i = 0; i < playerList.length; i++) 
  {
    playerList[i].Vorp = Number(playerList[i].Vorp);
    playerList[i].Salary = Number((playerList[i].Salary).slice(1).replace(/,/g, ''));
  }
  var p = [];
  var c = [];
  var totalVorp = [];
  var totalSalary = [];
  /*
  function addTeamm(number,vorpTotal,salaryTotal)
  {
      t[number]= {
          vorpTotal: vorpTotal,
          salaryTotal: salaryTotal
      };
      return t[number];
  }*/

  var pitcherCounter = 1;
  var catcherCounter = 1;

  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].Position === 'p') {
      p[pitcherCounter] = playerList[i];
      pitcherCounter += 1;
    }
    /*if(playerList[i].Position === 'c')
    {
        c[i] = playerList[i];
    }*/

  }
  //document.getElementById("results").value = p[0].Position;

  p[0] = addPlayer('undefined', 'p', 0, 0);
  c[0] = addPlayer('undefined', 'c', 0, 0);

  for (var i = 0; i < playerList.length; i++) {
    if (playerList[i].Position === 'c') {
      c[catcherCounter] = playerList[i];
      catcherCounter += 1;
    }
    /*if(playerList[i].Position === 'c')
    {
        c[i] = playerList[i];
    }*/

  }
  totalCounter = 0;
  var teamListt = [];
  console.log(c);
  for (var i = 0; i < p.length; i++) {
    for (var j = 0; j < c.length; j++) {
      var pitcher = p[i];
      var catcher = c[j];
      //console.log(catcher);
      var pitcherAndCatcher = {
        pitcherName: pitcher.Name,
        catcherName: catcher.Name,
        salaryTotal: pitcher.Salary + catcher.Salary,
        vorpTotal: pitcher.Vorp + catcher.Vorp
      };
      teamListt.push(pitcherAndCatcher);

      //addTeamm(totalCounter, p[i].Vorp + c[i].Vorp, p[i].Salary + c[i].Salary);
      //t[totalCounter].salaryTotal = p[i].Salary + c[j].Salary;
      //t[totalCounter].vorpTotal = p[i].Vorp + c[j].Vorp; YOU REALLY NEED TO GET OBJECT TO WORK. SO YOU CAN HAVE THE PLAYERS AND THEIR SPECIFIC VORPS FILLED IN AS WELL. IN THE END. YOU ARE PRINTING PLAYERS AND TOTAL VORP
      //totalSalary[totalCounter] = p[i].Salary + c[j].Salary;
      //totalVorp[totalCounter] = p[i].Vorp + c[j].Vorp;
      totalCounter += 1;
    }
  }
  //document.getElementById("results").value = totalSalary[0];
  //document.getElementById("results").value += totalVorp[0];

  for (var i = 0; i < teamListt.length; i++) {
    document.getElementById("results").value += teamListt[i].pitcherName;
    //document.getElementById("results").value += totalSalary[i] + ' ' + totalVorp[i] + '\n'; 
    //document.getElementById("results").value += t[i] + ' ';
    //document.getElementById("results").value += t[i].Salary + '\n';
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

});
