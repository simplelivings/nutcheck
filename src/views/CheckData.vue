<template>
  <div>

    <div class="titleDiv">
      <p style="width: 30vw"></p>
      <p class="title" align="center">查询结果</p>
      <p style="width: 20vw"></p>
      <van-button style="width: 13vw;" color="#36C364" type="primary" size="normal" @click="clickReturn">回 检 测 页</van-button>
      <p style="width: 3vw"></p>
      <van-button style="width: 13vw;"  color="#36C364" type="primary" size="normal" @click="clickReturn">回 查 询 页</van-button>
    </div>

    <div class="viceTitleDiv">
      <p class="viceTitleText">日期：{{ checkDate }}</p>
      <p class="viceTitleText" style="width: 15vw"></p>
    </div>


    <table width="100%" border="0" cellspacing="0" frame="void" cellpadding="4" bgcolor=white class="table"
           align="center">
      <tr>
        <td nowrap="true" width="15%" class="tableTitle" rowspan="1">零件号</td>
        <td colspan="1" class="tableTitle">检验类型</td>
        <td colspan="1" class="tableTitle">检验日期</td>
        <td colspan="1" class="tableTitle">检验时间</td>
        <td colspan="1" class="tableTitle">检验班组</td>
        <td colspan="1" class="tableTitle">检验数量</td>
        <td colspan="1" class="tableTitle">检验结果</td>
        <td colspan="1" width="10%" class="tableTitle" rowspan="1">说明</td>
        <td colspan="1" width="3%" style="background-color: white;border-color: white" rowspan="1"></td>
      </tr>


      <tr v-for="(item,index) in checkInfoList">
        <td nowrap="true" class="tableContent" v-for="cc in item"
            :style="{background:(cc=='不合格'||cc=='N2'||cc=='N3'||cc=='N4'||cc=='N5'||cc=='NO')?'#FFD700':'#00DD33'}">
          {{cc}}
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import Toast from "vant/lib/toast";

export default {
  name: "CheckData",
  data() {
    return {
      checkInfoList: [],//检验详细数据
      lStorage: '',//本地存储-未用
      sStorage:'',//sessionStorage
      partNum: '',//检测零件的零件号
      checkDate: '',//当前时间
      startDate: '',//查询开始时间
      endDate: '',//查询结束时间
    };
  },
  async created() {

    //获取本地存储，未用
    if (localStorage) {
      this.lStorage = localStorage;
    }

    //获取session存储
    if (sessionStorage) {
      this.sStorage = sessionStorage;
    }

    //获得当前日期，20xx年xx月xx日
    this.checkDate = new Date().getFullYear() + "年" + ((new Date().getMonth()) + 1) + "月" + new Date().getDate() + "日";
    //获得当前小时
    let checkTime = new Date().getHours();
    //获得当前分钟
    let checkMinute = new Date().getMinutes();

    //从sessionStorage中获取零件号，在WriteData中存储
    if (this.sStorage.getItem("partNum") != null) {
      this.partNum = this.sStorage.getItem("partNum");
    }

    //从sessionStorage中获取查询开始时间，在WriteData中存储
    if (this.sStorage.getItem("startDate") != null) {
      this.startDate = this.sStorage.getItem("startDate");
    }

    //从sessionStorage中获取查询结束时间，在WriteData中存储
    if (this.sStorage.getItem("endDate") != null) {
      this.endDate = this.sStorage.getItem("endDate");
    }

    console.log("======" + this.startDate + "==" + this.endDate);
    //按查询开始和结束时间，从后台取得查询数据列表，并放入checkInfoList中
    let tempData = await this.$http.get('/checkInfo/getData',
        {
          params: {
            startDate: this.startDate,
            endDate: this.endDate,
          }
        }).then((resp) => {
      this.checkInfoList = resp.data.checkInfoList;
    });

    console.log(this.checkInfoList);

  },
  methods: {
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

.titleDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 0vw;
}

.tableContent {
  font-size: 2vw;
  color: black;
  background-color: white;
}

.tableTitle {
  font-size: 2vw;
  font-weight: bold;
  color: black;
  background-color: lightskyblue;
}

.table {
  margin-left: 2vw;
  margin-right: 0vw;
  margin-top: 1.5vw;
}

.title {
  font-size: 3vw;
  font-family: 黑体;
  color: black;
  margin: 0;
}

.viceTitleDiv {
  height: 3vw;
  position: relative;
  margin: 0.5vw;
  margin-left: 3vw;
  font-size: 2vw;
}

.viceTitleText {
  float: left;
  margin: 0.5vw;
}

.home {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 5vw;
}
</style>
