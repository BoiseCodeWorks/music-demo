var express = require('express')
var bp = require('body-parser')
var app = express()
let server = require('http').createServer(app)
var cors = require('cors')
var port = process.env.PORT  || 3000


var whitelist = ['http://localhost:8080', 'https://music-demo.herokuapp.com'];
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions))

require('./server-assets/db/mlab-config')


app.use(express.static(__dirname + "/../www/dist"))

app.use(bp.json())
app.use(bp.urlencoded({
  extended: true
}))


var playlist = require('./server-assets/routes/playlists')

app.use(playlist.router)



app.get('*', (req, res, next) => {
  res.status(404).send({
    error: 'No matching routes'
  })
})


app.listen(port, () => {
  console.log('server running on port', port)
})