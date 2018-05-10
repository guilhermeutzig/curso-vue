<template>
  <div>
    <li class="list-group-item media">
      <img :src="thumbnailUrl" alt="" class="mr-3">
      <div class="media-body">
        {{ videoTitle }}
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object
  },
  computed: {
    thumbnailUrl () {
      return this.video.snippet.thumbnails.default.url
    },
    videoTitle () {
      return this.video.snippet.title
    }
  }
}
</script>
