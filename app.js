import Vue from 'vue'
import b from './public/b'
import test from './public/test.vue'
import './public/index.scss'

new Vue({
  data: {
    aaa: 123
  },
  components: {
    test
  },
  methods: {
    parenttest() {
      console.log('parenttest')
    }
  }
}).$mount('#app')
