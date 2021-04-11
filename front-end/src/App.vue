<template>
  <v-app>
    <v-main>
      <AuthenticationWall :options="options">
        <router-view/>
      </AuthenticationWall>
    </v-main>
  </v-app>
</template>

<script>
import AuthenticationWall from '@moreillon/vue_authentication_wall_vuetify'
export default {
  name: 'App',
  components: {
    AuthenticationWall
  },
  data: () => ({
    options: {
      login_url: `${process.env.VUE_APP_USER_MANAGER_API_URL}/auth/login`,
      identification_url: `${process.env.VUE_APP_USER_MANAGER_API_URL}/users/self`,
    }
  }),

}
</script>
