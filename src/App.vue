<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Raleway&display=swap');

/* 

Small devices (portrait tablets and large phones, 600px and up)
@media only screen and (min-width: 600px) {...}

Medium devices (landscape tablets, 768px and up)
@media only screen and (min-width: 768px) {...}

Large devices (laptops/desktops, 992px and up)
@media only screen and (min-width: 992px) {...}

Extra large devices (large laptops and desktops, 1200px and up) 
@media only screen and (min-width: 1200px) {...}

*/
body {
  margin: 0;
}
#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Josefin Sans', sans-serif;
}
.aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.aligner-item {
  max-width: 50%;
}
</style>