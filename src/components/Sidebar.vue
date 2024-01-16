<script setup>
import { reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const menuList = reactive([{
  id: '1',
  label: '我的视频',
  link: '/'
}, {
  id: '2',
  label: '我的群组',
  link: '/mygroup'
}])

const toolList = reactive([{
  id: '1',
  label: '在线编辑',
  icon: 'icon-M_jianji'
}, {
  id: '2',
  label: '高级录制',
  icon: 'icon-luzhi'
}])

const spaceData = reactive({
  used: 140,
  total: 2 * 1024
})
</script>

<template>
  <div class="side">
    <router-link to="/" class="logo-box">
      <i class="logo iconfont icon-luzhi"></i>
      <div class="logo-label">录咖</div>
    </router-link>
    <div class="menu">
      <router-link :to="item.link" :class="['menu-item',item.link===router.currentRoute.value.path?'active':'']"
                   v-for="item in menuList" :key="item.id">
        {{ item.label }}
      </router-link>


    </div>

    <div class="tool">
      <div class="tool-item" v-for="item in toolList" :key="item.id"><i
        :class="['iconfont',item.icon]"></i>{{ item.label }}
      </div>
    </div>
    <div class="space-info">
      <div class="line-bar">

        <div class="line-bar-used" :style="{width: `${spaceData.used * 100 / spaceData.total}%`}"></div>
      </div>
      <div class="info">已使用: <span class="used">{{ spaceData.used }}MB</span> / <span
        class="total">{{ spaceData.total / 1024 }}GB</span></div>
      <div class="upgrade">
        <i class="iconfont icon-shengji"></i>
        升级
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
.side {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .logo-box {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: var(--c-main);
    cursor: pointer;

    .iconfont {
      //width: 40px;
      font-size: 40px;
    }

    .logo-label {
      margin-left: 10px;
    }

  }

  .menu {
    flex: 1;

    .menu-item {
      color: #1e3e25;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
      text-decoration: none;

      &.active {
        color: var(--c-main);
      }

    }
  }

  .tool {
    padding: 10px;

    .tool-item {
      height: 30px;
      border: 2px solid var(--c-main);
      color: var(--c-main);
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      & + .tool-item {
        margin-top: 10px;
      }

      .iconfont {
        margin-right: 5px;
      }
    }
  }


  .space-info {
    padding: 10px;
    padding-bottom: 20px;

    .line-bar {
      width: 100%;
      height: 4px;
      background: #dddddc;
      border-radius: 2px;

      .line-bar-used {
        height: 100%;
        background: var(--c-main);
        border-radius: 2px;
      }
    }

    .info {
      font-size: 12px;
      color: #313030;
      padding-top: 5px;

      .total {
        color: #a5a5a5;
      }
    }

    .upgrade {
      font-size: 12px;
      padding-top: 10px;
      color: var(--c-main);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      cursor: pointer;
    }

  }
}

</style>