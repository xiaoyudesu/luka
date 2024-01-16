<script>

import { reactive } from 'vue'

export default {
  name: 'InfoCard',
  setup() {

    const state = reactive({
      isShow:false,
      type:''
    })

    const show=(data)=>{
      state.isShow=true
      state.type=data.type
      setTimeout(()=>{
        state.isShow=false
      },3000)
    }

    return {
      show,
      state
    }
  }
}
</script>

<template>
  <Transition>
    <div class="info-box" v-if="state.isShow">
      <i class="iconfont icon-chenggong"></i>
      {{ state.type }}成功
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.info-box {
  width: 200px;
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 10px 20px;
  border: 1px solid #d7f4e1;
  border-radius: 5px;
  background: #ebf9f2;
  color: #73d084;
  font-size: 20px;

  i {
    padding-right: 10px;
    font-size: 24px;

  }
}

</style>