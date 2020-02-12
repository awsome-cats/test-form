<template>
  <form @submit.prevent="sendForm" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
     <p class="hidden" style="display: none;">
        <label>Don't fill this out if you're human:
          <input name="bot-field"/>
        </label>
      </p>
      <p>
        <label>Your Name: <input v-model="form.name"     type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input v-model="form.email"      type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea v-model="form.message"    name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
</form>
<!------
   netlify
   data-netlify="true"
   data-netlify-honeypot="bot-field"
   name属性
   formのmethod

-------->
</template>

<script>
import axios from 'axios'
export default {
   data() {
      return {
         form: {
            name: '',
            email: '',
            message: ''
         }
      }
   },
   methods: {
      encode(data) {
         return Object.keys(data)
         .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
         .join('&')
      },
      sendForm() {
         const axiosConfig = {
            header:{
               "Content-Type": "application/x-www-form-urlencoded"
            }
         };
         axios.post("/", this.encode({
               "form-name": "contact",
               ...this.form
            }), axiosConfig)
         
         .then(() => console.log("successfully"))
         .catch((e) => console.error(e))
      }
   }
}
</script>

<style scoped>

</style>