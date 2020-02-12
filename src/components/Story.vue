<template lang="HTML">
  <div>
    <div class="masthead aligner"  :style="{ backgroundImage: `url('${appHeader}')` }">
      <div class="title-container">
        <h1>We're engaged!</h1>
        <div class="count-down">
          <Timer />
        </div>
      </div>
    </div>
    <div class="story-container">
      <h2>Our Story</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et justo bibendum, ornare orci id, eleifend dui. Fusce ac est vitae neque ornare dignissim at eget mauris. Mauris sit amet convallis enim. Ut orci justo, aliquet et congue sit amet, eleifend pharetra est. Etiam turpis velit, luctus ac egestas ut, maximus ac elit. Nulla auctor aliquam accumsan. Curabitur et semper justo, vel consectetur metus. Sed molestie suscipit ligula, vel hendrerit erat suscipit vel. Quisque convallis in sem sed malesuada. Proin interdum, felis nec aliquet tempus, leo lectus facilisis metus, eu sagittis massa dui quis elit. Aliquam vel velit id nisi venenatis rutrum quis sit amet ante. Maecenas sed dignissim arcu. Nunc tincidunt imperdiet ex, ac elementum magna lacinia non.</p>
      <p>Vestibulum eros sapien, tempus id sagittis non, placerat sollicitudin magna. Sed ullamcorper massa nec diam porttitor dapibus. Pellentesque id vulputate felis. Nulla ornare dignissim mollis. Praesent felis diam, pulvinar ut quam sit amet, pellentesque imperdiet justo. Donec vitae mollis eros. Morbi nec eleifend nisl, ac posuere orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris volutpat nisi sit amet justo blandit finibus et id neque. Vestibulum gravida a quam tristique ornare. Sed faucibus nibh magna, sed eleifend magna molestie ut. Pellentesque ex nulla, bibendum ut rhoncus non, interdum sit amet velit.</p>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/storage'

import Timer from './Timer'

export default {
  name: 'Story',
    components: {
      Timer
    },
    data() {
      return {
        appHeader: null,
      }
    },
    beforeCreate() {
      const comp = this;
      firebase.storage().ref('app-header.png').getDownloadURL().then(url => {
        comp.appHeader = url;
      })
    }
  }
</script>

<style lang="css">
  .masthead {
    height: 80vh;
    min-height: 500px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    vertical-align: middle;
    text-align: center;
    color: #fff;
  }

  .story-container {
    padding: 0.5em;
  }

  .masthead h1 {
    font-size: 30px;
    margin: 0
  }

  @media only screen and (min-width: 768px) {
    .masthead {
      height: 70vh;
    }
    .title-container {
      max-width: 50%;
    }
    .story-container {
      max-width: 1000px;
      margin: auto;
    }
    .masthead h1{
      font-size: 72px;
    }
    .story-container p {
      text-align: left;
    }
  }

  @media only screen and (min-width: 1200px) {
    .masthead h1 {
      font-size: 88px;
    }
  }
</style>