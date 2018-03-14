// components/wxpopup/wxpopup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      PopupShow:{
        type:Boolean,
        value:false,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    AnimationData:'',
    width:500
  },
  ready(){
    let  _this=this
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          width: res.windowWidth
        })
      }
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    ShowPopup(){
     
      let Animation = wx.createAnimation({
        duration:500,
        timingFunction:'ease-in-out',
        delay:0
      })
      this.Animation = Animation
      Animation.translateX(this.data.width).step()
        this.setData({
          AnimationData: Animation.export(),
          PopupShow:true
        })
        setTimeout(()=>{
          Animation.translateX(0).step()
          this.setData({
            AnimationData: Animation.export()
          })
        },300)   
    },
    HidePopup(){
      let Animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease-in-out',
        delay: 0
      })
      this.Animation = Animation
      Animation.translateX(this.data.width).step()
      this.setData({
        AnimationData: Animation.export()
      })
      setTimeout(() => {
        Animation.translateX(0).step()
        this.setData({
          AnimationData: Animation.export(),
          PopupShow: false
        })
      }, 300) 
    }
  }
})
