var http = require('http');

module.exports = function(app){
/**
 * Get port from environment and store in Express.
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/*
*  Create server
*/
var server = http.createServer(app);
server.listen(port);
console.log("server is listening on port 3000");

}
