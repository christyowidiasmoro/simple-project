<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Contact />
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'

export default {
  name: 'About',
  components: { Contact }
}
</script>
