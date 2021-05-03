const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const lyricsFinder = require('lyrics-finder');
const bodyParser = require('body-parser');

const app = new express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// routes
app.get('/lyrics', async (req,res) => {
  const lyrics = await lyricsFinder(req.query.artist, req.query.track) || "No Lyrics Found"

  res.json({
    lyrics
  })
})
app.post('/login', (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    clientId: 'f016625a8e2e4936a3cb2761f9b4f1ef',
    clientSecret: "49ff9fc6eca4423998ebf559566b11fe",
    redirectUri: 'http://localhost:3000',
  })

  spotifyApi.authorizationCodeGrant(code)
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      refreshToken: data.body.refresh_token,
      expiresIn: data.body.expires_in,
    })
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(400);
  })
})

app.post('/refresh', (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    clientId: 'f016625a8e2e4936a3cb2761f9b4f1ef',
    clientSecret: "49ff9fc6eca4423998ebf559566b11fe",
    redirectUri: 'http://localhost:3000',
    refreshToken
  })
  spotifyApi.refreshAccessToken()
  .then(data => {
    res.json({
      accessToken: data.body.access_token,
      expiresIn: data.body.expires_in
    })
  })
  .catch((err) => {
    res.sendStatus(400);
  })
})

app.listen(process.env.PORT || 3001);
