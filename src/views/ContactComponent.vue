<template>


  <div class="form-group" method ="post">
    <label>Nom</label>
    <input type="text"
           id="nom"
           v-model.lazy="userData.nom">
  <label for="email">Votre Email</label>
      <input type="text"
             id="email"
             v-model="userData.email">
    <label>Message</label>
    <textarea id="message"
              rows="5"
              v-model="message"></textarea>
   <br>        
   <button type ="submit" class="btn btn-primary"
        @submit.prevent="sendEmail">Envoyer
</button>
  </div>
</template>

<script>

import axios from 'axios';
export default {
  name : 'ContactComponent',
  data (){
    return {
                userData: {
                    email: '',
                    nom: '',
                    
                },

               message: 'Décrivez votre projet',}
           },
           
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'user_TVVQNSc9x5ctBggGKepCg')
        .then((result) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    
      }
  }
}
</script>
