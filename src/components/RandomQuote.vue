<template>
  <v-main>
    <v-container>
      <div class="top-right" v-on:click="generateQuote">
        <p class="random">RANDOM<v-icon style="color: black;"  :class="{_spin:is_spin}">{{ icons.mdiAutorenew }}</v-icon>
        </p>
      </div>
      <v-row align="center" justify="center" v-if="quote">
        <v-col cols="12" sm="8" md="6">
          <img alt="Random logo" src="../assets/thinking.svg" width="250" />
          <v-row align="center" justify="center">
            <v-col cols="11" class="v-line">
              <p class="quote">{{ quote.data.quote.quoteText }}</p>
            </v-col>
            <v-col class="align-self-start text-left ml-15">
                <p class="author">{{quote.data.quote.quoteAuthor}}</p>
                <p class="type">{{quote.data.quote.quoteGenre}}</p>
            </v-col>
          </v-row >
         
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mdiAutorenew, mdiArrowRight } from "@mdi/js";
import axios from "axios";

export default {
  name: "RandomQuote",
  props: {
    msg: String
  },
  data: () => ({
    icons: {
      mdiAutorenew,
      mdiArrowRight
    },
    quote: null,
    is_spin:false
  }),
  mounted() {
    this.generateQuote();
  },
  methods: {
    generateQuote: function () {
     this.is_spin = true
     axios
      .get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then(response => {
        this.quote = response;
        this.is_spin = false;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* background-color:#ccc; */
}
.top-right {
  top: 30px;
  flex: 50%;
  text-align: right;
}
.random {
  font-size: 18px;
  color: #4f4f4f;
}
.quote {
  font-size: 36px;
  color: #000000;
  text-align: left;
margin-left: 30px;  
}

.v-line {
  border-left: 8px solid #f7df94;
}
._spin{
    animation: spin-animation 0.5s infinite;
    display: inline-block;
}
@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
.author{
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    color: #4F4F4F;
}
.type{
    font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #828282;

}
</style>
