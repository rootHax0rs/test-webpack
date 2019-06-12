<template>
  <div class="box"
       @click="childtest">
    test{{childData}}
    <div class="box1">
      <img src="./aaa.png" />
      <img src="./16302c4bc8dd3596.jpg" />
    </div>
    <div class="box2"></div>
  </div>
</template>

<script>
export default {
  props: ['test'],
  data () {
    return {
      childData: 123
    }
  },
  methods: {
    childtest () {
      this.$emit('childtest')
    }
  },
  created () {
    console.log(this.test)
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background: red;
  .box1 {
    width: 50px;
    height: 50px;
    background: green;
  }
  .box2 {
    width: 10px;
    height: 10px;
    background: #000;
  }
}
</style>




