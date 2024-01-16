<script setup>
import Dialog from './Dialog.vue'
import { defineEmits, defineProps, reactive } from 'vue'

const props = defineProps(['data'])
const emits = defineEmits(['del'])
let dialogData = reactive({
  name: props.data.label,
  isShow: false,
  action: ''
})
const settingFn = () => {
  alert('setting')
}
const addFn = () => {
  alert('add')
}
const copyFn = () => {
  alert('copy')
}
const downloadFn = () => {
  alert('download')
}
const delFn = () => {
  dialogData.isShow = true
  dialogData.action = '删除'
}


const editFn = () => {
  alert('edit')
}
const uploadFn = () => {
  alert('upload')
}
const dialogOK = () => {
  dialogData.isShow = false
  emits('del', { id: props.data.id })
}

const openVideo=()=>{
  window.open(props.data.url)
}
</script>

<template>
  <div class="card-box">
    <Dialog :data="dialogData" @close="dialogData.isShow=false" @ok="(data)=>dialogOK(data)" />
    <div class="card">

      <video :src="props.data.url" style="width:100%;height: 100%" />

      <div class="cover-box" @click="openVideo">
        <i class="iconfont icon-play-filling play-icon"></i>

        <div class="tools">
          <i class="iconfont icon-shezhi" v-if="props.data.tools.includes('setting')" @click.stop="settingFn"></i>
          <i class="iconfont icon-tianjia" v-if="props.data.tools.includes('setting')" @click.stop="addFn"></i>
          <i class="iconfont icon-fuzhi" v-if="props.data.tools.includes('setting')" @click.stop="copyFn"></i>
          <i class="iconfont icon-xiazai" v-if="props.data.tools.includes('setting')" @click.stop="downloadFn"></i>
          <i class="iconfont icon-shanchu" v-if="props.data.tools.includes('setting')" @click.stop="delFn"></i>
        </div>
      </div>

    </div>
    <div class="label-box">{{ props.data.label }}
      <i class="iconfont icon-bianji" v-if="props.data.tools.includes('edit')" @click="editFn"></i>
      <i class="iconfont icon-shangchuan upload" v-if="props.data.tools.includes('upload')" @click="uploadFn"></i>
    </div>
  </div>

</template>

<style scoped lang="scss">
.card-box {
  width: 260px;
  margin-bottom: 20px;

  .card {
    overflow: hidden;
    height: 150px;
    border-radius: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #eee;

    .cover-box {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
      z-index: 1;
      background: rgba(0,0,0,0.5);

      .play-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 50px;
        color: #fff;
      }

      .tools {
        padding: 10px;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        border-radius: 5px 0 0 5px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        flex-direction: column;

        i {
          cursor: pointer;
          font-size: 14px;

          & + i {
            //padding-top: 5px;
          }
        }

      }
    }


    &:hover {
      .cover-box {
        visibility: visible;
      }
    }
  }


  .label-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #000;
    margin-top: 10px;

    i {
      visibility: hidden;
      padding: 0 5px;
    }

    &:hover {
      color: var(--c-main);

      i {
        visibility: visible;
        cursor: pointer;
      }
    }


    .upload {
      margin-left: auto;
    }
  }
}
</style>