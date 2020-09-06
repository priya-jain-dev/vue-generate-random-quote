<template>
  <v-main>
       <v-row align="right" justify="end" class="ma-5">
          <v-btn class="random ma-1" color="#f7df94">
            <v-icon style="color: black;" :class="{_spin:is_spin}">{{ icons.mdiAutorenew }}</v-icon>
          </v-btn>
      </v-row>   
    <v-container>  
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6" v-if="authorQuotes">
          <!-- <img alt="Random logo" src="../assets/thinking.svg" width="200" /> -->
            <p v-if="this.$route.params.author" class="author">{{this.$route.params.author}}</p>
          <v-row align="center" justify="center" v-for="quote in authorQuotes" :key="quote._id">
            <v-col cols="12" class="v-line mt-15" >
              <p class="quote">{{ quote.quoteText }}</p>
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
  name: "AuthorQuote",
  props: {
    msg: String
  },
  data: () => ({
    icons: {
      mdiAutorenew,
      mdiArrowRight
    },
    authorQuotes: null,
    is_spin: false
  }),
  mounted() {
    if(this.$route.params.author){
        this.authorQuote(this.$route.params.author);
    }
  },
  methods: {
    authorQuote: function(author) {
      this.is_spin = true;
      axios
        .get(`https://quote-garden.herokuapp.com/api/v2/authors/${author}`)
        .then(response => {
            if(response && response.data && response.data.statusCode == 200){
                this.authorQuotes = response.data.quotes ?  response.data.quotes : null;
                this.is_spin = false;
            }
         
        });
    },
    autherQuote: function() {
        alert('quote page call');
        // router.push('author')

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
  font-size: 26px;
  color: #000000;
  text-align: left;
  margin-left: 30px;
  line-height: 40px;
}

.v-line {
  border-left: 8px solid #f7df94;
  padding:0;
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
  text-align: left;
  margin-left: 30px;
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
</style>
