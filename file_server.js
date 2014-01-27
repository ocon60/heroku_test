var express = require('express'),
        app = express();


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);

console.log("App listening on port 5000");
var d = new Date();
console.log("Date: "+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDay()+" "+d.get);