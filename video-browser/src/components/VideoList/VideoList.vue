<template>
  <ul class="video-list list-group">
    <VideoListItem
      v-for="video in videos"
      :key="video.etag"
      :video="video"
      @videoSelect="onVideoSelect" />
  </ul>
</template>

<script>
import VideoListItem from '@/components/VideoListItem/VideoListItem'

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: Array
  },
  methods: {
    onVideoSelect (video) {
      this.$emit('videoSelect', video)
    }
  }
}
</script>

<style lang="scss" src="./VideoList.scss"></style>
