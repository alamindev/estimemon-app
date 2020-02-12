<template>
  <div id="Home" style="text-align: center;">
    <start-component 
      v-on:start="startQuesion"
      v-bind:path="path" 
      v-if="state == 'main'" />
    <question-component
      v-on:selectOption="selectOption"
      v-bind:questionData="questionData"
      v-bind:previousQuestion="previousQuestion"
      v-if="state == 'question'"
    />
    <end-component :storeQuestions="storeQuestions" v-on:startAgain="startAgain" v-bind:total="total" v-if="state == 'end'" />
  </div>
</template>

<script>
import Vue from "vue";
import StartComponent from "../components/StartComponent.vue";
import QuestionComponent from "../components/QuestionComponent.vue";
import EndComponent from "../components/EndComponent.vue";
import { calculate } from '../helpers/questionHelper';


export default {
  name: "Home",
  components: {
    StartComponent,
    QuestionComponent,
    EndComponent 
  },
  data: () => ({
    state: "main",
    questionData: {
      currentQuestion: questions[0],
      totalQuestion: questions.length,
      currentQuestionIndex: 0
    },
    total: 0,
    history: [],
    path: '',
    obj:{},
    storeQuestions: []
  }),

  methods: {
    startAgain: function() {
      this.questionData = {
        currentQuestion: questions[0],
        currentQuestionIndex: 0,
        totalQuestion: questions.length
      };
      this.total = 0;
      this.history = [];
      this.state = "main";
      this.path = '';
      this.obj = {};
      
    },
    setPath: function(value){
      this.path = value;
    },
    startQuesion: function(value,path) {
      if(path == 'path'){
        this.setPath(value);
      }else{
        if(this.path == '') {
          this.path = this.path+value;
        }else{
          this.path = this.path+'.'+value;
        }
        if(value == 'simple' || value == 'advance' || value == 'personalise'){
          this.state = "question";
          const data = this.path.split('.');
          let obj= {};
          for(let i=0; i<data.length ; i++){
            if(i==0){
              obj = calculate;
            }else{
              obj = obj[data[i]]
            }
          }
          this.obj = obj;
          this.questionData = {
            currentQuestion: obj[0],
            currentQuestionIndex: 0,
            totalQuestion: obj.length
          };
        }
      }
    },
    selectOption: function(option) {

      this.questionData.currentQuestionIndex++;
      this.total = this.total + option.weight;
      this.history.push(this.total);
      let data = {
        id: this.questionData.currentQuestionIndex,
        question: this.questionData.currentQuestion.question,
        answer: option.text
      }
       if (!this.storeQuestions.some(el => el.id === this.questionData.currentQuestionIndex)){
             this.storeQuestions.push(data)
        } 
    
      if (
        this.questionData.currentQuestionIndex < this.questionData.totalQuestion
      ) {
        this.questionData.currentQuestion =
          this.obj[this.questionData.currentQuestionIndex];
      } else {
        this.state = "end";
      }
    },

    previousQuestion: function() {
      this.history.pop();
      const value = this.history.pop();
      if(value && !Number.isNaN(value)){
      this.total = value;
      }else{
        this.total = 0;
      }
      if(this.questionData.currentQuestionIndex == 0){
        if(this.path.includes(".simple")){
          this.path = this.path.replace(".simple", "");
        }
        if(this.path.includes(".advance")){
          this.path = this.path.replace(".advance", "");
        }
        if(this.path.includes(".personalise")){
          this.path = this.path.replace(".personalise", "");
        }
        this.total = 0;
        this.history = [];
        this.state = "main";
        this.obj = {};
      }else{
        this.questionData.currentQuestionIndex--;
        this.questionData.currentQuestion =
          this.obj[this.questionData.currentQuestionIndex];
      }
    }
  }
};


const questions = [
  {
    question: "What level of quality are you looking for?",
    options: [
      {
        text: "Design simple",
        image:
          "/static/web design simple.png",
        weight: 40
      },
      {
        text: "Design avancé",
        image:
          "/static/web design avancé estimer.png",
        weight: 40
      },
      {
        text: "Design sur mesure",
        image:
          "/static/webdesign personnalisé.png",
        weight: 40
      }
    ]
  },
  {
    question: "What kind of mobile application do you need?",
    options: [
      {
        text: "Application Android",
        image:
          "/static/application mobile android estimation coût.png",
        weight: 40
      },
      {
        text: "Application IOS (Apple)",
        image:
          "/static/application mobile IOS estimation coût cout.png",
        weight: 40
      },
      {
        text: " Application Android & IOS (Apple)",
        image:
          "/static/application mobile Android & IOS estimation coût cout.png"
,
        weight: 40
      }
    ]
  },
  {
    question: "What is the desired design for your App?",
    options: [
      {
        text: "Interface simple",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Custom Interface",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Interface similar to the website",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Without design",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 0
      }
    ]
  },
  {
    question: "How do you want to make your App?",
    options: [
      {
        text: "Free application with advertising",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Paid Application",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "in-app purchases",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Other / I do not know yet",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  },
  {
    question: "Does your App need a login system?",
    options: [
      {
        text: "Yes with the social networks + email",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Yes with the emails",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "No",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "I dont know yet",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  },
  {
    question: "Does your App need to be integrated with a website?",
    options: [
      {
        text: "Yes",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "No",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "I dont know yet",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  },
  {
    question: "Do users have their own profile?",
    options: [
      {
        text: "Yes",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "No",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "I dont know yet",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  },
  {
    question: "Does your App require an administration interface?",
    options: [
      {
        text: "Yes",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "No",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "I dont know yet",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  },
  {
    question: "In how many languages ​​will your App be used?",
    options: [
      {
        text: "One language  ",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Two Languages",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Many Languages",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  },
  {
    question: "In which stage is your project located?",
    options: [
      {
        text: "Its just an idea",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "Draft Already Ready",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "App under development",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      },
      {
        text: "App already developed",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTzXOyRQRMP7hsEwVLX-CE9Unegs0QiVAHzrq6PzXGhRS8JPV",
        weight: 40
      }
    ]
  }
];
</script>
