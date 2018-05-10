<template>
  <div class="search-bar">
    <input type="text" @change="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: function (event) {
      this.$emit('termChange', event.target.value)
    }
  }
}
</script>

<style lang="scss" src="./SearchBar.scss"></style>
