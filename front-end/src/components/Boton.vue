<template>
  <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-btn large color="primary" v-on:click="cargarApi">{{texto}}</v-btn>
          <p>Ruta para API</p>
          <input v-model="url" class="fill-height">
          <div id="app">
            {{ info }}
          </div>
        </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import axios from 'axios'
export default {
  props: {
    texto: String
  },
  data () {
    return {
      info: null,
      url: 'https://api.coindesk.com/v1/bpi/currentprice.json'
    }
  },
  methods: {
    cargarApi: function (event) {
      // axios
      //   .get(this.url)
      //   .then(response => (this.info = response))
    }
  }
}
</script>
