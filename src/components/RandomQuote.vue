<template>
  <v-main>
    <v-row align="right" justify="end" class="ma-5">
      <v-btn class="random ma-1" color="#f7df94" v-on:click="generateQuote">
        <v-icon style="color: black;" :class="{_spin:is_spin}">{{ icons.mdiAutorenew }}</v-icon>
      </v-btn>
    </v-row>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" v-if="quote">
          <img alt="Random logo" src="../assets/thinking.svg" width="200" />
          <v-row align="center" justify="center">
            <v-col cols="11" class="v-line">
              <p class="quote">{{ quote.quoteText }}</p>
            </v-col>
            <v-col class="align-self-start text-left ml-10 button mt-10" v-on:click="autherQuote">
              <v-row align="center" justify="center">
                <v-col>
                  <p class="author">{{quote.quoteAuthor}}</p>
                  <p class="genre">{{quote.quoteGenre}}</p>
                </v-col>
                <img src="../assets/arrow_right_alt-black-24dp.svg" />
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="8" md="4" v-if="is_spin">
          <img alt="loading....." src="../assets/loading.svg" />
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
    is_spin: false
  }),
  mounted() {
    this.generateQuote();
  },
  methods: {
    generateQuote: function() {
      this.is_spin = true;
      this.quote = null;
      axios
        .get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
        .then(response => {
          if (response.data.statusCode == 200 && response.data[0]) {
            this.quote = response.data[0].quote;
            this.is_spin = false;
          } else {
            this.quote = null;
            this.is_spin = false;
          }
        });
    },
    autherQuote: function() {
      this.$router.push({ path: `/${this.quote.quoteAuthor}` });
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
  margin-left: auto;
}
.quote {
  font-size: 36px;
  color: #000000;
  text-align: left;
  margin-left: 30px;
  line-height: 40px;
}

.v-line {
  border-left: 8px solid #f7df94;
  padding: 0;
}
._spin {
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
.author {
  /* padding-top: 20px; */
  font-weight: bold;
  font-size: 24px;
  line-height: 10px;
  color: #4f4f4f;
}
.genre {
  font-weight: 500;
  font-size: 14px;
  line-height: 5px;
  color: #828282;
}

.v-btn::before {
  background-color: #f7df94;
}
.button {
  padding: 30px;
}
.button:hover {
  background-color: #333333;
}
.button:hover > .row > .col > .author {
  color: #f2f2f2;
}
</style>
