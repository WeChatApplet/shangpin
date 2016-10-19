//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
     recommend:[],
     inputValue:''
  },
  onLoad: function () {
     var that=this;
     wx.request({
      //  url: 'http://localhost:8090/mock/search.json',
      url:'http://zhengzh.applinzi.com/weixindata/search.json'
       header: {
           'Content-Type': 'application/json'
       },
       success: function(res) {
         console.log(res.data);
         that.setData({
            recommend:res.data
         })
      },
      fail:function (error) {
         console.log(error);
      }
      })
   },
   canaelText:function () {
      this.setData({
         inputValue:''
      })
   },
   textchanged:function (e) {
      console.log(e.detail.value);
      this.setData({
         inputValue:e.detail.value
      })
   }
})
