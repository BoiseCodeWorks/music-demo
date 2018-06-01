<template>
  <div class="search-results">
    <h4>Search Results</h4>
    <ul>
      <li v-for="song in results">
        {{song.title}} <i class="fa fa-fw fa-plus-square action" @click="addSongToActivePlaylist(song)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'search-results',
    computed: {
      results() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      addSongToActivePlaylist(song){
        this.$store.dispatch('addSongToActivePlaylist', song)
      }
    }
  }

</script>

<style>
.action{
  cursor: pointer;
  opacity: .7;
  transition: all .3s linear;
}

.action:hover{
  opacity: 1;
}


</style>
