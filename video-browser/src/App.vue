<template>
  <div class="container" id="app">
    <SearchBar @termChange="onTermChange" />
    <div class="row">
      <div class="col-md-8">
        <VideoDetail :video="selectedVideo" />
      </div>
      <div class="col-md-4">
        <VideoList :videos="videos" @videoSelect="onVideoSelect" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar/SearchBar'
import VideoList from './components/VideoList/VideoList'
import VideoDetail from './components/VideoDetail/VideoDetail'

const API_KEY = 'AIzaSyCFHT6PyAQNQliDi9J9ximN4C3uTJNad7Y'

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data () {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  methods: {
    onVideoSelect (video) {
      this.selectedVideo = video
    },
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
