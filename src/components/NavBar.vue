<template>
  <div class="navbar-wrapper">
    <mq-layout :mq="['sm', 'md']">
      <Slide>
        <router-link to="/">Story</router-link>
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/registry">Registry</router-link>
        <router-link to="/rsvp">RSVP</router-link>
      </Slide>
      <h1>Avery And Paul</h1>
    </mq-layout>
    <mq-layout mq="tablet+">
      <div class="desktop-navbar">
        <router-link class="home-btn" to="/">Avery And Paul</router-link>
        <div class="links">
          <router-link to="/">Story</router-link>
          <router-link to="/gallery">Gallery</router-link>
          <router-link to="/registry">Registry</router-link>
          <router-link to="/rsvp">RSVP</router-link>
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
    h1 {
      color: white;
      margin: 0;
      text-align: center;
    }
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
    position: absolute;
    width: 100%;
    padding: 1em 0;
    z-index: 2;
    .home-btn {
      font-family: 'Raleway', sans-serif;
      float: left;
      color: #fff;
      padding: 0 1em;
      text-decoration: none;
      margin: 0;
      font-size: 36px;
      font-weight: 300;
      &:visited {
        color: #fff;
        text-decoration: none;
      }

      &:hover {
        color: #fff;
        text-decoration: none;
      }

      &:active {
        color: #fff;
        text-decoration: none;
      }
    }
    .links {
      text-align: right;
      a {
        color: #fff;
        padding: 0;
        text-decoration: none;
        margin: 0.5em;
        font-size: 36px;
        font-weight: 300;
        &:last-child{
          margin-right: 1em;
        }
        &:visited {
          color: #fff;
          text-decoration: none;
        }

        &:hover {
          color: #fff;
          text-decoration: underline #fff;
        }

        &:active {
          color: #fff;
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
