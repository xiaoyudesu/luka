<script setup>
import { defineProps,defineEmits } from 'vue'

const props=defineProps(['data']);
const emits=defineEmits(['close','ok'])
const closeFn=()=>{
  emits('close')
}
const confirmFn=()=>{
  emits('ok',{action:props.data.action})
}

</script>

<template>
<Transition>
  <div class="box" v-if="props.data.isShow">
    <div class="box-inner">
      <div class="header">
        <div class="title">
          {{props.data.action}}{{props.data.name}}
        </div>
        <div class="close-btn" @click="closeFn">X</div>
      </div>
      <div class="body">
        删除后无法恢复,确认删除?
      </div>
      <div class="footer">
        <div class="btn cancel" @click="closeFn">取消</div>
        <div class="btn ok" @click="confirmFn">确定</div>
      </div>
    </div>

  </div>
</Transition>

</template>

<style scoped lang="scss">


.box{
  background: rgba(0,0,0,0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  .box-inner{
    width: 500px;
    height: 300px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%,-50%);
    background: #f6f7f3;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .header{
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      color: #eee;
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 18px;
      background: #2b3b28;

      .close-btn{
        font-size: 24px;
        color: red;
        cursor: pointer;
      }
    }

    .body{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      flex: 1;
    }

    .footer{
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .btn{
        margin-left: 20px;

        border: 1px solid #eee;
        cursor: pointer;
        padding: 0 20px;
        height: 30px;
        line-height: 30px ;
        border-radius: 15px;

        &.cancel{
          color: #000;
          background: #fff;
        }

        &.ok{
          color: #fff;
          background: #d1736d;
        }
      }
    }
  }
}


</style>