<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Contactez nous !!</div>
          <div class="card-body">
            <form @submit.prevent="formSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  v-model="fields.name"
                />
                <div v-if="errors && errors.name" class="text-danger">
                  {{ errors.name[0] }}
                </div>
              </div>

              <div class="form-group">
                <label for="email">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  v-model="fields.email"
                />
                <div v-if="errors && errors.email" class="text-danger">
                  {{ errors.email[0] }}
                </div>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  v-model="fields.message"
                ></textarea>
                <div v-if="errors && errors.message" class="text-danger">
                  {{ errors.message[0] }}
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Send message
              </button>

              <div v-if="success" class="alert alert-success mt-3">
                Message Envoyer!
              </div>
            </form>
            <strong>Output:</strong>
            <pre>
                        {{ output }}
                        </pre
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      fields: {},
      errors: {},
      success: false,
      loaded: true,
      output: ""
    };
  },
  methods: {
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;
      if (this.loaded) {
        this.loaded = false;
        this.success = false;
        this.errors = {};
        axios
          .post(
            " https://api.mailgun.net/v3/sandboxb3df6275867042519ae82b90e297ddc8.mailgun.org",
            this.fields
          )
          .then(response => {
            this.fields = {}; //Clear input fields.
            this.loaded = true;
            this.success = true;
          })
          .catch(function(error) {
            currentObj.output = error;
          });
      }
    }
  }
};
</script>
