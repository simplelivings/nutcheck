<template>
  <div style="height: 10vw"></div>

  <div style="margin: 1vw" class="btnDiv">
    <van-button color="#36C364" type="primary" style="width: 20vw" size="normal" @click="clickReturn">回 检 测 页</van-button>
  </div>

  <!--1        头部-->
  <div class="top">
    <p></p>
    <p> 请 输 入 以 下 信 息</p>
    <p></p>
  </div>
  <!--        分割-->
  <div style="height: 3vw"></div>

  <label for="start">开始时间：</label><input id="start" type="date" v-model="startDate"/>
  <div style="height: 3vw"></div>
  <label for="end">截止时间：</label><input id="end" type="date" v-model="endDate"/>


  <div style="height: 3vw"></div>
  <div style="margin: 1vw" class="btnDiv">
    <van-button color="#36C364" type="primary" style="width: 20vw" size="normal" @click="checkBtn">查 询 数 据</van-button>
    <p style="width: 5vw"></p>
    <van-button color="#36C364" type="primary" style="width: 20vw" size="normal" @click="writeBtn">导 出 数 据</van-button>
  </div>

</template>

<script charset="UTF-8">
import {Toast} from "vant";

export default {
  name: "WriteData",
  data() {
    return {
      startDate: '',//查询开始时间
      endDate: '',//查询结束时间
      lStorage: '',//本地存储-未用
      sStorage:'',//sessionStorage
      partNum: '',//检测零件的零件号
    };
  },
  created() {
    //获取本地存储，未用
    if (localStorage) {
      this.lStorage = localStorage;
    }

    //获取session存储
    if (sessionStorage) {
      this.sStorage = sessionStorage;
    }

    //从sessionStorage中获取零件号，在Login中存储
    if (this.sStorage.getItem("partNum") != null) {
      this.partNum = this.sStorage.getItem("partNum");
    }

    //1 初始化开始时间与结束时间，默认一个月
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let monthEnd = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10){
      month = '0' + month;
    }
    if (day < 10){
      day = '0' + day;
    }
    if (monthEnd < 10){
      monthEnd = '0' + monthEnd;
    }
    this.startDate = year + '-' + month + '-' + day;
    this.endDate = year + '-' + monthEnd + '-' + day;
  },
  methods: {
    /**
     * 数据导出按钮，按开始时间和结束时间，将数据导出至excel表中
     * @returns {Promise<void>}
     */
    async writeBtn() {
      let tempData = await this.$http.get('/checkInfo/writeData',
          {
            params: {
              startDate: this.startDate,
              endDate: this.endDate,
            }
          });
      Toast.success("数据已导出");
    },

    /**
     * 查询按钮，按开始时间和结束时间，查询检验记录，并跳转至显示界面
     */
    checkBtn() {
      //查询开始与结束时间，放入sessionStorage中；
      this.sStorage.setItem("startDate", this.startDate);
      this.sStorage.setItem("endDate", this.endDate);

      console.log("==" + this.startDate + "==" + this.endDate);

      setTimeout(() => {
        this.$router.push({
          path: 'checkData',
        });
      }, 2000);
      Toast.success("查询成功");
    },

    /**
     * 返回零件检验界面
     */
    clickReturn() {
      setTimeout(() => {
        this.$router.push({
          path: this.partNum,
        });
      }, 2000);
      Toast.success('跳转成功');
    },
  },

}
</script>

<style scoped lang="less">

.btnDiv {
  position: relative;
  margin-left: 50vw;
  display: flex;
  justify-content: center;
  width: 100vw;
}

.top {
  background-color: #ffffff;
  height: 12.889vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 4vw;

  p {
    margin-left: 1vw;
    font-size: 4vw;
    font-weight: bold;
    color: #cccccc;
  }
}
</style>
