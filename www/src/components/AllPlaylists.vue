<template>
  <div class="all-playlists">
    <h4>All Playlists</h4>
    <ul class="playlists">
      <li class="playlist" v-for="list in allPlaylists" :key="list._id" @click="setActivePlaylist(list)">{{list.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'all-playlists',
    mounted() {
      this.$store.dispatch('getAllPlaylists')
    },
    computed: {
      allPlaylists() {
        return this.$store.state.allPlaylists
      }
    },
    methods: {
      setActivePlaylist(list){
        this.$store.dispatch('selectActivePlaylist', list)
      }
    }
  }

</script>

<style>


</style>
