<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" >
        <v-card class="elevation-12">
          <form action="#" @submit.prevent="submit">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{titulo}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field label="Email" name="email" id="email" prepend-icon="mdi-account" type="text" v-model="form.email"></v-text-field>

                <v-row align="center" justify="center" mt-20>
                  <v-btn class="mt-6" min-width="80%" rounded color="success" type="submit">{{boton}}</v-btn>
                  <v-btn class="mt-6" min-width="80%" rounded color="error" to="/login">{{cancelar}}</v-btn>
                </v-row>
            </v-card-text>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RecuperarPassword',
  props: {
    boton: String,
    titulo: String,
    cancelar: String
  },
  data () {
    return {
      form: {
        email: ''
      }
    }
  },
  methods: {
    async submit () {
      await axios.post('api/password/email', this.form)
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>
