<script setup>
import VideoList from '../components/VideoList.vue'
import { reactive } from 'vue'

const playListData = reactive({
  title: '播放列表',
  list: []
})

const videoData = reactive({
  title: '视频',
  list: []
})

const addVideo = () => {
}


const handleFileChange = (event) => {
  const input = event.target;
  if (input.files && input.files.length > 0) {
    const newVideo = {
      file: input.files[0],
      url: URL.createObjectURL(input.files[0]),
      label: input.files[0].name,
      tools: ['setting', 'add', 'del', 'edit', 'upload'],
      id:Symbol()
    };
    playListData.list.unshift(newVideo);
  }
};

const addPlayList = () => {
  alert('addPlayList')
}
</script>

<template>
  <div class="body">
    <div class="header">
      <input type="file" style="display: none" name="video" id="video" accept="video/*" @change="handleFileChange">
      <div class="btns">
        <label class="btn" @click="addVideo" for="video">
          新建视频
        </label>

        <div class="btn" @click="addPlayList">新建播放列表</div>
      </div>
      <div class="search-bar">
        <input type="text" placeholder="搜索视频">
        <div class="icon-box">
          <i class="iconfont icon-sousuo"></i>
        </div>
      </div>
    </div>
    <div class="main">
      <video-list :list="playListData.list" :title="playListData.title" />
      <video-list :list="videoData.list" :title="videoData.title" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  height: 100%;

  .header {
    padding: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .btns {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .btn {
        padding: 0 20px;
        height: 30px;
        border: 2px solid var(--c-main);
        color: var(--c-main);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        & + .btn {
          margin-left: 20px;
        }
      }
    }

    .search-bar {
      position: relative;

      input {
        padding-left: 15px;
        padding-right: 30px;
        border: 1px solid #f3f4f2;
        height: 30px;
        border-radius: 15px;
        background: transparent;

        &::placeholder {
          color: #95a398;
        }
      }

      .icon-box {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        border: 3px solid transparent;
        border-radius: 50%;
        background: #eaece9;
        width: 30px;
        height: 30px;
        padding: 3px;
        background-clip: padding-box;

        .iconfont {
          font-size: 18px;
        }
      }

    }

  }

  .main {
    padding: 0 30px 30px 30px;
    overflow: auto;
    height: calc(100% - 90px);
    border-top: 1px solid #e7f5e8;
  }

}

</style>