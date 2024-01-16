<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="body-box">
    <Sidebar class="left"></Sidebar>
    <div class="right">
      <header>
        <div class="vip">开通VIP</div>
        <div class="avatar"><i class="iconfont icon-touxiang"></i></div>
      </header>
      <div class="page">
        <RouterView/>
      </div>

    </div>
    <div class="float-box">
      <i class="iconfont icon-kefu"></i>
      在线客服
    </div>
  </div>


</template>

<style scoped lang="scss">
.body-box {
  display: flex;

  .left {
    width: 200px;
    box-shadow: 10px 5px 5px #eee;
  }

  .right {
    width: calc(100vw - 200px);

    header {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 20px;
      border-bottom: 1px solid #f1f0f1;

      .vip {
        font-size: 18px;
        font-weight: bold;
        color: #0e0606;
        background: #f0c48b;
        height: 30px;
        line-height: 30px;
        padding:0 20px;
        border-radius: 15px 15px 15px 3px;
        cursor: pointer;
      }

      .avatar{
        color: var(--c-main);
        margin-left: 20px;
        cursor: pointer;
        .iconfont{
          font-size: 30px;
        }
      }
    }

    .page{
      width: 100%;
      height: calc(100vh - 60px);
    }
  }

  .float-box{
    position: fixed;
    bottom: 30px;
    right: 0;
    padding: 0 10px;
    border-radius: 15px 0 0 15px;
    background: var(--c-main);
    height: 30px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    .iconfont{
      padding-right: 10px;
    }
  }
}


</style>
