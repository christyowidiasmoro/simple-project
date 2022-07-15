<template>
  <div>
    <v-container>
    <center class="ma-1">
      <v-text-field label="Some Variable" v-model="someVariable" />
    </center>
   </v-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data: function () {
    return {
      someVariable: 0
    }
  },
  methods: {
    testMethod: function () {
      // nothing happens here

    }
  },
  created () {
    // nothing happens here

  },
  computed: {
    testComputed: function () {
      // nothing happens here
      return 0
    }
  },
  watch: {
    someVariable: {
      immediate: true,
      handler: function () {
        // nothing happens here

      }
    }
  }
}
</script>

<style scoped>
.v-text-field{
      width: 400px;
}
</style>
