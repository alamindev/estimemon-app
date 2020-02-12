<template>
  <section class="section initial container">
    <div v-if="path == ''">
      <img
        class="intro-image"
        src="static/application mobile et tablette estimation.png"
        alt
      />
      <h1 class="title fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"
            >Combien coûte la création</font
          >
        </font>
        <strong>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
              de mon application ou de mon site internet</font
            >
          </font>
        </strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> ?</font>
        </font>
      </h1>
      <p class="subtitle fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"
            >Estimer votre projet en repondant à ces questions.</font
          >
        </font>
      </p>
      <button
        v-on:click="start('calculate')"
        class="button text-uppercase js--start fonts-loaded"
      >
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Estimer</font>
        </font>
      </button>
    </div>
    <div v-if="path == 'calculate'">
      <div class="col-md-3">
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font class="precedent_number_one" style="vertical-align: inherit;"
              >← Précédent</font
            ></font
          ></span
        >
      </div>

      <h1 class="title fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">S'agit il</font>
        </font>
        <strong>
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">
              d'un site internet ou d'une application mobile</font
            >
          </font>
        </strong>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> ?</font>
        </font>
      </h1>
      <p class="subtitle fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">.</font>
        </font>
      </p>
      <div class="bouton-choix responsive_btn_style">
        <button
          v-on:click="start('mobile')"
          class="button text-uppercase js--start fonts-loaded"
        >
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Application Mobile</font>
          </font>
        </button>
        <button
          v-on:click="start('app')"
          class="button text-uppercase js--start fonts-loaded"
        >
          <font style="vertical-align: inherit;">
            <font style="vertical-align: inherit;">Site internet</font>
          </font>
        </button>
      </div>
    </div>
    <div v-if="path == 'calculate.mobile'">
      <div class="col-md-3">
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('calculate', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font class="precedent_number_two" style="vertical-align: inherit;"
              >← Précédent</font
            ></font
          ></span
        >
      </div>

      <h1 class="title fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"
            >Quel type d'application mobile souhaitez vous</font
          >
        </font>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> ?</font>
        </font>
      </h1>

      <button
        v-on:click="start('andriod')"
        class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
      >
        <div class="responsive__style_img">
          <font style="vertical-align: inherit;">
            <img src="/static/application-mobile-android.png" alt />
          </font>
          <font style="vertical-align: inherit;" class="appication_text"
            >Application Android</font
          >
        </div>
      </button>

      <button
        v-on:click="start('ios')"
        class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
      >
        <div class="responsive__style_img">
          <font style="vertical-align: inherit;">
            <img
              src="/static/application mobile IOS estimation coût cout.png"
              alt
            />
          </font>
          <font style="vertical-align: inherit;" class="appication_text"
            >Application IOS</font
          >
        </div>
      </button>
      <button
        v-on:click="start('andriodios')"
        class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
      >
        <div class="responsive__style_img">
          <font style="vertical-align: inherit;">
            <img src="/static/application-hybride.png" alt />
          </font>
          <font style="vertical-align: inherit;" class="appication_text"
            >Application Andriod+IOS</font
          >
        </div>
      </button>
    </div>
    <div v-if="path == 'calculate.app'">
      <div class="col-md-3">
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('calculate', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font
              class="precedent_number_two_one"
              style="vertical-align: inherit;"
              >← Précédent</font
            ></font
          ></span
        >
      </div>

      <h1 class="title fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"
            >Souhaitez vous créer un site ou faire une refonte d'un site
            existant</font
          >
        </font>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> ?</font>
        </font>
      </h1>
      <div class="bouton-choix responsive_btn_style">
        <button
          v-on:click="start('web')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
          <div class="responsive__style_img">
            <font style="vertical-align: inherit;">
              <img src="/static/creation-de-site.png" alt />
            </font>
            <font style="vertical-align: inherit;" class="appication_text"
              >Site Internet</font
            >
          </div>
        </button>
        <button
          v-on:click="start('rebrush')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
          <div class="responsive__style_img">
            <font style="vertical-align: inherit;">
              <img src="/static/refonte-de-site.png" alt />
            </font>
            <font style="vertical-align: inherit;" class="appication_text"
              >Refonte</font
            >
          </div>
        </button>
      </div>
    </div>
    <div v-if="path == 'calculate.app.web' || path == 'calculate.app.rebrush'">
      <div class="col-md-3">
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('calculate.app', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font
              class="precedent_number_three"
              style="vertical-align: inherit;"
              >← Précédent</font
            ></font
          ></span
        >
      </div>

      <h1 class="title fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"
            >Quel est la nature de votre site</font
          >
        </font>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> ?</font>
        </font>
      </h1>
      <div class="bouton-choix">
        <button
          v-on:click="start('vitrine')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
          <div class="responsive__style_img">
            <font style="vertical-align: inherit;">
              <img src="/static/site-internet estimation.png" alt />
            </font>
            <font style="vertical-align: inherit;" class="appication_text">
              Site Vitrine / Blog</font
            >
          </div>
        </button>
        <button
          v-on:click="start('ecommerce')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap" 
        >
           <div class="responsive__style_img">
          <font style="vertical-align: inherit;">
            <img src="/static/E-Commerce.png" alt />
          </font>
            <font style="vertical-align: inherit;" class="appication_text">Site E-Commerce</font>
           </div>
        </button>
        <button
          v-on:click="start('appweb')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
           <div class="responsive__style_img">
          <font style="vertical-align: inherit;">
            <img src="/static/application-web.png" alt />
          </font>
            <font style="vertical-align: inherit;" class="appication_text">Application Web</font>
           </div>
        </button>
      </div>
    </div>
    <div
      v-if="
        path == 'calculate.mobile.andriod' ||
          path == 'calculate.mobile.ios' ||
          path == 'calculate.mobile.andriodios' ||
          path == 'calculate.app.web.vitrine' ||
          path == 'calculate.app.web.ecommerce' ||
          path == 'calculate.app.web.appweb' ||
          path == 'calculate.app.rebrush.vitrine' ||
          path == 'calculate.app.rebrush.ecommerce' ||
          path == 'calculate.app.rebrush.appweb'
      "
    >
      <div
        class="col-md-3"
        v-if="
          path == 'calculate.mobile.andriod' ||
            path == 'calculate.mobile.ios' ||
            path == 'calculate.mobile.andriodios'
        "
      >
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('calculate.mobile', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font
              class="precedent_number_four"
              style="vertical-align: inherit; "
              >← Précédent</font
            ></font
          ></span
        >
      </div>
      <div
        class="col-md-3"
        v-if="
          path == 'calculate.app.web.vitrine' ||
            path == 'calculate.app.web.ecommerce' ||
            path == 'calculate.app.web.appweb'
        "
      >
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('calculate.app.web', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font
              class="precedent_number_five"
              style="vertical-align: inherit; "
              >← Précédent</font
            ></font
          ></span
        >
      </div>
      <div
        class="col-md-3"
        v-if="
          path == 'calculate.app.rebrush.vitrine' ||
            path == 'calculate.app.rebrush.ecommerce' ||
            path == 'calculate.app.rebrush.appweb'
        "
      >
        <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="start('calculate.app.rebrush', 'path')"
          class="link question-Précédent js--Précédent"
          ><font style="vertical-align: inherit;"
            ><font class="precedent_number_six" style="vertical-align: inherit;"
              >← Précédent</font
            ></font
          ></span
        >
      </div>

      <h1 class="title fonts-loaded">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"
            >Quel niveau de graphisme souhaitez vous</font
          >
        </font>
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;"> ?</font>
        </font>
      </h1>
      <div class="bouton-choix">
        <button
          v-on:click="start('simple')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
          <div class="responsive__style_img">
            <font style="vertical-align: inherit;">
              <img src="/static/design-simple.png" alt />
            </font>
            <font style="vertical-align: inherit;" class="appication_text"
              >Simple</font
            >
          </div>
        </button>
        <button
          v-on:click="start('advance')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
          <div class="responsive__style_img">
            <font style="vertical-align: inherit;">
              <img src="/static/design-avance.png" alt />
            </font>
            <font style="vertical-align: inherit;" class="appication_text"
              >Avancé</font
            >
          </div>
        </button>
        <button
          v-on:click="start('personalise')"
          class="buttons text-uppercase js--start fonts-loaded responsite__style_wrap"
        >
          <div class="responsive__style_img">
            <font style="vertical-align: inherit;">
              <img src="/static/design-personnalise.png" alt />
            </font>
            <font style="vertical-align: inherit;" class="appication_text"
              >Personalisé</font
            >
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StartComponent",

  props: ["path"],
  methods: {
    start: function(value, path) {
      this.$emit("start", value, path);
    }
  }
};
</script>
<style>
.button {
  background-color: #007bff; /* bleu */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.buttons {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
