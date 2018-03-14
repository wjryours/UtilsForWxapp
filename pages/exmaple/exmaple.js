// pages/exmaple/exmaple.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.wxtoast = this.selectComponent('#wxtoast')
    this.wxpopup = this.selectComponent('#wxpopup')
    this.wxdailog = this.selectComponent('#wxdailog')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  ShowToast() {
    this.wxtoast.ShowToast()
  },
  ShowPopup() {
    this.wxpopup.ShowPopup()
  },
  HidePopup() {
    this.wxpopup.HidePopup()
  },
  ShowDailog() {
    this.wxdailog.ShowDailog()
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})