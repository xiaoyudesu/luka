<script setup>
import { defineProps, ref } from 'vue'
import VideoCard from '../components/VideoCard.vue'
import InfoCard from '../components/InfoCard.vue'

const props = defineProps(['list', 'title'])
const infoRef = ref(null)

const delFn=(item)=>{
  let index='';
  props.list.map((e,i)=>{
    if(e.id===item.id){
      index=i
    }
  })

  // eslint-disable-next-line vue/no-mutating-props
  props.list.splice(index,1)
  infoRef.value.show({
    type: '删除'
  })
}
</script>

<template>
  <div class="list-box">
    <InfoCard ref="infoRef" />
    <div class="title">{{ props.title }}
      <div class="num">{{ props.list.length }}</div>
    </div>
    <div class="list" v-if="(props.list||[]).length">
      <template v-for="item in props.list" :key="item.id">
        <video-card class="item" :data="item" @del="(item)=>delFn(item)"></video-card>
      </template>
    </div>
    <div v-else class="nodata">暂无数据</div>

  </div>

</template>

<style scoped lang="scss">
.list-box {
  width: 100%;
  padding: 20px 0;

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    margin-bottom: 15px;

    .num {
      color: #fff;
      font-size: 12px;
      background: #000;
      padding: 0px 10px;
      border-radius: 7px;
      height: 14px;
      line-height: 14px;
      margin-left: 10px;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      margin-right: 30px;
    }
  }

  .nodata {
    font-size: 24px;
    color: #000;
    height: 150px;
    line-height: 150px;
    width: 100%;
    text-align: center;
  }
}


</style>