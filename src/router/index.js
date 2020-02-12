import Vue from 'vue'
import Router from 'vue-router'
import Story from '@/components/Story'
import Gallery from '@/components/Gallery'
import Registry from '@/components/Registry'
import RSVP from '@/components/RSVP'
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
      path: '/gallery',
      name: 'Gallery',
      component: Gallery
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP
    },
    {
      path: '/upload',
      name: 'Upload',
      component: Upload
    }
  ]
})