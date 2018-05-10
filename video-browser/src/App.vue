<template>
  <div class="container" id="app">
    <SearchBar @termChange="onTermChange" />
    <VideoList :videos="videos" />
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar'
import VideoList from './components/VideoList/VideoList'

const API_KEY = 'AIzaSyCFHT6PyAQNQliDi9J9ximN4C3uTJNad7Y'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList
  },
  data () {
    return {
      videos: []
    }
  },
  methods: {
    onTermChange (searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then(response => {
        this.videos = response.data.items
      })
    }
  }
}

</script>

<style lang="scss" src="./App.scss"></style>
