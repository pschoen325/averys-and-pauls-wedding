<template>
  <div class="navbar-wrapper">
    <mq-layout :mq="['sm', 'md']">
      <Slide>
        <router-link to="/">Story</router-link>
      </Slide>
    </mq-layout>
    <mq-layout mq="tablet+">
      <div class="desktop-navbar">
        <router-link class="home-btn" to="/">Avery And Paul</router-link>
        <div class="links">
          <router-link to="/">Story</router-link>
        </div>
      </div>
    </mq-layout>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'NavBar',
  components: {
    Slide
  }
}
</script>

<style lang="scss">
  .navbar-wrapper {
    height: 0;
  }
  .bm-menu {
    background: #fff;
  }
  .bm-burger-button {
    position: relative;
    top: 1em;
    left: 1em;
    .bm-burger-bars {
      background-color: #fff;
    }
  }
  .bm-item-list > * {
    color: #222;
  }
  .desktop-navbar {
    position: fixed;
    width: 100%;
    padding: 1em 0;
    z-index: 2;
    background-color: white;
    .home-btn {
      font-family: 'Great Vibes', cursive;
      float: left;
      color: #222;
      padding: 0 1em;
      text-decoration: none;
      margin: 0;
      font-size: 36px;
      font-weight: 300;
       &:last-child{
          margin-right: 0
        }
      &:visited {
        color: #222;
        text-decoration: none;
      }

      &:hover {
        color: #222;
        text-decoration: none;
      }

      &:active {
        color: #222;
        text-decoration: none;
      }
    }
    .links {
      text-align: right;
      a {
        color: #222;
        padding: 0 1em;
        text-decoration: none;
        margin: 0.5em;
        font-size: 36px;
        font-weight: 300;
        &:last-child{
          margin-right: 0
        }
        &:visited {
          color: #222;
          text-decoration: none;
        }

        &:hover {
          color: #222;
          text-decoration: underline #222;
        }

        &:active {
          color: #222;
          text-decoration: none;
        }
      }
    }
    @media only screen and (min-width: 1099) {
      .navbar-wrapper {
        height: 2em;
      }
    }
  }
    
</style>
