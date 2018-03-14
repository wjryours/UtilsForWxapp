// components/wxclip/wxclip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    WxclipShow:true,//组件是否显示
    ImagePath:'',//本地图片路径
    windowWidth:'',//可用窗口宽
    windowHeight: '',//可用窗口高
    CanvasWidth: "",//画布宽
    CanvasHeight:'',//画布高
    ImageRatio:1,//传入图片宽高比 w/h 默认为1
  },
  created(){

  },
  ready(){
    // this.GetSystemInfo()
    console.log('123')
    let ctx = wx.createCanvasContext('wxclip_canvas')
    console.log(ctx)
    ctx.setFillStyle('red')
    ctx.fillRect(0, 0, 150, 150)
    ctx.draw()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    InitCanvas(){

    },
    GetSystemInfo(){
      let _this = this
      wx.getSystemInfo({
        success: function(res) {
          _this.setData({
            windowWidth: res.windowWidth,
            windowHeight: res.windowHeight,
            CanvasWidth: res.windowWidth,
            CanvasHeight: res.windowHeight*0.9,
          })
          _this.SelectImage()
        },
      })
    },
    SelectImage(){
      let _this=this
      wx.chooseImage({
        success: function(res) {
          _this.setData({
            ImagePath:res.tempFilePaths[0]
          })
          wx.getImageInfo({
            src: res.tempFilePaths[0],
            success:function(res){
              let ImageRatio = res.width/res.height
              _this.setData({
                ImageRatio: ImageRatio
              })
              _this.DrawImage()
            }
          })
        },
      })
    },
    DrawImage(){
      console.log(this.data.ImagePath, this.data.CanvasWidth, this.data.CanvasHeight)
      let ctx = wx.createCanvasContext('wxclip_canvas')
      

      ctx.drawImage(this.data.ImagePath, 0, 0, this.data.CanvasWidth, this.data.CanvasHeight)
      ctx.draw()
      ctx.draw() 
    }
  }
})
