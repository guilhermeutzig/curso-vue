<template>
  <div class="dropper">
    <input
      type="file"
      @change="uploadImages($event.target.files)"
      multiple
      accept="image/*">
    <span>Drag files here</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>
