<template>
  <div class="T155300630">

    <!--1        头部-->
    <table width="100%" border="0" cellspacing="1" cellpadding="0" bgcolor="#FFFFFF" class="table"
           align="center">
      <tr>
        <td colspan="1" rowspan="2" width="15%" class="tableTitle">
          <img src="../assets/tomato.png" width="80" height="70"></td>
        <td colspan="3" rowspan="2" class="tableTitle">凸 焊 视 觉 检 测 系 统</td>
        <td colspan="1" rowspan="1" width="26%" class="tableDate">{{ checkDate }}</td>
      </tr>

      <tr>
        <td colspan="1" rowspan="1" width="26%" class="tableTime">{{ checkTime }}</td>
      </tr>

    </table>


    <!--2  正文内容-->
    <p class="pDivider"/>
    <div class="contentDiv">
      <div class="imageDiv">
        <img class="img1" src="../assets/5300630.png" height="400" width="500"/>
        <p class="imgP1" :style="{background:bg1}">1</p>
        <p class="imgP2" :style="{background:bg2}">2</p>
        <p class="imgP3" :style="{background:bg3}">3</p>
        <p class="imgP4" :style="{background:bg4}">4</p>
        <p class="imgP5" :style="{background:bg5}">5</p>
        <p class="imgP6" :style="{background:bg6}">6</p>
        <p class="imgP7" :style="{background:bg7}">7</p>
        <p class="imgP8" :style="{background:bg8}"><span>{{ statusName }}</span></p>
      </div>

      <div class="contentTableDiv">
        <van-button color="#36C364" type="primary" size="small" @click="clickReturn">回 首 页</van-button>
        <p style=" margin: 0.5vw"></p>
        <table width="100%" border="0" cellspacing="1" cellpadding="4" bgcolor="#FFFFFF" class="contentTable"
               align="center">
          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">零件号</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true">{{ partNum }}</td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">零件名称</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true">{{ partName }}</td>
          </tr>

          <tr>
            <td colspan="2" rowspan="1" nowrap="true"></td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="2" rowspan="1" nowrap="true" style="font-weight: bold">检 测 状 态</td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">已检测</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true">{{ checkNum }} 件</td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">合格率</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true">{{ passRate }}%</td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">合格</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #4dd078">
              {{ qualifiedNum }} 件
            </td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">不合格</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #FFFF00">
              {{ unqualifiedNum }} 件
            </td>
          </tr>


          <tr>
            <td colspan="2" rowspan="1" nowrap="true"></td>
          </tr>
          <tr>
            <td colspan="2" rowspan="1" nowrap="true"></td>
          </tr>


          <tr>
            <td class="contentTableText" colspan="2" rowspan="1" nowrap="true" style="font-weight: bold">系 统 状 态</td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">运行时间</td>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true">{{ runTime }} 小时</td>
          </tr>

          <tr>
            <td class="contentTableText" colspan="1" rowspan="1" nowrap="true" style="background: #cccccc">系统状态</td>
            <td class="contentTableText" v-bind:style="{background:bgSystem}" colspan="1" rowspan="1" nowrap="true">
              {{ sysStatus }}
            </td>
          </tr>
        </table>

        <p style=" margin: 0.5vw"></p>
        <van-button color="#36C364" type="primary" size="small" @click="clickWriteData">查询/导出数据</van-button>
        <p style="height: 3vw"></p>

      </div>
    </div>
    <p class="pDivider"/>


    <!-- 3   尾部-->
    <div class="endDiv">
      <span class="endSpan">
<!--        <p>星 示</p>-->
        <p>检 测</p>
        <p>syncshow</p>
      </span>

      <p style="width: 16vw"></p>

      <!--      <span class="endSpan2" style="margin-left: 1vw;">-->
      <!--        <p style="font-size: 1.5vw">电话：13333334444</p>-->
      <!--      </span>-->

      <span class="endSpan2">
        <p>同 步 检 测</p>
        <p style="width: 3vw"></p>
        <p>智 能 检 测</p>
      </span>

    </div>

    <div class="endImgDiv">
      <img src="../assets/code.png" width="40" height="40">
    </div>

    <div class="endButtonDiv">
      <van-button color="#36C364" type="primary" size="small" block @click="clickWriteData">关 机</van-button>
    </div>

  </div>
</template>

<script>
import Toast from "vant/lib/toast";

export default {
  name: 'Home',
  data() {
    return {
      checkDate: '', //表头显示日期
      checkTime: '',//表头显示时间
      lStorage: '',//本地存储-未用
      sStorage:'',//sessionStorage
      bg1: '#A9A9A9FF', //螺母检测状态背景色
      bg2: '#A9A9A9FF',
      bg3: '#A9A9A9FF',
      bg4: '#A9A9A9FF',
      bg5: '#A9A9A9FF',
      bg6: '#A9A9A9FF',
      bg7: '#A9A9A9FF',
      bg8: '#A9A9A9FF',
      bgSystem: '#4dd078', //整体检验状态指示，背景色
      statusName: '未检测', //整体检验状态指示，显示文字-未检测/合格/不合格
      partNum: '',//检测零件的零件号
      partName: '',//检测零件的零件名称
      checkNum: 0,//总共检测零件的数量
      qualifiedNum: 0,//总共合格零件的数量
      unqualifiedNum: 0,//总共不合格零的数量
      passRate: 0,//合格率
      sysStatus: '正常',//系统状态
      timer: '',//计时器，定时发送任务
      websocket: '',//与后端连接的webSocket
      runTime: 0,//系统运行时间，（当前时间-登录时间）
      loginTime:'',//系统登录时间，从sessionStorage中获取
    }
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
    if (null != this.sStorage.getItem("partNum")){
      this.partNum = this.sStorage.getItem("partNum");
    }

    //从sessionStorage中获取零件名称，在Login中存储
    if (null != this.sStorage.getItem("partName")){
      this.partName = this.sStorage.getItem("partName");
    }

    //从sessionStorage中获取登录时间，在Login中存储
    if (null != this.sStorage.getItem("loginTime")){
      this.loginTime = this.sStorage.getItem("loginTime");
    }

  },
  mounted() {

    //与后端建立WebSocket连接，后端向前端发送检验结果用
    if ('WebSocket' in window) {
      this.websocket = new WebSocket('ws://localhost:8899/push');
      this.initWebSocket();
    } else {
      Toast.fail("当前浏览器，不支持")
    }

    //每隔1秒钟，检查websocket.readState值是否为1，即是否成功连接；如未成功连接，则尝试重新连接
    this.timer = setInterval(() => {
      if (this.websocket.readyState != 1){
        if ('WebSocket' in window) {
          this.websocket = new WebSocket('ws://localhost:8899/push');
          this.initWebSocket();
        }
      }
    }, 5000);

    //刷新系统时间
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);

    //每隔一分钟，刷新一下系统运行总时间
    this.timer = setInterval(()=> {
      this.setRunTimes();},60000
    );
  },
  methods: {
    /**
     * 改变螺母背景时间
     * */
    changeBgColorByValue(obj){
      let bg = '#A9A9A9FF';
      switch (obj) {
        case 1:
          bg = '#4dd078';
          break;
        case 2:
          bg = '#F4D000C7';
          break;
        default:
          bg = '#A9A9A9FF';
          break;
      }
      return bg;
    },

    /**
     * 初始化WebSocket
     * */
    initWebSocket() {
      // 连接错误
      this.websocket.onerror = this.setErrorMessage

      // 连接成功
      this.websocket.onopen = this.setOnopenMessage

      // 收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage

      // 连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage

      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },

    /**
     * WebSocket状态打印
     * */
    setErrorMessage() {
      console.log('WebSocket连接发生错误   状态码：' + this.websocket.readyState)
    },
    setOnopenMessage() {
      console.log('WebSocket连接成功    状态码：' + this.websocket.readyState)
    },
    setOncloseMessage() {
      console.log('WebSocket连接关闭    状态码：' + this.websocket.readyState)
    },
    onbeforeunload() {
      this.closeWebSocket()
    },
    closeWebSocket() {
      this.websocket.close()
    },

    /**
     * 根据后台从WebSocket中推送的数据，更新：
     * 螺母检测状态
     * 整体检测状态
     * 整体检测文字
     * 合格数量
     * 不合格数量
     * 合格率
     * */
    setOnmessageMessage(event) {
      // 根据服务器推送的消息做自己的业务处理
      // console.log('服务端返回：' + event.data)
      let returnData = event.data;
      let obj = JSON.parse(returnData);

      //根据返回数据，改变对应颜色
      this.bg1 = this.changeBgColorByValue(obj.nut1);
      this.bg2 = this.changeBgColorByValue(obj.nut2);
      this.bg3 = this.changeBgColorByValue(obj.nut3);
      this.bg4 = this.changeBgColorByValue(obj.nut4);
      this.bg5 = this.changeBgColorByValue(obj.nut5);
      this.bg6 = this.changeBgColorByValue(obj.nut6);
      this.bg7 = this.changeBgColorByValue(obj.nut7);
      this.bg8 = this.changeBgColorByValue(obj.result);
      this.checkNum = obj.totalNum;
      this.qualifiedNum = obj.conformNum;
      this.unqualifiedNum = obj.unConformNum;
      this.passRate = ((this.qualifiedNum/ this.checkNum)*100).toFixed(1);

      if (obj.result == 1){
        this.statusName = '合格';
      }else if (obj.result == 2){
        this.statusName = '不合格';
      }else {
        this.statusName = '未检测';
      }

    },
    /**
     * 回首页按钮
     */
    clickReturn(){
      setTimeout(() => {
        this.$router.push({
          path: 'login',
        });
      }, 2000);
      Toast.success('回首页');
    },

    /**
     * 导出数据按钮
     */
    clickWriteData() {
      setTimeout(() => {
        this.$router.push({
          path: 'writeData',
        });
      }, 2000);
      Toast.success('去导出');
    },

    /**
     * 设置系统总运行时间
     */
    setRunTimes(){
      let tempTime = new Date().getTime();
      this.runTime = ((tempTime - this.loginTime)/3600000).toFixed(1)
    },


    /**
     * 设置显示系统时间
     */
    setNowTimes() {
      let myDate = new Date();
      // console.log(myDate)
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
          myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
          myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
          myDate.getMinutes() < 10
              ? "0" + myDate.getMinutes()
              : myDate.getMinutes()
      );
      let sec = String(
          myDate.getSeconds() < 10
              ? "0" + myDate.getSeconds()
              : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.checkDate = yy + " " + "年" + " " + mm + " " + "月" + " " + dd + " " + "日"
      this.checkTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
  }
  ,
}
</script>


<style scoped lang="less">
.endButtonDiv {
  display: flex;
  align-content: center;
  margin-top: -5vw;
  margin-left: 78.2vw;
  position: absolute;
  width: 14.5vw;
  border: 0vw;
}

.endImgDiv {
  display: flex;
  align-content: center;
  position: absolute;
  margin-top: -5vw;
  margin-left: 10vw;
  border: 0vw;

  img {
    border: 0vw;
    position: relative;
    margin-top: 0vw;
    border: 0vw;
  }
}

.endSpan2 {
  display: flex;
  flex-direction: row;
  position: relative;
  margin-left: 5vw;
  margin-top: 0vw;
  text-align: center;

  p {
    font-size: 2vw;
    margin: 0vw;
    border: 0vw;
  }
}

.endSpan {
  display: flex;
  flex-direction: column;
  margin: 0vw;
  border: 0vw;

  p {
    font-size: 1.3vw;
    margin: 0vw;
    border: 0vw;
  }
}

.endDiv {
  display: flex;
  flex-direction: row;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 0.8vw;
  border: 0vw;
  height: 5vw;
}

.contentTableText {
  font-size: 1.3vw;
}

.contentTableDiv {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 0vw;
}

.contentTable {
  border-style: solid;
  border-color: white;
  border-width: 0.1vw;
  border-left: white;
  border-right: white;
  margin-top: 0vw;
  margin-bottom: 0vw;
}

.imgP8 {
  position: absolute;
  margin-left: 55vw;
  margin-top: 1vw;
  width: 10vw;
  height: 10vw;
  text-align: center;
  vertical-align: middle;
  border-radius: 5vw;
  background: darkgrey;
  font-size: 2.5vw;
  color: black;

  span {
    width: 10vw;
    height: 10vw;
    position: absolute;
    text-align: center;
    margin-left: -5vw;
    margin-top: 3vw;
  }
}

.imgP7 {
  position: absolute;
  margin-left: 22vw;
  margin-top: 30vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.imgP6 {
  position: absolute;
  margin-left: 4vw;
  margin-top: 33.5vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.imgP5 {
  position: absolute;
  margin-left: 4vw;
  margin-top: 30vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.imgP4 {
  position: absolute;
  margin-left: 4vw;
  margin-top: 26.5vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.imgP3 {
  position: absolute;
  margin-left: 1vw;
  margin-top: 26.5vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.imgP2 {
  position: absolute;
  margin-left: 4vw;
  margin-top: 6vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.imgP1 {
  position: relative;
  margin-left: 22vw;
  margin-top: 6vw;
  width: 3vw;
  height: 3vw;
  text-align: center;
  border-radius: 1.5vw;
  background: darkgrey;
  font-size: 3vw;
  color: black;
}

.img1 {
  position: absolute;
  z-index: 0;
}

.imageDiv {
  display: flex;
  flex-direction: row;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 0vw;
  width: 350vw;
  height: 500vw;
}

.contentDiv {
  display: flex;
  flex-direction: row;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 0.8vw;
  margin-bottom: 0.8vw;
  height: 40vw;
}

.pDivider {
  width: 92.5vw;
  background: #cccccc;
  height: 0.05vw;
  margin: 0vw;
}

.table {
  border-style: solid;
  border-color: white;
  border-width: 0.1vw;
  margin-top: 0vw;
  margin-bottom: 0vw;
}

.tableTitle {
  font-size: 4.5vw;
  font-weight: bold;
  text-align: center;
  vertical-align: center;
  color: black;
  background-color: white;
}

.tableDate {
  font-size: 1.3vw;
  text-align: center;
  vertical-align: bottom;
  color: black;
  background-color: white;
}

.tableTime {
  font-size: 1.3vw;
  text-align: center;
  vertical-align: top;
  color: black;
  background-color: white;
}

.home {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  margin-right: 3vw;
  margin-top: 1vw;
}

</style>
