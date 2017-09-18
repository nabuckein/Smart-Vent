var particle = new Particle();
    var token;
    var tempInC = [0,0,0,0];
    var humidity = 0;
    var count = 0;
    var currentTimeAndDateString = new Date();

    particle.login({username: 'pauri@hotmail.com', password: 'Nabuckein1984'}).then(
      function(data){
        token = data.body.access_token;
        //document.getElementById('loginResponse').innerHTML = data.body.access_token;    
      },
      function(err) {
        //document.getElementById('loginResponse').innerHTML = 'API call completed on promise fail: ' + err;
        console.log('API call completed on promise fail: ', err);
      }
    );

    
    //get the temperature in C every 60 seconds
    setInterval(function(){
      particle.getVariable({ deviceId: '2b0034000447343337373737', name: 'tempInC', auth: '473515c4ba9df79ba465db1bae223767e97b6a64 ' }).then(function(data) {
      var timeArr = [];
      var date = new Date();
      var currentHour = date.getHours();
      var currentMinutes = date.getMinutes();
      var currentDate = date.getDate();
      var currentMonth = date.getMonth();
      var currentYear = date.getFullYear();
      currentTimeAndDateString = new Date(currentYear,currentMonth,currentDate,currentHour,currentMinutes,0);
      //var currentTimeString = new Date();
      console.log("TIME: " + currentHour + ":" + currentMinutes);
      console.log("DATE: " + currentMonth + '/' + currentDate + '/' + currentYear);
      console.log(currentTimeAndDateString.toDateString());
      console.log(currentTimeAndDateString.toTimeString());
      timeArr.push()
      console.log('Device variable retrieved successfully:', data);
      tempInC.shift();
      tempInC.push(data.body.result);
      document.getElementById('tempSetpoint').innerHTML = data.body.result;
      
      
      
      }, function(err) {
        console.log('An error occurred while getting attrs:', err);
      });


      //get the Humidity
      particle.getVariable({ deviceId: '2b0034000447343337373737', name: 'humidity', auth: '473515c4ba9df79ba465db1bae223767e97b6a64' }).then(function(data) {
      //console.log('Device variable retrieved successfully:', data);
      humidity = data.body.result;
      //console.log(humidity);
      document.getElementById('humiditySetpoint').innerHTML = humidity;

      
      }, function(err) {
        console.log('An error occurred while getting attrs:', err);
      });

      count++;

      console.log("COUNT: " + count);


      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      console.log(tempInC);


      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Setpoint', 'Master Bedroom'],
          ['2004',  20,      tempInC[0]],
          ['2005',  25,      tempInC[1]],
          ['2006',  20,      tempInC[2]],
          ['2007',  15,      tempInC[3]]
        ]);

        var options = {
          titleTextStyle: {color: 'white'},
          title: currentTimeAndDateString.toDateString(),
          curveType: 'function',
          legend: { position: 'bottom', textStyle: { color: 'white' }},
          backgroundColor: '#22aaff',
          vAxis:{ textStyle: {color: 'white'}},
          hAxis:{ textStyle: {color: 'white'}}
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

        chart.draw(data, options);
      }


    },2000);
    
      