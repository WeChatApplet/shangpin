//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
     bannerList:[],
     list:[]
  },
  onLoad: function () {
     var that=this;

     //加载banner图的图片信息
     wx.request({
      //  url: 'http://localhost:8090/mock/IndexBannerList.json',
      url:'http://zhengzh.applinzi.com/weixindata/IndexBannerList.json',
       header: {
           'Content-Type': 'application/json'
       },
       success: function(res) {
         // console.log(res.data);
         that.setData({
            bannerList:res.data
         })
         // that.getData(list);
      }
   });

     //加载下边列表图片的图片信息
     wx.request({
      //  url: 'http://localhost:8090/mock/IndexPicList.json',
      url:'http://zhengzh.applinzi.com/weixindata/IndexPicList.json',
       header: {
           'Content-Type': 'application/json'
       },
       success: function(res) {
         // console.log(res.data);
         that.setData({
            list:res.data
         });
         // that.getData(list);
         }
      });
   }
})
