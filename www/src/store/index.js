import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let itunesApi = axios.create({
  baseURL: 'https://itunes.apple.com/search?media=music&term=',
  timeout: 3000
})

let myTunes = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    searchResults: [], // song objects from itunes
    activePlaylist: {
      title: 'demo',
      songs: [{
        title: 'demo song'
      }]
    }, // my songs 
    allPlaylists: []
  },
  mutations: {
    setSearchResults(state, songs) {
      state.searchResults = songs
    },
    setActivePlaylist(state, playlist) {
      state.activePlaylist = playlist
    },
    setAllPlaylists(state, playlists) {
      state.allPlaylists = playlists
    },
    addPlaylist(state, playlist) {
      state.allPlaylists.push(playlist)
    }
  },

  actions: {

    getSearchResults({
      dispatch,
      commit
    }, query) {
      itunesApi.get(query)
        .then(res => {
          let songList = res.data.results.map(song => {
            return {
              title: song.trackName,
              albumArt: song.artworkUrl100 ? song.artworkUrl100.replace('100x100', '250x250') : '//placehold.it/250x250',
              artist: song.artistName,
              album: song.collectionName,
              price: song.collectionPrice,
              preview: song.previewUrl
            };
          })
          commit('setSearchResults', songList)
        })
    },

    getAllPlaylists({
      commit,
      dispatch
    }) {
      myTunes.get('playlists')
        .then(res => {
          commit('setAllPlaylists', res.data)
        })
    },

    createPlaylist({
      dispatch,
      commit
    }, playlist) {
      myTunes.post('playlists', playlist)
        .then(res => {
          commit('addPlaylist', playlist)
        })
    },

    selectActivePlaylist({
      commit,
      dispatch
    }, list) {
      commit('setActivePlaylist', list)
    },

    addSongToActivePlaylist({
      commit,
      dispatch,
      state
    }, song) {
      if (!state.activePlaylist._id) {
        return dispatch('showError', 'please select a playlist')
      }

      myTunes.put('playlists/' + state.activePlaylist._id + '/songs', song)
        .then(res => {
          commit('setActivePlaylist', res.data)
        })

    },

    removeSongFromPlaylist({
      commit,
      dispatch,
      state
    }, song) {
      myTunes.delete('/playlists/' + state.activePlaylist._id + '/songs/' + song._id)
        .then(res => {
          commit('setActivePlaylist', res.data)
        })
    },

    showError({
      commit
    }, msg) {
      console.log(msg)
    }

  }
})
