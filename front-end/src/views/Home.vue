<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{message}}</p>
    <v-btn
      @click="logout()">
      Logout
    </v-btn>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      message: "Loading..."
    }
  },
  mounted(){
    this.axios.get(`${process.env.VUE_APP_EXAMPLE_API_URL}/`)
    .then( ({data}) => this.message = data )
    .catch(error => {
      console.error(error)
      this.message = `Error loading data`
    })
  },
  methods: {
    logout(){
      this.$cookies.remove('jwt')
      location.reload()
    }
  }
}
</script>
