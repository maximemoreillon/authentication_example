<template>
  <div class="home">
    <h1>Home</h1>
    <p>{{message}}</p>
  </div>
</template>

<script>
// @ is an alias to /src

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
  }
}
</script>
