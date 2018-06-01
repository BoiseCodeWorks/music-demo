var router = require('express').Router()
var Playlist = require('../models/playlist')



//Get & Get by ID
router.get('/api/playlists/:id?', (req, res) => {
  if (req.params.id) { ///If passed id find by id
    Playlist.findById(req.params.id)
      .then(playlist => {
        return res.send(playlist)
      })
      .catch(err => {
        return res.status(404).send({
          'error': 'No playlist at that Id'
        })
      })
  }
  //If no id find all
  Playlist.find({})
    .then(playlists => {
      return res.send(playlists)
    })
    .catch(err => {
      return res.status(404).send({
        'error': err
      })
    })
})

//Post CREATE NEW PLAYLIST
router.post('/api/playlists', (req, res) => {
  Playlist.create(req.body)
    .then(newPlaylist => {
      return res.send(newPlaylist)
    })
    .catch(err => {
      return res.status(400).send(err)
    })
})

//Put

//Add a single song -- REQ.BODY will be a song object
router.put('/api/playlists/:id/songs', (req, res) => {
  Playlist.findById(req.params.id)
    .then(function (playlist) {
      playlist.songs.addToSet(req.body)
      playlist.save()
      res.send(playlist)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

router.delete('/api/playlists/:id/songs/:songId', (req, res) => {
  Playlist.findById(req.params.id)
    .then(function (playlist) {
      let song = playlist.songs.id(req.params.songId)
      if (song) {
        song.remove()
      }
      playlist.save().then(err => {
        res.send(playlist)
      })
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//Update entire song array from entire playlist
router.put('/api/playlists/:id', (req, res) => {
  Playlist.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(playlist => {
      res.send(playlist)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//Delete
router.delete('/api/playlists/:id', (req, res) => {
  Playlist.findByIdAndRemove(req.params.id)
    .then(() => {
      res.send("Successfully deleted")
    })
    .catch(err => {
      res.send(err)
    })
})

module.exports = {
  router
}