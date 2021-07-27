<template>
  <div>

    <div style="height: 10vw"></div>
    <!--1        头部-->
    <div class="top">
      <p></p>
      <p>请 输 入 以 下 信 息</p>
      <p></p>
    </div>
    <!--        分割-->
    <div style="height: 5vw"></div>

    <!--    1    零件号输入-->
    <div class="divinput">
      <div class="divinputP">
        <div style="width: 1vw"></div>
        <p>零件号</p>
        <div style="width: 5vw"></div>
        <select class="selectP" v-model="partNum"  @change="selectPartNum()">
          <option disabled selected value>请选择零件号</option>
          <option value ="T155300360">T155300360</option>
          <option value ="T215400321">T215400321</option>
          <option value ="T218400320">T218400320</option>
        </select>
      </div>
    </div>

    <!--        2 检验方式-->
    <div class="divinput">
      <div class="divinputP">
        <div style="width: 0vw"></div>
        <p>检验方式</p>
        <div style="width: 4.4vw"></div>
        <select class="selectP" v-model="valueRen"  @change="selectRen()">
          <option disabled selected value>请选择检验方式</option>
          <option value ="焊接检验">焊接检验</option>
          <option value ="尺寸检验">尺寸检验</option>
        </select>
      </div>
    </div>

    <!--        3 检验班组-->
    <div class="divinput">
      <div class="divinputP">
        <div style="width: 0vw"></div>
        <p>检验班组</p>
        <div style="width: 4.4vw"></div>
        <select class="selectP" v-model="valueUser"  @change="selectRen()">
          <option disabled selected value>请选择检验班组</option>
          <option value ="W11班">W11班</option>
          <option value ="W12班">W12班</option>
        </select>
      </div>
    </div>




    <div style="margin: 2vw">
      <van-button color="#36C364" type="primary" size="large" @click="loginBtn">开 始 检 验</van-button>
    </div>

  </div>
</template>

<script CHARSET="UTF-8">
import Toast from "vant/lib/toast";
import {Dialog} from "vant";
import dropdown from 'vue-dropdowns';

export default {
  name: "Login",
  data() {
    return {
      valueRen: '',//用户选择审核范围；
      partNum: '',//零件号
      partName: '',//零件名称
      checkItem: '',//检验项目，返回后端用
      lStorage: '',//本地存储
      sStorage: '',//session存储
      loginTime:'',//登录时间，用于计算系统运行时间
      valueUser:'',//检验班组
    };
  },
  created() {

    //判断浏览器，是否支持localstorage
    if (localStorage) {
      this.lStorage = localStorage;
    }

    if (sessionStorage) {
      this.sStorage = sessionStorage;
    }

    //情况sessionStorage中的数据
    this.sStorage.clear();

    //刷新或下次登录后，保留上次登录信息；
    if (this.lStorage.getItem("partNum") != null) {
      this.partNum = this.lStorage.getItem("partNum");
    }

    if (this.lStorage.getItem("valueRen") != null) {
      this.valueRen = this.lStorage.getItem("valueRen");
    }

    if (this.lStorage.getItem("valueUser") != null) {
      this.valueUser = this.lStorage.getItem("valueUser");
    }

  },
  components: {
    'dropdown': dropdown,
  },

  methods: {

    selectRen(){
      console.log(this.valueRen);
    },

    selectPartNum(){
      console.log(this.partNum);
    },


    //登录按钮点击事件
    async loginBtn() {

      //将本次检验内容存入localStorage；
      this.lStorage.setItem("valueRen", this.valueRen);
      this.lStorage.setItem("partNum", this.partNum);
      this.lStorage.setItem("valueUser", this.valueUser);
      this.sStorage.setItem("partNum", this.partNum);
      this.sStorage.setItem("loginTime", new Date().getTime());

      //依据检验类型，赋值checkItem
      if (this.valueRen == "焊接检验") {
        this.checkItem = 1;
      } else if (this.valueRen == "尺寸检验") {
        this.checkItem = 2;
      }

      //向后端发送数据，并获取零件名称
      let tempData = await this.$http.get('basicinfo/login',
          {
            params: {
              partNum: this.partNum,
              checkItem: this.checkItem,
              valueUser: this.valueUser,
            }
          }).then((resp) => {
        this.sStorage.setItem("partName",resp.data);
        console.log("data = " + resp.data);
      });

      //跳转至产品检测页面
      setTimeout(() => {
        this.$router.push({
          path: this.partNum,
        });
      }, 2000);
      Toast.success('登录成功');
    },

  },

}
</script>

<style scoped lang="less">
.selectP{
  border: white;
  margin: 0vw;
  color: black;
  text-align: left;
  font-size: 20px;
}


.dropdownDiv {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.divinput {
  margin-left: 35vw;
  font-size: 1.5vw;
  color: grey;
}

.divinputP {
  margin: 0;
  margin-left: 1.7vw;
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 20px;
}

.partNumInputDatalist {
  margin: 0;
  border-width: 0;
  font-size: 1.5vw;
  font-weight: normal;
  color: black;

  input::-webkit-input-placeholder {
    color: #fffafa;
  }

  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #fffafa;
  }

  input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #fffafa;
  }

  input:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #fffafa;
  }
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

