<template>
  <v-main>
    <v-container>
      <v-row align="end" justify="end" class="top-right">
        <p class="random">RANDOM<v-icon style="color: black;">{{ icons.mdiAutorenew }}</v-icon>
        </p>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <img alt="Random logo" src="../assets/thinking.svg" width="250" />
          <v-row align="center" justify="center">
            <v-col cols="11" class="v-line">
              <p class="quote">{{ quote.data.quote.quoteText }}</p>
            </v-col>
          </v-row>
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
    quote: null
  }),
  mounted() {
    axios
      .get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
      .then(response => {
        this.quote = response;
        console.log(response);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
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
</style>
