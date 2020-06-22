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
              <v-text-field label="Usuario" name="email" id="email" prepend-icon="mdi-account" type="text" v-model="form.email"></v-text-field>
              <v-text-field
                id="password"
                label="Contraseña"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="form.password"
              ></v-text-field>
              <v-spacer></v-spacer>
                <v-row align="center" justify="center" mt-20>
                  <v-btn class="mt-6" min-width="80%" rounded color="success" type="submit">{{boton}}</v-btn>
                </v-row>
                <v-spacer></v-spacer>

                <v-row align="center" justify="center">
                  <p class="text--secondary mt-3"><router-link to="/registro">Crear cuenta</router-link> | <router-link to="/recuperar">¿Has olvidado tu contraseña?</router-link></p>
                </v-row>
            </v-card-text>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  props: {
    titulo: String,
    boton: String
  },
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  beforeMount () {
    console.log('AQUI ESTAMOS')
    console.log(this.authenticated)
    if (this.authenticated) {
      this.$router.push('Home')
    }
  },
  computed: {
    ...mapGetters({ authenticated: 'auth/authenticated' })
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    async submit () {
      await this.signIn(this.form)
      if (this.authenticated) {
        this.$router.replace({ name: 'Home' })
      }
    }
  }
}
</script>
