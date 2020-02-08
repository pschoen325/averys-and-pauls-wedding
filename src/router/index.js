import Vue from 'vue'
import Router from 'vue-router'
import Story from '@/components/Story'
import Upload from '@/components/Upload.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Story',
      component: Story
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})