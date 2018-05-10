<template>
  <ul class="video-list list-group">
    <VideoListItem
      v-for="video in videos"
      :key="video.etag"
      :video="video" />
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
  }
}
</script>

<style lang="scss" src="./VideoList.scss"></style>
