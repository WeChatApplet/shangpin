Page({
  data: {
    current: 0,
    goodsList: [],
    group:"",
    loadingHidden: false,
    refreshHidden: true,
    loadmoreHidden: true,
    scrollTop: 1,
    swiper: {
      indicatorDots: false,
      autoplay: false,
      interval: 0,
      duration: 300,
    }
  },

  onLoad: function (url) {
     var that = this;
     that.setData({
        group:url.group
     });
     switch (url.group) {
        case "group3":
        case "group1":
           wx.request({
            //  url: 'http://localhost:8090/mock/ClassifyGoodsList.json',
             url:'http://zhengzh.applinzi.com/weixindata/ClassifyGoodsList.json',
             header: {
                'Content-Type': 'application/json'
             },
             success: function(res) {
              setTimeout(function () {
                that.setData({
                   goodsList: res.data,
                   loadingHidden: true
                });
              }, 1500);
             },
             fail: function (error) {
              console.log(error);
             }
           });
         break;
        case "group4":
        case "group2":
          wx.request({
            // url: 'http://localhost:8090/mock/ClassifyGoodsListGroup2.json',
            url:'http://zhengzh.applinzi.com/weixindata/ClassifyGoodsListGroup2.json',
            header: {
               'Content-Type': 'application/json'
            },
            success: function(res) {
             setTimeout(function () {
               that.setData({
                  goodsList: res.data,
                  loadingHidden: true
               });
             }, 1500);
            },
            fail: function (error) {
             console.log(error);
            }
          });
         break;
     }
  },

  //上划
  actionToupper: function () {
      console.log("上划中");
  },

  //下滑
  actionTolower: function () {
    var that = this;
    this.setData({
      loadmoreHidden: false
    });

    switch (this.data.group) {
      case "group1":
      case "group3":
      case "group5":
      case "group7":
      case "group9":
          wx.request({
           url: 'http://localhost:8090/mock/ClassifyGoodsList.json',
           //url:'http://zhengzh.applinzi.com/ClassifyGoodsList.json',
           header: {
               'Content-Type': 'application/json'
           },
           success: function(res) {
             setTimeout(function () {
               that.setData({
                  goodsList: that.data.goodsList.concat(res.data),
                  loadingHidden: true
               });
             }, 1500);
           }
          });
        break;
      case "group2":
      case "group4":
      case "group6":
      case "group8":
      case "group10":
         wx.request({
           url: 'http://localhost:8090/mock/ClassifyGoodsListGroup2.json',
           //url:'http://zhengzh.applinzi.com/ClassifyGoodsListGroup2.json',
           header: {
             'Content-Type': 'application/json'
           },
           success: function(res) {
              setTimeout(function () {
                that.setData({
                    goodsList: that.data.goodsList.concat(res.data),
                    loadingHidden: true
                });
              }, 1500);
           },
           fail: function (error) {
              console.log(error);
           }
         });
     break;

    }
},

//切换页面
  switchSlider: function (event) {
    this.setData({
      current: event.target.dataset.index
    })
  },

  changeSlider: function (event) {
    this.setData({
      current: event.detail.current
    });
   }
});
