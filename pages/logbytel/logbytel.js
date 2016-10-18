var app = getApp();
Page({
  data:{
    name:"",
    pwd:"",
    type:"default",
    disabled:true
  },
  onLoad: function () {

  },
  inputName:function (event) {
    if (event.detail.value) {
        this.setData({
          name:event.detail.value
        })
    }
  },
  inputPwd:function (event) {
    if (event.detail.value) {
        this.setData({
          pwd:event.detail.value
        })
    }
    if (this.data.name&&this.data.pwd) {
        this.setData({
          type:"primary",
          disabled:false
        })
    }
  }
})
