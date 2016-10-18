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
  onShow:function () {
     wx.getStorage({
         key: 'name',
         success: function(res) {
             console.log(res.data)
         }
      })
  },
  inputName:function (event) {
    if (event.detail.value) {
        this.setData({
          name:event.detail.value
        })
    }
  },
  inputPwd:function (event) {
     var that=this;
    if (event.detail.value) {
        this.setData({
          pwd:event.detail.value
        })
    }
    if (this.data.name&&this.data.pwd) {
        this.setData({
          type:"primary",
          disabled:false
       });
       wx.setStorage({
           key:"name",
           data:that.data.name
      });
      wx.setStorage({
          key:"pwd",
          data:that.data.pwd
     })
    }
  }
})
