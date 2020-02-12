<template>
  <div>
    <div class="masthead aligner"  :style="{ backgroundImage: `url('${appHeader}')` }">
      <div class="title-container">
        <h1>Gallery</h1>
        <h4>Here are some precious photos.</h4>
      </div>
    </div>
    <gallery :images="downloadUrlsArray" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in downloadUrlsArray"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '300px' }"
    ></div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  import VueGallery from 'vue-gallery';
  
  export default {
    name: 'Gallery',
    data: function () {
      return {
        appHeader: null,
        downloadUrlsArray: [],
        index: null
      };
    },

    beforeCreate() {
      const comp = this;
      let i = 0;
      firebase.storage().ref('gallery/Paul_Avery-Proposal-41.jpg').getDownloadURL().then(url => {
        comp.appHeader = url;
      })
      while (i < 60) {
        let path = `gallery/Paul_Avery-Proposal-${i + 1}.jpg`;
        firebase.storage().ref(path).getDownloadURL().then(url => {
          comp.downloadUrlsArray.push(url)
        }).catch(err => {
          console.log(err.message)
        })
        i++
      }

    },

    components: {
      'gallery': VueGallery
    },
  }
</script> 

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
    cursor: pointer;
  }
</style>