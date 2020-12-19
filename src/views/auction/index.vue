<template>
  <div class="page-market">
    <side-bar></side-bar>
    <div class="project-content">
      <head-menu></head-menu>
      <div class="market-search-box">
        <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div class="project-list">
        <ul>
          <li v-for="(item,index) in dapps" :key="index">
            <project-card :dapp="item"></project-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dapps from '@/mock/auction';
import SideBar from './SideBar.vue';
import HeadMenu from './HeadMenu.vue';
import ProjectCard from './ProjectCard.vue';

export default {
  components: {
    SideBar,
    HeadMenu,
    ProjectCard,
  },
  data() {
    return {
      dapps,
      value: '',
    };
  },
};
</script>

<style lang="less">
.page-market {
  display: flex;
  flex-direction: row;
  .project-content {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
    .market-search-box {
      height: 40px;
    }
  }
  .project-list {
    >ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
}
</style>
