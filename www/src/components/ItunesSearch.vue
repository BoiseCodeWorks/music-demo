<template>
  <div class="itunes-search">
    <form @submit.prevent="search">
      <input type="text" v-model="query">
      <button type="submit"><i class="fa fa-fw fa-search"></i></button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'itunes-search',
    data() {
      return {
        query: ''
      }
    },
    computed: {},
    methods: {
      search(){
        this.$store.dispatch('getSearchResults', this.query)
      }
    }
  }

</script>

<style>


</style>
