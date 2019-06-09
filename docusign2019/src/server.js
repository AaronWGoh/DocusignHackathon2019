import * as mm from '@magenta/music';
var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function(req, res) {
  res.json('you did it');
});

app.get('/uploadSound', function(req, res) {
    console.log('received something');
    res.send('uploadSound');
}

//const model = new mm.MusicVAE('/path/to/checkpoint');
const player = new mm.Player();

app
  .initialize()
  .then(() => app.sample(1))
  .then(samples => {
    player.resumeContext();
    player.start(samples[0])
  });

