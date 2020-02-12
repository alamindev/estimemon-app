<template>
  <section class="section results" style="">
    <h2 class=" fonts-loaded">
      <font style="vertical-align: inherit;"
        ><font style="vertical-align: inherit;" class="header_style_font"
          >Le montant estimé de votre projet est de </font
        ><span class="claim"></span></font
      ><br /><br />
      <span class="claim">
        <span class="js--total-price"
          ><font style="vertical-align: inherit;">
            <strong>
              <font style="vertical-align: inherit;"
                >{{ total }} €</font
              ></strong
            >
          </font></span
        >
      </span>
    </h2>
    <br />
    <div class="bouton-choix responsive_btn_style">
      <button
        class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
      >
        <a href="https://www.octegone.com/contacter-nous/">
          <div class="responsive__style_img_contact">
            <font style="vertical-align: inherit;">
              <img src="/static/estimer-votre-projet.png" alt />
            </font>
          </div>
        </a>
      </button>
    </div>
    <div class="custom_btn_main">
      <button class="button text-uppercase js--start fonts-loaded">
        <a href="https://www.octegone.com/contacter-nous/"
          ><font
            style="vertical-align: inherit; color:white; text-decoration:none;"
            class="appication_text"
            >Réaliser votre projet</font
          >
        </a>
      </button>
      <button class="custom_button" @click="click">
        Contact
      </button>
    </div>

    <span v-on:click="startAgain" class="link results-restart js--restart"
      ><font style="vertical-align: inherit;">
        <br />
        <font style="vertical-align: inherit; font-size:22px;font-weight:600;"
          >Recommencer
        </font></font
      ></span
    >
    <div class="custom_modal" :class="{ active: active }">
      <div class="modal__dialog">
        <div class="modal__content">
          <button class="modal__close" @click="click">
            X
          </button>
          <div class="modal__body">
            <form id="form" method="post" v-on:submit="SubmitForm">
              <div
                class="form-group"
                v-bind:class="{ 'has-warning': attemptSubmit && missingName }"
              >
                <label class="form-control-label" for="name">Name <span class="text-danger">*</span></label>
                <input
                  id="name"
                  name="name"
                  class="form-control form-control-warning"
                  type="text"
                  v-model="data.name"
                />
                <div
                  class="form-control-feedback"
                  v-if="attemptSubmit && missingName"
                >
                  This Name field is required!
                </div>
              </div>

             
              <!-- /form-group -->
              <div
                class="form-group"
                v-bind:class="{ 'has-warning': attemptSubmit && missingPhone }"
              >
                <label class="form-control-label" for="phone">Phone Number <span class="text-danger">*</span></label>
                <VuePhoneNumberInput v-model="data.phone" />
                <div
                  class="form-control-feedback"
                  v-if="attemptSubmit && missingPhone"
                >
                    This Phone Number field is required!
                </div>
              </div>
              <!-- /form-group -->
              <div
                class="form-group"
                v-bind:class="{ 'has-warning': attemptSubmit && missingEmail }"
              >
                <label class="form-control-label" for="email">Email <span class="text-danger">*</span></label>
                <input
                  id="email"
                  name="email"
                  class="form-control form-control-warning"
                  type="text"
                  v-model="data.email"
                />
                <div
                  class="form-control-feedback"
                  v-if="attemptSubmit && missingEmail"
                >
                  You must enter a valid email!
                </div>
              </div>
              <!-- /form-group -->
              <div
                class="form-group"
                v-bind:class="{ 'has-warning': attemptSubmit && missingPrice }"
              >
                <label class="form-control-label" for="price">Price <span class="text-danger">*</span></label>
                <input
                  id="price"
                  name="price"
                  class="form-control form-control-warning"
                  type="text"
                  v-model="data.price"
                />
                <div
                  class="form-control-feedback"
                  v-if="attemptSubmit && missingPrice"
                >
                This Price field is required!
                </div>
              </div>
              <!-- /form-group -->
              <div
                class="form-group"
                v-bind:class="{ 'has-warning': attemptSubmit && missingCompany }"
              >
                <label class="form-control-label" for="company">Company Name <span class="text-danger">*</span></label>
                <input
                  id="company"
                  name="company"
                  class="form-control form-control-warning"
                  type="text"
                  v-model="data.company"
                />
                <div
                  class="form-control-feedback"
                  v-if="attemptSubmit && missingCompany"
                >
                 This Company Name field is required!
                </div>
              </div>
              <!-- /form-group -->
              <div
                class="form-group" 
              >
              <label class="form-control-label" for="company">Message</label>
              <div class="custom_message"> 
                <div class="message_number d-block border-bottom" v-for="(storeQuestion) in storeQuestions" v-bind:key="storeQuestion.id">
                    <p class="m-0 mb-1"><span class="font-weight-bold"> {{storeQuestion.id}}. </span>  {{storeQuestion.question}}</p>
                    <p class=" m-0">Selected: <span class="font-weight-bold">{{storeQuestion.answer}}</span></p>
                </div>
              </div>
              </div>
              <!-- /form-group --> 
              <div class="d-flex">
                <button type="submit" class="btn btn-primary" v-if="!success && !error">Send Message <img v-if="loader" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" /></button>
                <button type="button" @click="loadPage" class="btn btn-success" v-if="success || error">Go Back</button>
                <div class="alert alert-success m-0 ml-5" v-if="success">Email Send Successfull!</div>
                <div class="alert alert-danger m-0 ml-5" v-if="error">Something went wrong!</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input';
import Axios from 'axios';
import config from '../../config';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
export default { 
  name: "EndComponent",
  components: {
    VuePhoneNumberInput  
  },
  props: ["total","storeQuestions"],
  data() {
    return {
      active: false,
      success: false,
      error: false,
      loader: false,
      data: {
        name: "", 
        phone: "",
        email: "",
        company: "",
        price: null,
        message: [],
       }, 
      attemptSubmit: false
    };
  },
  computed: {
    missingName: function() {
      return this.data.name === "";
    },
    missingCompany: function() {
      return this.data.company === "";
    },
    missingPhone: function() {
      return this.data.phone === "";
    },
    missingEmail: function() {
       var reg = /(.+)@(.+){2,}\.(.+){2,}/; 
     return (
        this.data.email === "" || reg.test(this.data.email) === false
     ); 
    },
    missingPrice: function() {
     return (
        this.isNumeric(this.data.price) === false
     ); 
    }
  },
  methods: {
    isNumeric: function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    },
    startAgain: function() {
      this.$emit("startAgain");
    },
    click(e) {
      this.active = !this.active; 
      this.data ={
        name: '',
        phone: "",
        email: "",
        company: "",
        price: null,
      }
      this.data.message = this.storeQuestions;
      this.attemptSubmit = false
    },
    SubmitForm: function(event) {
      event.preventDefault();
      this.attemptSubmit = true;
      if (!this.missingName && !this.missingPhone && !this.missingEmail&& !this.missingCompany && !this.price) {
          this.loader = true
         Axios.post(config.MAIN_URL+'/send-message', this.data).then(res=>{
           this.loader = false
           if(res.data.code == "EAUTH")
              this.error = true
           else
            this.success = true
         })
      }  
    },
    loadPage(){
      return window.location.reload();
    }
  },
  
};
</script>
<style scoped>
button{
  cursor: pointer !important;
}
.js--total-price {
  font-size: 80px;
}
.has-warning{
  color: red;
}
.modal__body {
  text-align: left;
}
.header_style_font {
  font-size: 32px;
}
.custom_btn_main {
  display: flex;
  flex-wrap: wrap;
}
.custom_message {
    border: 1px solid #dedede;
    padding: 0;
}
.message_number  { 
    padding: 10px;
}
.custom_button {
  cursor: pointer;
  background: #673ab7;
  border: 0;
  color: #ffffff;
  padding: 12px 60px;
  font-weight: 700;
  font-size: 15px;
  outline: 0;
  text-transform: uppercase;
  margin-left: 10px;
  display: table;
}
.custom_button:hover {
  background: #5c34a4;
}
@media only screen and (max-width: 767px) {
  .responsive__style_img_contact img {
    width: 100px;
  }
  .js--total-price {
    font-size: 32px;
  }
  .header_style_font {
    font-size: 20px;
  }
}
.custom_modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(10, 10, 10, 0.8);
  overflow-y: auto;
  z-index: -9999;
  opacity: 0;
  transition: all 0.5s;
  visibility: hidden;  
}
.custom_modal.active {
  z-index: 99999 !important;
  opacity: 1;
  visibility: visible;
}
.modal__dialog {
  width: 50%;
  background: #fbfbfb;
  position: relative;
  border-radius: 5px;
  box-shadow: 1px 3px 13px -3px #252525;
    margin: 0 auto;
  margin-top: 15px;

}
.modal__content {
  padding: 50px 20px;
}
.modal__body > ul {
  list-style: none;
}
.modal__close {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  background: #007bff;
  border: 0;
  outline: 0;
  border-radius: 50%;
  font-size: 16px;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .modal__dialog {
    width: 90%;
  }
  .custom_btn_main {
    flex-direction: column;
  }
  .custom_button {
    margin-left: 0;
    margin-top: 5px;
  }
}
</style>
