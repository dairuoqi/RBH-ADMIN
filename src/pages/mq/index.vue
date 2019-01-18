<template>
  <d2-container :filename="filename">
    <template slot="header">Page 1 header</template>
    <div class='content-div'>
      <iframe :src= url frameborder=0 name="showHere" scrolling=auto style="width:1100px;height:1000px" ></iframe>
    </div>
  </d2-container>
</template>

<script>
export default {
  name: 'generate',
  data () {
    return {
      url: 'http://171.221.228.246:15672',
      filename: __filename
    }
  }
}
</script>

<style lang="scss">
.content-div {
  padding: 5px;
}
</style>
