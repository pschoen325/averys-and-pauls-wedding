<template lang="HTML">
  <div>
    <img :src="appHeader" />
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/storage'

export default {
  name: 'Story',
    data() {
      return {
        appHeader: null
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