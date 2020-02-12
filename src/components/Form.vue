<template>
  <form name="contact" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input v-model="form.name" type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input v-model="form.email" type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea v-model="form.message" name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</template>

<script>
export default {
   data() {
      return {
         form: {
            name: '',
            email: '',
            message: ''
         }
      }
   }
}
</script>

<style scoped>

</style>