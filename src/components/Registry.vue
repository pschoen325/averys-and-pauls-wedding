<template>
  <div>
    <div class="masthead aligner"  :style="{ backgroundImage: `url('${appHeader}')` }">
      <div class="title-container">
        <h1>Registry</h1>
        <h2>We could use some stuff.</h2>
      </div>
    </div>
    <h3>Here's a few stores we registred with:</h3>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/storage'

export default {
  name: 'Registry',
  data() {
    return {
      appHeader: null,
    }
  },
  beforeCreate() {
      const comp = this;
      firebase.storage().ref('gallery/Paul_Avery-Proposal-53.jpg').getDownloadURL().then(url => {
        comp.appHeader = url;
      })
    }
}
</script>