<template>
  <v-app id="inspire">
    <template v-if="authenticated">
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-silverware-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Carta</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Configuración</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link @click.prevent="signOut">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Salir</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </template>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <template v-if="authenticated">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-toolbar-title
        style="width: 300px;cursor: pointer"
        class="ml-0 pl-4"
        @click="$router.push('/')"
      >
        <span class="hidden-sm-and-down">Tu Carta Digital</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
        <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
    <template v-if="authenticated">
      <v-btn
        bottom
        color="pink"
        dark
        fab
        fixed
        right
        @click="dialog = !dialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {

  },
  data: () => ({
    dialog: false,
    drawer: false
  }),
  computed: {
    ...mapGetters({ authenticated: 'auth/authenticated' })
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),
    async signOut () {
      await this.signOutAction()
      this.$router.push('Login')
    }
  }
}
</script>
