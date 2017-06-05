var express     = require('express');
var listen_port = process.env.PORT || 3000;
var dev         = process.env.DEV;
var app         = express();
var morgan      = require('morgan');

app.use(morgan("dev"));
app.use(express.static("./static"));
app.listen(listen_port, function() {
    console.log("All right ! I am alive at Port " + listen_port + ".");
  });
