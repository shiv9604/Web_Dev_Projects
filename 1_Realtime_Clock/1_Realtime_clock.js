// Realtime clock in javascript
setInterval(()=> {
    var td = new Date();
    var hr = td.getHours();
    var min = td.getMinutes();
    var sec = td.getSeconds();
    var dd = td.getDate();
    var mm = td.getMonth();
    var yy = td.getFullYear();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var date = td.toLocaleDateString(undefined,options)
// var date = dd + "/" + mm + "/" + yy
var time = hr + ":" + min + ":" + sec;
var dateTime = time + "  <br>  " + date;

document.getElementById('time').innerHTML = dateTime
},1000);
