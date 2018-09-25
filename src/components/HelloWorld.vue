<template>
  <div class="hello">
    <!--加密-->
        <div class="example-box">
            <div class="title">加密示例</div>
            <p class="msg">明文：{{ msg }}</p>
            <button class="encrypt-btn" @click="encrypt">加密</button>
            <p class="msg">{{ encryptMsg }}</p>
        </div>
        <!--解密-->
        <div class="example-box">
            <div class="title">解密示例</div>
            <button class="encrypt-btn" @click="decrypt">解密</button>
            <p class="msg">{{ decryptMsg }}</p>
        </div>
  </div>
</template>

<script>
import secret from "../utils/secret";

export default {
  name: "HelloWorld",
  data() {
    return {
      key: "0000000000000000",
      msg: "我爱你",
      encryptMsg: "",
      decryptMsg: ""
    };
  },
  methods: {
    encrypt() {
      this.encryptMsg = secret.Encrypt(this.msg, this.key);
    },
    decrypt() {
      this.decryptMsg = secret.Decrypt(this.encryptMsg, this.key);
    }
  }
};
</script>

<style scoped>
.msg {
  color: #333;
  text-align: center;
  font-size: 24px;
  min-width: 40px;
  line-height: 40px;
}
.encrypt-btn {
  display: block;
  margin: 15px auto;
  font-size: 14px;
  padding: 10px 15px;
  text-align: center;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  background-color: #409eff;
  -webkit-appearance: none;
  border-radius: 4px;
  -webkit-user-select: none;
  min-width: 100px;
}
.example-box {
  margin: 100px auto 0;
}
.example-box .title {
  font-size: 24px;
  color: #333;
  text-align: center;
  font-weight: bold;
}
</style>
