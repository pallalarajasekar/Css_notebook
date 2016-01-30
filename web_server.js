/**
 * Created by harinaths on 25/1/16.
 */
var config = {
    port: 8966,
    viewPath: __dirname + '/views', //Template Engine
    publicPath: __dirname + '/public', //Public Folder (Javascript, CSS)
    sessionStore: true,
    socketIO: true
}

var XPressIO = require('xpressio');
var xpress = new XPressIO(config).start();
var app = xpress.app;
var io = xpress.io;


app.get('/', function(req, res){
    res.render("index")
})

app.get('/beginner/apply', function(req, res){
    res.render("beginner/apply")
})
app.get('/beginner/beginner', function(req, res) {
    res.render("beginner/beginner")
})

app.get('/intermediate/intermediate', function(req, res) {
    res.render("intermediate/intermediate")
})

app.get('/intermediate/intermediate1', function(req, res) {
    res.render("intermediate/intermediate1")
})

app.get('/Advanced/advanced', function(req, res) {
    res.render("Advanced/advanced")
})
app.get('/Advanced/htmldogexradius', function(req, res) {
    res.render("Advanced/htmldogexradius")
})

app.get('/Advanced/position', function(req, res) {
    res.render("Advanced/position")
})
app.get('/Advanced/selector', function(req, res) {
    res.render("Advanced/selector")
})
app.get('/Advanced/advancedcolors', function(req, res) {
    res.render("Advanced/advancedcolors")
})

app.get('/Advanced/media', function(req, res) {
    res.render("Advanced/media")
})
app.get('/Advanced/transform', function(req, res) {
    res.render("Advanced/transform")
})