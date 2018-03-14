// components/wxtoast/wxtoast.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      WxtoastShow:{
        type:Boolean,
        value:false
      },
      WxtoastContent:{
        type:String,
        value:'this is toast'
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    AnimationData:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ShowToast() {
      let Animation = wx.createAnimation({
        duration:300,
        timingFunction:'ease-in-out',
        delay:0
      })
      this.Animation = Animation
      Animation.opacity(0).step()
      this.setData({
        AnimationData: Animation.export(),
        WxtoastShow: true
      })
      setTimeout(()=>{
        Animation.opacity(0.5).step()
        this.setData({
          AnimationData: Animation.export()
        })
      },300)
      let timer = setTimeout(()=>{
        this.HideToast()
      },2000)
    },
    HideToast() {
      let Animation = wx.createAnimation({
        duration:500,
        timingFunction:'ease-in-out',
        delay:0
      })
      this.Animation = Animation
      Animation.opacity(0).step()
      this.setData({
        AnimationData: Animation.export(),
      })
      setTimeout(()=>{
        Animation.opacity(0.5).step()
        this.setData({
          AnimationData: Animation.export(),
          WxtoastShow: false
        })
      },500)
     
    }
  }
})
