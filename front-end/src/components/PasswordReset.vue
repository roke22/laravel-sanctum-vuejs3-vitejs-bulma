<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4" >
        <v-alert
        v-if="alerta"
        prominent
        type="error"
        transition="scale-transition"
        >
          <v-row align="center">
            <v-col class="grow">{{ mensaje }}</v-col>
            <v-col class="shrink">
              <v-btn v-on:click="alerta = false">Ok</v-btn>
            </v-col>
          </v-row>
        </v-alert>
        <v-card class="elevation-12">
          <form action="#" @submit.prevent="submit">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>{{titulo}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-text-field label="Token" name="token" id="token" prepend-icon="mdi-account" type="text" v-model="form.token" disabled></v-text-field>
              <v-text-field label="Email" name="email" id="email" prepend-icon="mdi-account" type="text" v-model="form.email" disabled></v-text-field>
              <v-text-field label="Password" name="password" id="password" prepend-icon="mdi-account" type="password" v-model="form.password"></v-text-field>
              <v-text-field label="Confirma Password" name="password-confirm" id="password-confirm" prepend-icon="mdi-account" type="password" v-model="form.passwordConfirm"></v-text-field>

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
        token: this.$route.params.token,
        email: this.$route.query.email,
        password: '',
        passwordConfirm: ''
      },
      mensaje: '',
      alerta: false
    }
  },
  mounted () {
    console.log(this.$route.query.email)
  },
  methods: {
    async submit () {
      // password_confirmation
      if ((this.form.password !== this.form.passwordConfirm) || (this.form.passwordConfirm.length < 8)) {
        this.mensaje = 'La contraseña debe tener al menos 8 caracteres ademas comprueba que la escribes bien las dos veces'
        this.alerta = true
      } else {
        await axios.post('/api/password/reset', {
          token: this.form.token,
          email: this.form.email,
          password: this.form.password,
          password_confirmation: this.form.passwordConfirm
        })
          .then(response => {
            if (response.status === 200) {
              this.$router.replace({ name: 'Login' })
            }
          })
          .catch(() => {
            this.mensaje = 'Comprueba los datos introducidos e intentalo de nuevo'
            this.alerta = true
          })
      }
    }
  }
}
</script>
