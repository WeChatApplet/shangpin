//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
     current:0,
     gooddata:{
        imgUrl:"",
        text1:"CHRIS BY CHRISTOPHER BU",
        text2:"卜柯文跨界可口可乐：全球限量纪念系列--白色短袖衬衫",
        text3:"首次购物8折优惠",
        price:"3000"
     }
  },
  onLoad: function (url) {
     console.log(url);
     var that=this;
     wx.request({
        url: 'http://localhost:8090/mock/ClassifyGoodsList.json',
        header: {
           'Content-Type': 'application/json'
        },
        success: function(res) {
           for (var i = 0; i < res.data.length; i++) {
              if (res.data[i].group==url.id) {
                 that.setData({
                    gooddata:{
                       imgUrl:res.data[i].imgUrl
                    }
                 })
              }
           }
        }
     })
   //   console.log(url.id.match("goods")==null);
   // if (url.id.match("goods")!=null) {
   //    wx.request({
   //       url: 'http://localhost:8090/mock/ClassifyGoodsList.json',
   //       header: {
   //          'Content-Type': 'application/json'
   //       },
   //       success: function(res) {
   //          for (var i = 0; i < res.data.length; i++) {
   //             if (res.data[i].group==url.id) {
   //                that.setData({
   //                   gooddata:{
   //                      imgUrl:res.data[i].imgUrl
   //                   }
   //                })
   //             }
   //          }
   //       }
   //    })
   // }
   // else {
   //    var index=url.id.split("group")[1];
   //    wx.request({
   //       url: 'http://localhost:8090/mock/ClassifyGoodsListGroup2.json',
   //       header: {
   //          'Content-Type': 'application/json'
   //       },
   //       success: function(res) {
   //          for (var i = 0; i < res.data.length; i++) {
   //             if (i==index) {
   //                that.setData({
   //                   gooddata:{
   //                      imgUrl:res.data[i].imgUrl,
   //                   }
   //                })
   //             }
   //          }
   //       }
   //    })
   // }
 },
 switchSlider:function (event) {
    this.setData({
      current:event.target.dataset.index
   })
},
 changeSlider:function (event) {
    this.setData({
     current: event.detail.current
  });
 }
});
