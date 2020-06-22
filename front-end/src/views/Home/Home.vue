<template>
  <v-app>
    Hola {{ user.name }}, bienvenido a la plantilla de Laravel + Vuejs. Tiene un menu donde poder salir.
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
}
</script>
