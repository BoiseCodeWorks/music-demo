<template>
  <div>
    <itunes-search></itunes-search>
    <search-results></search-results>
    <user-playlist></user-playlist>
    <all-playlists></all-playlists>
  </div>
</template>

<script>
  import itunesSearch from './ItunesSearch'
  import searchResults from './SearchResults'
  import userPlaylist from './UserPlaylist'
  import allPlaylists from './AllPlaylists'
  export default {
    name: 'HelloWorld',
    components: {
      itunesSearch,
      searchResults,
      userPlaylist,
      allPlaylists
    },
    data() {
      return {}
    }
  }

</script>
