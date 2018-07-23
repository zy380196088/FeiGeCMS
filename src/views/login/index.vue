<template>
  <div class="login-page">
    <canvas class="canvas-wrap" id="login-page-canvas-background"></canvas>
    <div class="login-panel clearfix" id="login-box">
      <img class="logo-img" src="../../assets/img/login_logo.png" alt="">
      <h3 class="logo-text">飞鸽舆信互动管理平台</h3>
      <form class="login-form" ref="loginForm">
        <div v-for="item in formData" :key="item.index" class="input-item">
          <span class="input-item-icon">
            <i :class="item.iconClass"></i>
          </span>
          <input name="login_name" v-if="!item.isPwd" type="text" v-bind:placeholder="item.placeholder" v-model="item.value">
          <input name="login_name" v-if="item.isPwd" type="password" v-bind:placeholder="item.placeholder" v-model="item.value">
        </div>
        <div class="input-item" v-if="verifyCode.show">
          <input name="" type="text">
          <span>
            <img src="" alt="">
          </span>
        </div>
        <div class="remember-login-box">
          <input type="checkbox" id="remember-login">
          <label for="remember-login">记住账户</label>
        </div>
        <div class="login-btn" v-on:click="ajaxLogin">登录</div>
      </form>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    name: "login",
    props: [], // 父到子传参
    components: {}, // 组件接收
    mixins: [], // 混合
    created() {}, // 创建周期
    mounted() {
      this.renderCanvasBackground("login-page-canvas-background");
      this.axios({
        method: 'post',
        url: "/api/login2/generateImageVerifyText",
        data: {
          flag: 1
        }
      }).then(
        response => {
          console.log("/api/login2/generateImageVerifyText", response.data);
          if (response.data.error_code == 4) {
            this.$router.push({
              path: "/Login"
            });
          }
        },
        response => {
          console.log(response);
        }
      );
    },
    watch: {},
    computed: {}, // 计算属性
    filters: {}, // 过滤
    directives: {}, // 指令
    data() {
      return {
        loading: false,
        showDialog: false,
        formData: [{
            type: 'text',
            isPwd: false,
            iconClass: "iconfont icon-user-o",
            label: '用户名',
            value: "",
            placeholder: '请输入登录账号'
          },
          {
            type: 'password',
            isPwd: true,
            iconClass: "iconfont icon-key-o",
            label: '密码',
            value: "",
            placeholder: '请输入密码'
          }
        ],
        verifyCode: {
          show: true,
        },
        loginRules: {
          userName: [{
            required: true,
            trigger: "blur",
            validator: ""
          }],
          password: [{
            required: true,
            trigger: "blur",
            validator: ""
          }]
        },
        loginData: {
          login_name: '',
          password: '',
          verifiy_text: '',
          web_login_feature: '',
        }
      };
    },
    methods: {
      renderCanvasBackground(id) {
        /**
         * Created by zhouyu on 2017/9/5.
         */
        let canvas = document.getElementById(id);
        let ctx = canvas.getContext("2d");
        let opt = {
          particleAmount: 100, //粒子个数
          defaultSpeed: 0.5, //粒子运动速度
          letiantSpeed: 0.5, //粒子运动速度的变量
          particleColor: "rgba(192 ,217 ,214 , 0.2)", //粒子的颜色
          lineColor: "rgba(192 ,217 ,214 ,  0.02)", //网格连线的颜色
          defaultRadius: 4, //粒子半径
          letiantRadius: 2, //粒子半径的变量
          minDistance: 200 //粒子之间连线的最小距离
        };
        let line = opt.lineColor.match(/\d+/g);
        // console.log(line);
        let particle = [],
          w, h;
        let delay = 200,
          tid;
        init();
        window.addEventListener("resize", function () {
          winResize()
        }, false);

        function winResize() {
          clearTimeout(tid);
          tid = setTimeout(function () {
            getSize();
          }, delay)
        }

        function init() {
          getSize();
          for (let i = 0; i < opt.particleAmount; i++) {
            particle.push(new Partical());
          }
          loop();
        }

        function loop() {
          ctx.clearRect(0, 0, w, h);
          for (let i = 0; i < particle.length; i++) {
            particle[i].update();
            particle[i].draw();
          }
          for (let i = 0; i < particle.length; i++) {
            linePoint(particle[i], particle)
          }
          window.requestAnimationFrame(loop);
        }

        function linePoint(point, hub) {
          for (let i = 0; i < hub.length; i++) {
            let distance = getDistance(point, hub[i]);
            let opacity = 1 - distance / opt.minDistance;
            if (opacity > 0) {
              ctx.lineWidth = 0.5;
              ctx.strokeStyle = "rgba(" + line[0] + "," + line[1] + "," + line[2] + "," + opacity + ")";
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(hub[i].x, hub[i].y);
              ctx.closePath();
              ctx.stroke();
            }
          }
        }

        function getDistance(point1, point2) {
          return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
        }

        function getSize() {
          w = canvas.width = window.innerWidth;
          h = canvas.height = window.innerHeight;
        }

        function Partical() {
          this.x = Math.random() * w; //粒子的x轴坐标
          this.y = Math.random() * h; //粒子的y轴坐标
          this.speed = opt.defaultSpeed + opt.letiantSpeed * Math.random(); //粒子的运动速度
          this.directionAngle = Math.floor(Math.random() * 360); //粒子运动的方向
          this.color = opt.particleColor; //粒子的颜色
          this.radius = opt.defaultRadius + Math.random() * opt.letiantRadius; //粒子的半径大小
          this.vector = {
            x: this.speed * Math.cos(this.directionAngle), //粒子在x轴的速度
            y: this.speed * Math.sin(this.directionAngle) //粒子在y轴的速度
          };
          this.update = function () { //粒子的更新函数
            this.border(); //判断粒子是否到了边界
            this.x += this.vector.x; //粒子下一时刻在x轴的坐标
            this.y += this.vector.y; //粒子下一时刻在y轴的坐标
          };
          this.border = function () { //判断粒子是都到达边界
            if (this.x >= w || this.x <= 0) { //如果到达左右边界，就让x轴的速度变为原来的负数
              this.vector.x *= -1;
            }
            if (this.y >= h || this.y <= 0) { //如果到达上下边界，就让y轴的速度变为原来的负数
              this.vector.y *= -1;
            }
            if (this.x > w) { //下面是改变浏览器窗口大小时的操作，改变窗口大小后有的粒子会被隐藏，让他显示出来即可
              this.x = w;
            }
            if (this.y > h) {
              this.y = h;
            }
            if (this.x < 0) {
              this.x = 0;
            }
            if (this.y < 0) {
              this.y = 0;
            }
          };
          this.draw = function () { //绘制粒子的函数
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
          }
        }
      },
      ajaxLogin() {
        console.log(this.formData);
      }
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .login-page {
    position: relative;
    width: 100%;
    height: 100%;
    background: rgba(236, 245, 244, 1);
    color: rgb(102, 102, 102);
    .canvas-wrap {
      position: absolute;
      top: 0;
      left: 0;
    }
    .login-panel {
      width: 360px;
      height: 525px;
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      padding-top: 60px;
      width: 360px;
      box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      opacity: 0.7;
      border: 1px solid rgba(230, 230, 230, 1);
      .logo-img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
      }
      .logo-text {
        margin-top: 30px;
        width: 100%;
        height: 33px;
        font-size: 24px;
        font-family: PingFangSC-Regular;
        color: rgba(102, 102, 102, 1);
        line-height: 33px;
        text-align: center;
      }
      .login-form {
        margin: 0 auto;
        width: 280px;
        height: 300px;
        .input-item {
          box-sizing: border-box;
          display: inline-block;
          width: 100%;
          height: 42px;
          line-height: 40px;
          margin: 10px auto;
          background: rgba(255, 255, 255, 1);
          border-radius: 4px;
          border: 1px solid rgba(221, 221, 221, 1);
          .input-item-icon {
            float: left;
            width: 40px;
            height: 100%;
            i {
              font-size: 24px;
              line-height: 40px;
              font-weight: bold;
            }
          }
          input {
            float: left;
            box-sizing: border-box;
            display: block;
            width: 220px;
            height: 30px;
            margin: 5px;
            outline: none;
            border: 0;
            font-size: 16px;
            line-height: 16px;
            color: rgb(102, 102, 102)
          }
          input::placeholder {
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: rgba(221, 221, 221, 1);
            line-height: 30px;
          }
        }
        .remember-login-box {
          width: 200px;
          text-align: left;
          input[type=checkbox] {
            cursor: pointer;
          }
        }
        .login-btn {
          margin-top: 20px;
          width: 280px;
          height: 42px;
          line-height: 42px;
          background: rgba(95, 189, 171, 1);
          border-radius: 4px;
          border: 1px solid rgba(95, 189, 171, 1);
          font-size: 18px;
          font-family: MicrosoftYaHei;
          color: rgba(255, 255, 255, 1);
          cursor: pointer;
        }
      }
    }
  }

</style>
