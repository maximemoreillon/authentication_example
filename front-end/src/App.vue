<template>
  <AuthenticationWall
    :options="wall_options"
    @user="get_data()">
    <div>
      <h1>My app</h1>
      <p>{{message}}</p>
    </div>
  </AuthenticationWall>
</template>

<script>
import AuthenticationWall from '@moreillon/vue_authentication_wall'

export default {
  name: 'App',
  components: { AuthenticationWall },
  data: () => ({
    message: 'Loading...',
    wall_options: {
      login_url: `${process.env.VUE_APP_USER_MANAGER_API_URL}/auth/login`,
      identification_url: `${process.env.VUE_APP_USER_MANAGER_API_URL}/users/self`,
    }
  }),
  mounted(){
    //this.get_data()
  },
  methods: {
    get_data(){
      this.axios.get(`${process.env.VUE_APP_EXAMPLE_API_URL}/data`)
      .then( ({data}) => { this.message = data } )
      .catch( error => { this.message = error } )
    }
  },
}
</script>
