<template>
  <div class="home">
    <p></p>
    <img src="../assets/applogo.png" width="200" height="200">
    <div class="divdiven"></div>

<!--    <div class="textdiv">星 示</div>-->
    <div class="textdiv">检  测</div>
    <div style="height: 1vw;"></div>
    <div class="divimg">
      <div class="textdiv2">同步检测</div>
      <p style="width: 4vw;"></p>
      <div class="textdiv2">智能检测</div>
    </div>
    <div style="height: 20vw"></div>

  </div>


</template>

<script CHARSET="UTF-8">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {}
  },
  name: 'Home',
  created() {
    this.reloadView();
  },
  methods: {
    reloadView() {
      let time = 2;
      let _this = this;
      let timer = setInterval(function () {
        time--;

        if (time == 0) {
          clearInterval(timer);
          // console.log("-----reloadView-----"+time);

          _this.$router.push({path:'login'});
        }
      }, 1000);
    },
  }

}
</script>
<style scoped lang="less">
.aLink {
  font-size: 2vw;
  color: lightgrey;
}

.home {
  background-color: white;
  margin-bottom: 0vw;

  p:first-child {
    height: 4vw;
  }
}

.textdiv {
  font-size: 4vw;
  color: gray;
}

.divdiven {
  height: 4vw;
}

.divimg {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0;

  img {
    width: 50px;
    margin: 0;
    opacity: 0.5;
  }
}

.textdiv2 {
  margin-top: 0vw;
  font-size: 2vw;
  font-style: normal;
}

</style>
