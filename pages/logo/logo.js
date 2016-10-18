var app = getApp();
Page({
  data: {
      name:"",
    logout:false
  },
  onLoad: function (url) {
    console.log(typeof(url.name));
    if (typeof(url.name)!="undefined") {
      this.setData({
        name:url.name,
        logout:false
      })
    }else {
      this.setData({
        name:"",
        logout:true
      })
    }
  }
})
