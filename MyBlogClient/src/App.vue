<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapActions(['getUserInfo'])
  },
  mounted () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style>
</style>
