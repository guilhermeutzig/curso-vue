<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <img v-for="image in allImages" :key="image.title" :src="image.link">
    </div>
    <div v-else>
      <h1>Log in to get started</h1>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created () {
    this.fetchImages()
    this.allImages()
  }
}
</script>
