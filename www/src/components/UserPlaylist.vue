<template>
    <div class="user-playlist">
      <h4>My Tunes: {{playlist.title}}</h4>
      <ul>
        <li v-for="song in playlist.songs">
          {{song.title}} <i class="fa fa-fw fa-minus-square action" @click="removeSongFromPlaylist(song)"></i>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
      name: 'user-playlist',
      computed: {
        playlist(){
          return this.$store.state.activePlaylist
        }
      },
      methods: {
        removeSongFromPlaylist(song){
          this.$store.dispatch('removeSongFromPlaylist', song)
        }
      }
    }
  
  </script>
  
  <style>
  
  
  </style>
  