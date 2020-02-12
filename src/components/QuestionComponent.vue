<template>
  <div
    class="container"
    data-question-id="1"
    data-pph="true"
    style="cursor: pointer;"
  >
    <div class="row">
      <div class="design__style_new">
      <div class="col-md-2 text-left"> 
          <span class="text-bold price-progress js--price-progress"></span>
        <span
          v-on:click="previousQuestion"
          id="before"
          v-if="questionData.currentQuestionIndex == 0"
          class="link question-previous js--previous"
          ><font style="vertical-align: inherit;">
            <font class="precedent_number_seven"
              style="vertical-align: inherit; position: absolute;"
              >← Précédent</font
            ></font
          ></span
        >
        <span
          v-on:click="previousQuestion"
          v-if="questionData.currentQuestionIndex != 0"
          class="link question-previous js--previous"
          ><font style="vertical-align: inherit;"
            ><font class="precedent_number_eight"
              style="vertical-align: inherit;"
              >← Précédent</font
            ></font
          ></span
        >
      </div>
      <div class="col-md-8">
        <font style="vertical-align: inherit; "  class="number__breadcrumb">
          <font style="vertical-align: inherit;"
            >{{ questionData.currentQuestionIndex + 1 }}/{{
              questionData.totalQuestion
            }}</font
          >
        </font>
      </div>
      </div>
    </div>

    <h2 class="question-title fonts-loaded">
      {{ questionData.currentQuestion.question }}
    </h2>

    <div class="row" :class="classObject">
      <div
        v-for="option in questionData.currentQuestion.options"
        v-bind:key="option.text"
        class="align-middle"
        :class="[
          questionData.currentQuestion.options.length == 4
            ? 'col-md-3'
            : 'col-md-4'
        ]"
        v-on:click="selectOption(option)"
      >
        <div
          class="container"
          data-answer-id="1"
          :data-answer-weight="option.weight"
        >
          <div class="bouton-choix responsive__style_dynamice_content">
            <img
              class="answer-image js--answer-image"
              v-bind:src="option.image"
              alt="Optimum quality"
            />  
            <font style="vertical-align: inherit;">{{ option.text }}</font> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionComponent",

  props: ["questionData", "previousQuestion"],
 computed: {
  classObject: function () {
    return {
      item_four_found: this.questionData.currentQuestion.options.length == 4, 
    }
  }
},
  methods: {
    selectOption: function(option) { 
      this.$emit("selectOption", option);
      
    }
  } 
};
</script>

<style >
.row {
  margin-bottom: 66px;
}
.item_four_found .responsive__style_dynamice_content{ 
      padding: 0 !important; 
}
</style>
