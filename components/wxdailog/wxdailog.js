// components/wxdailog/wxdailog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Width:{
      type:Number,
      value:300
    },
    Height:{
      type: Number,
      value: 300
    },
    BorderRadius:{
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    Wxdailog:false,
    AnimationData: '',
    AnimationDataMask:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ShowDailog() {
      this.ShowMask()
      let Animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-in-out',
        delay: 0
      })
      this.Animation = Animation
      Animation.translateY(1500).step()
      this.setData({
        AnimationData: Animation.export(),
        Wxdailog: true
      })
      setTimeout(() => {
        Animation.translateY(0).step()
        this.setData({
          AnimationData: Animation.export()
        })
      }, 300)
    },
    HideDailog() {
      this.HideMask()
      let Animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-in-out',
        delay: 0
      })
      this.Animation = Animation
      Animation.translateY(1500).step()
      this.setData({
        AnimationData: Animation.export()
      })
      setTimeout(() => {
        Animation.translateY(0).step()
        this.setData({
          AnimationData: Animation.export(),
          Wxdailog: false
        })
      }, 300)
    },
    ShowMask(){
      let Animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-in-out',
        delay: 0
      })
      this.Animation = Animation
      Animation.opacity(0).step()
      this.setData({
        AnimationDataMask: Animation.export(),
        WxtoastShow: true
      })
      setTimeout(() => {
        Animation.opacity(0.7).step()
        this.setData({
          AnimationDataMask: Animation.export()
        })
      }, 300)
    },
    HideMask(){
      let Animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease-in-out',
        delay: 0
      })
      this.Animation = Animation
      Animation.opacity(0).step()
      this.setData({
        AnimationDataMask: Animation.export(),
      })
      setTimeout(() => {
        Animation.opacity(0.7).step()
        this.setData({
          AnimationDataMask: Animation.export(),
          WxtoastShow: false
        })
      }, 500)
    }
  }
})
